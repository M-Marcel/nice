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
import Terms from "./pages/Terms&Condition";import AdminDashboard from "./pages/admin/dashboard";
import VerifyUser from "./pages/auth/verifyUser";
;


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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/request-a-feature" element={<RequestAFeature />} />
        <Route path="/waitlist" element={<WaitList />} />
        <Route path="/draganddrop" element={<DragandDrop />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/verifyUser" element={<VerifyUser />} />
        <Route path="/let-us-know-you" element={<LetUsKnowYou />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <ToastContainer />
    </ModalProvider>
  );
}

export default App;
