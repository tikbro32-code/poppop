import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  auth, 
  googleProvider, 
  facebookProvider,
  appleProvider,
  lineProvider,
  kakaoProvider,
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  FirebaseUser 
} from '../../lib/firebase';

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

const getFriendlyErrorMessage = (error: any) => {
  const code = error?.code;
  switch (code) {
    case 'auth/popup-closed-by-user':
      return 'Login popup was closed. Please try again.';
    case 'auth/cancelled-popup-request':
      return 'Login request was cancelled. Please try again.';
    case 'auth/operation-not-allowed':
      return 'This login method is not enabled yet in Firebase Console. Please contact the administrator.';
    case 'auth/internal-error':
      return 'An internal error occurred. Please try again later.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    default:
      return error.message || 'An unexpected error occurred. Please try again.';
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          name: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
          provider: firebaseUser.providerData[0]?.providerId
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (providerName: string) => {
    try {
      let provider;
      switch (providerName) {
        case 'Google':
          provider = googleProvider;
          break;
        case 'Facebook':
          provider = facebookProvider;
          break;
        case 'Apple':
          provider = appleProvider;
          break;
        case 'LINE':
          provider = lineProvider;
          break;
        case 'KakaoTalk':
          provider = kakaoProvider;
          break;
        default:
          throw new Error(`${providerName} login not implemented yet.`);
      }
      
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') {
        console.error("Login Error:", error);
      }
      
      throw new Error(getFriendlyErrorMessage(error));
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
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
