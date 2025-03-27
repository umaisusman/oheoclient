import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "./Components/loader/Loader"; 
import SignupPage from "./Components/SignIn/SignIn";
import SignupSecondPage from "./Components/SigninSecondpage/SignInSecond";
import Signup from "./Components/SignUpthirdpage/SignUp";
import Signupcode from "./Components/SignUpthirdpage/Signupcode";
import Forgetpassword from "./Components/Forgetpassword/Forgetpassword";
import Resetpassword from "./Components/Resetpassword/Resetpassword";
import OAuthHandler from "./Components/OAuthHandler";
import OnBoard from "./Screens/OnBoard/OnBoard";
import PricingPlans from "./Screens/Payment/payment";
import CardDetails from "./Screens/CardDetails/CardDetails";
import PaymentSuccess from "./Screens/paymentsuccess/paymentscuccess";
import HomeDashoard from "./Screens/Home/Home";
import Homepage from "./Screens/LandinPageScreens/HomePage/Homepage";
import Secondlanding from "./Screens/LandinPageScreens/secondlandingpage/secondlandingpage";
import HeroSection from "./Screens/dashboardmockup/Hero-section/hero-section";
import SecondLandingoh from "./Screens/secondLandingtoo/SecondLandingoh";
import Career from "./Screens/FooterScreens/Career/Career";

import PrivacyPolicys from "./Screens/FooterScreens/PrivacyPolicy/PrivacyPolicy";
import Terms from "./Screens/TermsCondition/Terms";
import PrivacyControls from "./Screens/PrivacyControls/PrivacyControls";
import FirstFooter from "./Screens/FooterScreens/firstFooter/Footer";

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <div style={{ display: loading ? "none" : "block" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mockup" element={<HeroSection />} />
          <Route path="/about" element={<FirstFooter />} />
          <Route path="/career" element={<Career />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/PrivacyControl" element={<PrivacyControls />} />
          <Route path="/privacy" element={<PrivacyPolicys />} />
          <Route path="/SignupCode" element={<SignupPage />} />
          <Route path="/mainpage" element={<SecondLandingoh />} />
          <Route path="/StartFreeTrail" element={<Secondlanding />} />
          <Route path="/Signup" element={<SignupSecondPage />} />
          <Route path="/Login" element={<Signup />} />
          <Route path="/Logincode" element={<Signupcode />} />
          <Route path="/auth/apple/callback" element={<OAuthHandler />} />
          <Route path="/Forgetpassword" element={<Forgetpassword />} />
          <Route path="/Resetpassword/:token" element={<Resetpassword />} />

          {/* Protected Routes */}
          <Route path="/onBoard" element={<ProtectedRoute><OnBoard /></ProtectedRoute>} />
          <Route path="/Payment" element={<ProtectedRoute><PricingPlans /></ProtectedRoute>} />
          <Route path="/CardDetails" element={<ProtectedRoute><CardDetails /></ProtectedRoute>} />
          <Route path="/paymentSuccess" element={<ProtectedRoute><PaymentSuccess /></ProtectedRoute>} />
          <Route path="/Home" element={<ProtectedRoute><HomeDashoard /></ProtectedRoute>} />
        </Routes>
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
