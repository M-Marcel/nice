import { useState } from "react";
import CommunityBot from "../components/communityBot";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Modal from "../components/Modal";
import Purpose from "../components/Purpose";
import SignUp from "./auth/signup";
import Login from "./auth/login";
import ForgotPassword from "./auth/forgot-password";
import ValidateOtp from "./auth/validate-otp";
import ResetPassword from "./auth/reset-password";
import PasswordChangeSuccess from "../components/PasswordChangeSuccess";

const Home = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [email, setEmail] = useState<string>("");

    return (
        <>
            <div className="home">
                <Hero>
                    <Header
                        openSignUpModal={() => setActiveModal("signup")}
                        openLoginModal={() => setActiveModal("login")}
                    />
                    <Heading />
                </Hero>
                <Purpose />
                <CommunityBot />
                <Join />
                <Footer />
            </div>

            {/* Modals */}
            <Modal isVisible={activeModal === "signup"} onClose={() => setActiveModal(null)}>
                <SignUp />
            </Modal>
            <Modal isVisible={activeModal === "login"} onClose={() => setActiveModal(null)}>
                <Login openForgotPasswordModal={() => setActiveModal("forgotPassword")} />
            </Modal>
            <Modal isVisible={activeModal === "forgotPassword"} onClose={() => setActiveModal(null)}>
                <ForgotPassword
                    openValidateOtpModal={() => setActiveModal("validateOtp")}
                    setEmail={setEmail}
                />
            </Modal>
            <Modal isVisible={activeModal === "validateOtp"} onClose={() => setActiveModal(null)}>
                <ValidateOtp openResetPasswordModal={() => setActiveModal("resetPassword")} email={email} />
            </Modal>
            <Modal isVisible={activeModal === "resetPassword"} onClose={() => setActiveModal(null)}>
                <ResetPassword
                    email={email}
                    openPasswordChangeSuccessModal={() => setActiveModal("passwordChangeSuccess")}
                />
            </Modal>
            <Modal isVisible={activeModal === "passwordChangeSuccess"} onClose={() => setActiveModal(null)}>
                <PasswordChangeSuccess
                    openLoginModal={() => setActiveModal("login")}
                />
            </Modal>
        </>
    );
};

export default Home;
