import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../../lib/supabase';

interface User {
  uid: string;
  name: string | null;
  email: string | null;
  photoURL: string | null;
  provider?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (providerName: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If we are in a popup (from OAuth), close it after a short delay 
    // to let Supabase process the URL hash first
    if (window.opener) {
      setTimeout(() => {
        window.close();
      }, 1500);
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          uid: session.user.id,
          name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || null,
          email: session.user.email || null,
          photoURL: session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture || null,
          provider: session.user.app_metadata?.provider || 'supabase'
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          uid: session.user.id,
          name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || null,
          email: session.user.email || null,
          photoURL: session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture || null,
          provider: session.user.app_metadata?.provider || 'supabase'
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (providerName: string) => {
    try {
      let provider: any;
      switch (providerName) {
        case 'Google':
          provider = 'google';
          break;
        case 'Facebook':
          provider = 'facebook';
          break;
        case 'Apple':
          provider = 'apple';
          break;
        default:
          throw new Error(`${providerName} login not implemented yet.`);
      }
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: window.location.origin,
          skipBrowserRedirect: true,
          queryParams: provider === 'google' ? {
            access_type: 'offline',
            prompt: 'consent',
          } : undefined
        }
      });
      
      if (error) {
        console.warn("OAuth error:", error.message);
        throw error;
      }

      const oauthData = data as any;
      if (oauthData?.url) {
        // AI Studio iframe doesn't allow top-level redirect to Google, so we must use a popup
        const width = 500;
        const height = 600;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;
        
        const popup = window.open(
          oauthData.url,
          'supabase_oauth',
          `width=${width},height=${height},left=${left},top=${top},toolbar=0,scrollbars=1,status=1,resizable=1`
        );

        if (!popup) {
          throw new Error('Sila benarkan pop-up (Allow pop-ups) untuk log masuk.');
        }
      }
    } catch (error: any) {
      console.warn("Login Error:", error.message);
      throw new Error(error.message || 'An unexpected error occurred. Please try again.');
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Logout Error:", error);
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

