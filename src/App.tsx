import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './data/context/AuthContext';
import { UIProvider } from './data/context/UIContext';

const LandingPage = lazy(() => import('./components/LandingPage'));
const MainLayout = lazy(() => import('./components/MainLayout'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const SignupPage = lazy(() => import('./components/SignupPage'));
const LoginCredentialsPage = lazy(() => import('./components/LoginCredentialsPage'));
const TransparencyPage = lazy(() => import('./components/TransparencyPage'));
const WorkspacePage = lazy(() => import('./components/WorkspacePage'));
const HunterPage = lazy(() => import('./components/HunterPage'));
const GetAppPage = lazy(() => import('./components/GetAppPage'));
const MonitorPage = lazy(() => import('./components/MonitorPage'));
const PublishPage = lazy(() => import('./components/PublishPage'));
const SupportPage = lazy(() => import('./components/SupportPage'));
const TermsPolicyPage = lazy(() => import('./components/TermsPolicyPage'));
const SupportArticlePage = lazy(() => import('./components/SupportArticlePage'));
const SupportPlusPage = lazy(() => import('./components/SupportPlusPage'));
const SupportPrivacyPage = lazy(() => import('./components/SupportPrivacyPage'));
const SupportAccountPage = lazy(() => import('./components/SupportAccountPage'));
const SupportUsagePage = lazy(() => import('./components/SupportUsagePage'));
const SupportPostingPage = lazy(() => import('./components/SupportPostingPage'));
const SupportLivePage = lazy(() => import('./components/SupportLivePage'));
const SupportMonetizationPage = lazy(() => import('./components/SupportMonetizationPage'));
const SupportPrivacySafetyPage = lazy(() => import('./components/SupportPrivacySafetyPage'));
const SupportOtherPage = lazy(() => import('./components/SupportOtherPage'));
const LegalDocsPage = lazy(() => import('./components/LegalDocsPage'));
const LivePage = lazy(() => import('./components/LivePage'));
const VideoEditorPage = lazy(() => import('./components/VideoEditorPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const NewsroomPage = lazy(() => import('./components/NewsroomPage'));
const CareersPage = lazy(() => import('./components/CareersPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const IntellectualPropertyPage = lazy(() => import('./components/IntellectualPropertyPage'));
const HarmfulMisinformationPage = lazy(() => import('./components/HarmfulMisinformationPage'));
const WellbeingGuidePage = lazy(() => import('./components/WellbeingGuidePage'));
const InclusivityGuidePage = lazy(() => import('./components/InclusivityGuidePage'));
const LiveSafetyGuidePage = lazy(() => import('./components/LiveSafetyGuidePage'));
const GuardiansGuidePage = lazy(() => import('./components/GuardiansGuidePage'));
const YouthSafetyCenterPage = lazy(() => import('./components/YouthSafetyCenterPage'));
const PartneringWithExpertsPage = lazy(() => import('./components/PartneringWithExpertsPage'));
const ContentModerationPage = lazy(() => import('./components/ContentModerationPage'));
const CommunityGuidelinesPage = lazy(() => import('./components/CommunityGuidelinesPage'));

const ProfilePage = lazy(() => import('./components/ProfilePage'));
const MessagesPage = lazy(() => import('./components/MessagesPage'));
const ShopPage = lazy(() => import('./components/ShopPage'));
const PopproShopSellerPage = lazy(() => import('./components/PopproShopSellerPage'));
const ExplorePage = lazy(() => import('./components/ExplorePage'));
const SearchResultsPage = lazy(() => import('./components/SearchResultsPage'));
const ActivityPage = lazy(() => import('./components/ActivityPage'));
const FriendsPage = lazy(() => import('./components/FriendsPage'));
const SettingsPage = lazy(() => import('./components/SettingsPage'));
const SafetyPage = lazy(() => import('./components/SafetyPage'));
const NewUserGuidePage = lazy(() => import('./components/NewUserGuidePage'));
const PrivacySettingsPage = lazy(() => import('./components/PrivacySettingsPage'));
const CustomizingFeedPage = lazy(() => import('./components/CustomizingFeedPage'));
const ReportingPage = lazy(() => import('./components/ReportingPage'));
const SafeSharingPage = lazy(() => import('./components/SafeSharingPage'));
const FAQPage = lazy(() => import('./components/FAQPage'));
const ManageVideosPage = lazy(() => import('./components/ManageVideosPage'));
const PopproForGoodPage = lazy(() => import('./components/PopproForGoodPage'));
const PopproAdsPage = lazy(() => import('./components/PopproAdsPage'));
const PopproLiveAgencyPage = lazy(() => import('./components/PopproLiveAgencyPage'));
const PopproDevelopersPage = lazy(() => import('./components/PopproDevelopersPage'));
const PopproEmbedsPage = lazy(() => import('./components/PopproEmbedsPage'));
const SoundOnPage = lazy(() => import('./components/SoundOnPage'));
const PopproStudioPage = lazy(() => import('./components/PopproStudioPage'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login-credentials" element={<LoginCredentialsPage />} />
              <Route path="/terms" element={<TermsPolicyPage />} />
              <Route path="/safety" element={<SafetyPage />} />
              <Route path="/new-user-guide" element={<NewUserGuidePage />} />
              <Route path="/privacy-settings" element={<PrivacySettingsPage />} />
              <Route path="/customizing-feed" element={<CustomizingFeedPage />} />
              <Route path="/reporting" element={<ReportingPage />} />
              <Route path="/safe-sharing" element={<SafeSharingPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/manage-videos" element={<ManageVideosPage />} />
              <Route path="/for-good" element={<PopproForGoodPage />} />
              <Route path="/ads" element={<PopproAdsPage />} />
              <Route path="/seller" element={<PopproShopSellerPage />} />
              <Route path="/live-agency" element={<PopproLiveAgencyPage />} />
              <Route path="/developers" element={<PopproDevelopersPage />} />
              <Route path="/embeds" element={<PopproEmbedsPage />} />
              <Route path="/soundon" element={<SoundOnPage />} />
              <Route path="/studio" element={<PopproStudioPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/support/account" element={<SupportAccountPage />} />
              <Route path="/support/usage" element={<SupportUsagePage />} />
              <Route path="/support/posting" element={<SupportPostingPage />} />
              <Route path="/support/live" element={<SupportLivePage />} />
              <Route path="/support/monetization" element={<SupportMonetizationPage />} />
              <Route path="/support/privacy-safety" element={<SupportPrivacySafetyPage />} />
              <Route path="/support/other" element={<SupportOtherPage />} />
              <Route path="/support/article" element={<SupportArticlePage />} />
              <Route path="/support/verify-card" element={<SupportArticlePage />} />
              <Route path="/support/poppro-plus" element={<SupportPlusPage />} />
              <Route path="/support/privacy-face-voice" element={<SupportPrivacyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/newsroom" element={<NewsroomPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/legal" element={<LegalDocsPage />} />
              <Route path="/legal/:docId" element={<LegalDocsPage />} />
              <Route path="/intellectual-property" element={<IntellectualPropertyPage />} />
              <Route path="/harmful-misinformation" element={<HarmfulMisinformationPage />} />
              <Route path="/wellbeing-guide" element={<WellbeingGuidePage />} />
              <Route path="/inclusivity-guide" element={<InclusivityGuidePage />} />
              <Route path="/live-safety-guide" element={<LiveSafetyGuidePage />} />
              <Route path="/guardians-guide" element={<GuardiansGuidePage />} />
              <Route path="/youth-safety-center" element={<YouthSafetyCenterPage />} />
              <Route path="/partnering-with-experts" element={<PartneringWithExpertsPage />} />
              <Route path="/content-moderation" element={<ContentModerationPage />} />
              <Route path="/community-guidelines" element={<CommunityGuidelinesPage />} />
              <Route element={<MainLayout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="/activity" element={<ActivityPage />} />
                <Route path="/friends" element={<FriendsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/transparency" element={<TransparencyPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/following" element={<WorkspacePage />} />
                <Route path="/hunter" element={<HunterPage />} />
                <Route path="/get-app" element={<GetAppPage />} />
                <Route path="/monitor" element={<MonitorPage />} />
                <Route path="/upload" element={<PublishPage />} />
                <Route path="/editor" element={<VideoEditorPage />} />
                <Route path="/live" element={<LivePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/@:username" element={<ProfilePage />} />
                <Route path="/messages" element={<MessagesPage />} />
                <Route path="*" element={<LandingPage />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </UIProvider>
    </AuthProvider>
  );
}
