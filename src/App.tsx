// import logo from './logo.svg';
import { Route, Routes} from "react-router-dom";

import './App.css';
import Home from "./pages/home";
import Features from "./pages/features";
import Community from "./pages/community";
import Integrations from "./pages/integrations";
import Pricing from "./pages/pricing";
import WaitList from "./pages/waitlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/community" element={<Community />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/waitlist" element={<WaitList />} />

    </Routes>
  );
}

export default App;
