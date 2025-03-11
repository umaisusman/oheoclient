import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "./Components/Loader/Loader"; // Ensure correct path
import SignupPage from "./Components/SignIn/SignIn";
import SignupSecondPage from "./Components/SigninSecondpage/SignInSecond";
import Signup from "./Components/SignUpthirdpage/SignUp";
import Signupcode from "./Components/SignUpthirdpage/Signupcode";
import Forgetpassword from "./Components/Forgetpassword/Forgetpassword";
import Resetpassword from "./Components/Resetpassword/Resetpassword";
import OAuthHandler from "./Components/OAuthHandler";
import OnBoard from "./Screens/OnBoard/OnBoard";
import PaymentPlans from "./Screens/Payment/payment";
import PricingPlans from "./Screens/Payment/payment";
import CardDetails from "./Screens/CardDetails/CardDetails";
import PaymentSuccess from "./Screens/paymentsuccess/paymentscuccess";
import HomeDashoard from "./Screens/Home/Home";
import Homepage from "./Screens/LandinPageScreens/HomePage/Homepage";
import Secondlanding from "./Screens/LandinPageScreens/secondlandingpage/secondlandingpage";
import HeroSection from "./Screens/dashboardmockup/Hero-section/hero-section";
import SecondLandingoh from "./Screens/secondLanding/SecondLandingoh";

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // Ensures loader stays for a while
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <div style={{ display: loading ? "none" : "block" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mockup" element={<HeroSection />} />
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
