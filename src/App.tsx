import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./pages/home";
import Features from "./pages/features";
import Community from "./pages/community";
import Integrations from "./pages/integrations";
import Pricing from "./pages/pricing";
import WaitList from "./pages/waitlist";
import DragandDrop from "./components/DragandDrop";
import LetUsKnowYou from "./pages/auth/let-us-know-you";
import VerifyEmail from "./pages/auth/verifyEmail";
import { ModalProvider } from "./context/ModalContext"; // Import ModalProvider
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";

function App() {
  return (
    <ModalProvider> {/* Wrap the entire Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/community" element={<Community />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/waitlist" element={<WaitList />} />
        <Route path="/draganddrop" element={<DragandDrop />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/let-us-know-you" element={<LetUsKnowYou />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}  />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </ModalProvider>
  );
}

export default App;
