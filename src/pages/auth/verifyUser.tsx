import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const VerifyUser = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const verifyUser = async () => {
      const token = new URLSearchParams(search).get('token'); // Extract the token from URL
      console.log('Token:', token); // Debugging log

      if (!token) {
        toast.error('No token provided. Please try signing in again.');
        navigate('/'); // Redirect to home
        return;
      }

      console.log('Navigating to /dashboard');
      navigate('/dashboard'); // Redirect to dashboard
    };

    verifyUser();
  }, [navigate, search]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Verifying user... Please wait.</p>
    </div>
  );
};

export default VerifyUser;
