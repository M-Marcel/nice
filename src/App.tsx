// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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

function App() {
  return (
    <>
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
        
      </Routes>
      <ToastContainer />
    </>

  );
}

export default App;
