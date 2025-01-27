import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks";
import { verifyUser } from "../../slices/auth/authSlice";

const VerifyUser = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { search } = useLocation();

  useEffect(() => {
    const verifyUserProfile = async () => {
      const token = new URLSearchParams(search).get("token");
      console.log("Token:", token);
      if (!token) {
        toast.error("No token provided. Please try signing in again.");
        navigate("/");
        return;
      }

      try {
        // Dispatch verifyUser and get the profile
        const profile = await dispatch(verifyUser(token)).unwrap();
        console.log("User profile:", profile);

        // Store token in localStorage only if verification is successful
        localStorage.setItem("token", token);

        // Navigate to dashboard after successful verification
        toast.success("Welcome back!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error verifying user:", error);
        toast.error("Verification failed. Please try again.");
        navigate("/");
      }
    };

    verifyUserProfile();
  }, [navigate, search, dispatch]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Verifying user... Please wait.</p>
    </div>
  );
};

export default VerifyUser;
