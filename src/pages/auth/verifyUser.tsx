import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks";
import { verifyUser, getProfile } from "../../slices/auth/authSlice";


const VerifyUser = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { search } = useLocation();

  useEffect(() => {
    const verifyUserProfile = async () => {
      const token = new URLSearchParams(search).get("token");
      console.log("Token:", token);
      
      if (!token) {
        toast.error("No token provided. Please check your verification link.");
        navigate("/");
        return;
      }
     

      try {
        // Attempt to verify the user
        const user = await dispatch(verifyUser(token)).unwrap();
        console.log("User verification response:", user);

        if (user) {
          // Store token only on success
          localStorage.setItem("token", token);

          // Fetch profile to confirm user exists
          const profile = await dispatch(getProfile()).unwrap();
          if (profile) {
            toast.success("Welcome back! Redirecting to your dashboard...");
            window.location.href = "/dashboard";
            return;
          }
        }

        // If verification fails but user exists, send to completion page
        toast.warning("Account verification incomplete. Please update your profile.");
        navigate("/let-us-know-you", { state:  { provider: 'Google' } });

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
