import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './data/context/AuthContext';
import { UIProvider } from './data/context/UIContext';
import LandingPage from './components/LandingPage';
import MainLayout from './components/MainLayout';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import LoginCredentialsPage from './components/LoginCredentialsPage';
import TransparencyPage from './components/TransparencyPage';
import WorkspacePage from './components/WorkspacePage';
import HunterPage from './components/HunterPage';
import GetAppPage from './components/GetAppPage';
import MonitorPage from './components/MonitorPage';
import PublishPage from './components/PublishPage';
import SupportPage from './components/SupportPage';
import TermsPolicyPage from './components/TermsPolicyPage';
import SupportArticlePage from './components/SupportArticlePage';
import SupportPlusPage from './components/SupportPlusPage';
import SupportPrivacyPage from './components/SupportPrivacyPage';
import SupportAccountPage from './components/SupportAccountPage';
import SupportUsagePage from './components/SupportUsagePage';
import SupportPostingPage from './components/SupportPostingPage';
import SupportLivePage from './components/SupportLivePage';
import SupportMonetizationPage from './components/SupportMonetizationPage';
import SupportPrivacySafetyPage from './components/SupportPrivacySafetyPage';
import SupportOtherPage from './components/SupportOtherPage';
import LivePage from './components/LivePage';
import VideoEditorPage from './components/VideoEditorPage';
import AboutPage from './components/AboutPage';
import NewsroomPage from './components/NewsroomPage';
import CareersPage from './components/CareersPage';
import ContactPage from './components/ContactPage';
import ProfilePage from './components/ProfilePage';
import MessagesPage from './components/MessagesPage';
import ShopPage from './components/ShopPage';
import ExplorePage from './components/ExplorePage';
import SearchResultsPage from './components/SearchResultsPage';
import ActivityPage from './components/ActivityPage';
import FriendsPage from './components/FriendsPage';
import SettingsPage from './components/SettingsPage';
import SafetyPage from './components/SafetyPage';
import NewUserGuidePage from './components/NewUserGuidePage';
import PrivacySettingsPage from './components/PrivacySettingsPage';
import CustomizingFeedPage from './components/CustomizingFeedPage';
import FAQPage from './components/FAQPage';
import ManageVideosPage from './components/ManageVideosPage';
import PopproForGoodPage from './components/PopproForGoodPage';
import PopproAdsPage from './components/PopproAdsPage';

export default function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login-credentials" element={<LoginCredentialsPage />} />
          <Route path="/terms" element={<TermsPolicyPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/new-user-guide" element={<NewUserGuidePage />} />
          <Route path="/privacy-settings" element={<PrivacySettingsPage />} />
          <Route path="/customizing-feed" element={<CustomizingFeedPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/manage-videos" element={<ManageVideosPage />} />
          <Route path="/for-good" element={<PopproForGoodPage />} />
          <Route path="/ads" element={<PopproAdsPage />} />
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
          <Route path="/*" element={
            <MainLayout>
              <Routes>
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
              </Routes>
            </MainLayout>
          } />
        </Routes>
      </Router>
      </UIProvider>
    </AuthProvider>
  );
}
