import { useModal } from "../context/ModalContext";
import ForgotPassword from "../pages/auth/forgot-password";
import Login from "../pages/auth/login";
import ResetPassword from "../pages/auth/reset-password";
import SignUp from "../pages/auth/signup";
import ValidateOtp from "../pages/auth/validate-otp";
import Modal from "./Modal";
import PasswordChangeSuccess from "./PasswordChangeSuccess";
import { enablePageScroll } from "scroll-lock"
import TelegramModal from "./telegramModal";




type ModalsProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

const Modals = ({ email, setEmail }: ModalsProps) => {
  const { activeModal, setActiveModal } = useModal();

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "auto";
    enablePageScroll()

  };


  return (
    <>
      {/* Signup Modal */}
      <Modal isVisible={activeModal === "signup"} onClose={closeModal}>
        <SignUp />
      </Modal>

      <Modal isVisible={activeModal === "telegramModal"} onClose={closeModal}>
        <TelegramModal />
      </Modal>
      {/* Login Modal */}
      <Modal isVisible={activeModal === "login"} onClose={closeModal}>
        <Login
          openForgotPasswordModal={() => setActiveModal("forgotPassword")}
          openSignUpModal={() => setActiveModal("signup")}
          openTelegramModal={() => setActiveModal("telegramModal")}
        />
      </Modal>

      {/* Forgot Password Modal */}
      <Modal isVisible={activeModal === "forgotPassword"} onClose={closeModal}>
        <ForgotPassword
          openValidateOtpModal={() => setActiveModal("validateOtp")}
          setEmail={setEmail}
        />
      </Modal>

      {/* Validate OTP Modal */}
      <Modal isVisible={activeModal === "validateOtp"} onClose={closeModal}>
        <ValidateOtp
          openResetPasswordModal={() => setActiveModal("resetPassword")}
          email={email}
        />
      </Modal>

      {/* Reset Password Modal */}
      <Modal isVisible={activeModal === "resetPassword"} onClose={closeModal}>
        <ResetPassword
          email={email}
          openPasswordChangeSuccessModal={() =>
            setActiveModal("passwordChangeSuccess")
          }
        />
      </Modal>

      {/* Password Change Success Modal */}
      <Modal
        isVisible={activeModal === "passwordChangeSuccess"}
        onClose={closeModal}
      >
        <PasswordChangeSuccess openLoginModal={() => setActiveModal("login")} />
      </Modal>
    </>
  );
};

export default Modals;
