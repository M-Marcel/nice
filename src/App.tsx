import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { setToken } from "./slices/auth/authSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./pages/home";
import Community from "./pages/community";
import FeaturesPage from "./pages/FeaturesPage";
import WaitList from "./pages/waitlist";
import DragandDrop from "./components/DragandDrop";
import LetUsKnowYou from "./pages/auth/let-us-know-you";
import VerifyEmail from "./pages/auth/verifyEmail";
import { ModalProvider } from "./context/ModalContext"; // Import ModalProvider
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import RequestAFeature from "./pages/request-a-feature";
import ProtectedRoute from "./components/ProtectedRoute";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms&Condition";
import AdminDashboard from "./pages/admin/dashboard";
import VerifyUser from "./pages/auth/verifyUser";
import FeatureRequest from "./pages/admin/featureRequest";
import AdminCommunity from "./pages/admin/community";
import AdminLogin from "./pages/admin/auth/login";
import AdminUsers from "./pages/admin/users";
import Admins from "./pages/admin/admins";
import AdminPayment from "./pages/admin/payment";
import EditPlan from "./pages/admin/editPlan";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import AdminProfile from "./pages/admin/profile";
import { DashboardProvider } from "./context/DashboardContext";
import FeatureDetails from "./pages/featureDetail";




function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      dispatch(setToken(storedToken));
    }
    if (storedUser) {
      dispatch({ type: 'auth/userRestored', payload: JSON.parse(storedUser) });
    }
  }, [dispatch]);
  // Testing the staging codebase

  return (
    <ModalProvider>
      <DashboardProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/feature-details" element={<FeatureDetails />} />
          <Route path="/community" element={<Community />} />
          <Route path="/request-a-feature" element={<RequestAFeature />} />
          <Route path="/waitlist" element={<WaitList />} />
          <Route path="/draganddrop" element={<DragandDrop />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/verify-user" element={<VerifyUser />} />
          <Route path="/let-us-know-you" element={<LetUsKnowYou />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route element={<ProtectedAdminRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/feature-request" element={<FeatureRequest />} />
            <Route path="/admin/community" element={<AdminCommunity />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/admins" element={<Admins />} />
            <Route path="/admin/payment" element={<AdminPayment />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/payment/edit-plans" element={<EditPlan />} />

          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <ToastContainer />
      </DashboardProvider>
    </ModalProvider>
  );
}

export default App;
