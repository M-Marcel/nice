import LogoImage from '../../assets/lanepact-logo.png';
import { useEffect, useState } from 'react';
import { SignUpFormData } from '../../dataTypes';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toast } from 'react-toastify';
import { register, reset } from '../../slices/auth/authSlice';
import SubmitButton from '../../components/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import Button from '../../components/Button';
import Google from '../../assets/Google.png'


// const getApiConfig = () => {
//   const env = process.env.REACT_APP_ENV || 'development';
  
//   const apiConfig = {
//     development: {
//       baseUrl: "https://apijhnvuokjgsbgyerbfgdev.lanepact.com",
//     },
//     staging: {
//       baseUrl: "https://apidhykngtwistaging.lanepact.com",
//     },
//     production: {
//       baseUrl: "https://coreapi.lanepact.com",
//     }
//   };

//   return apiConfig[env as keyof typeof apiConfig];
// };

// const { baseUrl } = getApiConfig();

const baseUrl = process.env.REACT_APP_BASEURL

const GOOGLE_URL = `${baseUrl}/api/v1/auth/google`;

const SignUp = () => {
  const { setActiveModal } = useModal();
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const { firstName, lastName, email } = formData;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Selectors to manage state from auth slice
  const { isLoading, isSuccess, message } = useAppSelector((state) => state.auth);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      return toast.error('Please fill in all fields');
    } else {
      // Save email in localStorage before dispatch
      localStorage.setItem('userEmail', email);
      const userData = { firstName, lastName, email };
      dispatch(register(userData));
    }
  };

  const handleGoogleSignUp = () => {
    const googleAuthUrl = `${GOOGLE_URL}`
    window.location.href = googleAuthUrl;
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('A verification link has been sent to your email.');
      navigate('/'); // Redirect to the home or login page
      setActiveModal(null); // Close modal if registration is successful
    }
    // Reset any authentication-related state when the component unmounts
    return () => {
      dispatch(reset());
    };
  }, [isSuccess, message, dispatch, setActiveModal, navigate]);

  return (
    <div className="bg-white px-4 py-4 h-full">
      <div className="flex flex-col gap-2 mb-3">
        <img src={LogoImage} alt="logo" width={20} height={20} />
        <h2 className="text-black-500 text-xl mt-4">Sign up</h2>
        <p className="text-gray-500 text-sm mb-3">What is your email address?</p>
      </div>

      <form onSubmit={handleContinue} className="h-auto lg:h-[48vh] overflow-y-scroll hide-scrollbar">
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="firstName" className="text-sm text-gray-400">
            Firstname
          </label>
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={onChange}
            className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="lastName" className="text-sm text-gray-400">
            Lastname
          </label>
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={onChange}
            className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="email" className="text-sm text-gray-400">
            Email
          </label>
          <input
            type="text"
            value={email}
            name="email"
            onChange={onChange}
            className="px-4 py-2 border border-gray-600 rounded-lg outline-none"
          />
        </div>

        <SubmitButton
          isLoading={isLoading}
          className={`px-4 py-2 w-full text-white rounded-lg text-md ${isLoading ? 'bg-blue-100/55' : 'custom-bg'}`}
        >
          Continue
        </SubmitButton>
      </form>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center gap-8">
          <Button
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center rounded-lg px-8 py-2 border border-gray-600"
          >
            <img src={Google} alt="google" width={30} height={30} />
            <span>Google</span>
          </Button>
          {/* <a href="/" className="rounded-lg px-8 py-2 border border-gray-600">
                            <img src={Microsoft} alt="microsoft" width={30} height={30} />
                        </a>
                        <a href="/" className="rounded-lg px-8 py-2 border border-gray-600">
                            <img src={Github} alt="github" width={30} height={30} />
                        </a> */}
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className="flex items-center text-center gap-1">
          <p className="text-sm text-gray-400">Already have an account?</p>
          <Button
            className="text-black-500 font-semibold text-sm"
            onClick={() => setActiveModal("login")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
