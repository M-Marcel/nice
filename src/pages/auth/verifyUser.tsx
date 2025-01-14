import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const VERIFY_USER_URL = `${process.env.REACT_APP_BASEURL}/api/v1/auth/auth/verify-user`;

interface ApiErrorResponse {
  message: string;
}

// Handle API errors
const handleApiError = (error: AxiosError): void => {
  const errorMessage =
    (error.response?.data as ApiErrorResponse)?.message ||
    'An unexpected error occurred. Please try again.';
  toast.error(errorMessage);
};

const VerifyUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get(VERIFY_USER_URL, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });

        if (response.status === 200) {
          navigate('/dashboard');
        } else {
          toast.error(response.data.message || 'User does not exist. Please sign up or log in.');
          navigate('/');
        }
      } catch (error) {
        if(axios.isAxiosError(error)) {
          handleApiError(error);
        } else {
          toast.error('An unknown error occurred.');
        }
        navigate('/');
      }
    };

    verifyUser();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Verifying user... Please wait.</p>
    </div>
  );
};

export default VerifyUser;
