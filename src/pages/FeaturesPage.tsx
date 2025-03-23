import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Modals from "../components/Modals";
import { useModal } from "../context/ModalContext";
import MainFeatures from "../components/MainFeatures";
import TawkTo from "../components/TawkTo";


const FeaturesPage = () => {
  const { setActiveModal } = useModal();
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <div className="home">
        <Hero>
          <Header
            openSignUpModal={() => setActiveModal("signup")}
            openLoginModal={() => setActiveModal("login")}
          />
          <Heading className="">
            <div className="flex flex-col items-center justify-center ">
              <MainFeatures />
            </div>
          </Heading>
          <Join />
          <Footer />
        </Hero>
      </div>
      {/* Tawk.to Script */}
      <TawkTo />
      {/* Modals */}
      <Modals email={email} setEmail={setEmail} />
    </>
  );
};

export default FeaturesPage;
