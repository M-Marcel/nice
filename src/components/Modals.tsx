import { useModal } from "../context/ModalContext"
import ForgotPassword from "../pages/auth/forgot-password"
import Login from "../pages/auth/login"
import ResetPassword from "../pages/auth/reset-password"
import SignUp from "../pages/auth/signup"
import ValidateOtp from "../pages/auth/validate-otp"
import Modal from "./Modal"
import PasswordChangeSuccess from "./PasswordChangeSuccess"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

type ModalsProps = {
    email:string
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    // onSignupComplete: () => void;
}

const Modals = ({email, setEmail}:ModalsProps) => {
    const { activeModal, setActiveModal } = useModal()
   
        if (activeModal) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth; // Calculate scrollbar width
            document.body.style.overflow = "hidden"; 
            document.body.style.paddingRight = `${scrollbarWidth}px`; 
            disablePageScroll()

        } else {
            document.body.style.overflow = "auto"; 
            document.body.style.paddingRight = "0"; 
            enablePageScroll()
        }

    return(
        <>
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
       
    )
}

export default Modals