import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toast } from "react-toastify";
import SubmitButton from ".././SubmitButton";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import { createAdmin, reset } from "../../slices/admin/users/userSlice";



const CreateAdmin = () => {
    const {isLoading } = useAppSelector((state) => state.adminuser);
  const { setActiveModal } = useModal();
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email:''
  });

  const {email } = formData;

  const dispatch = useAppDispatch();
  

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Login to submit a feature request.");
      navigate("/");
      setActiveModal("login");
      return;
    }
    if (!email) {
      return toast.error('Please fill in the fields');
    } else {
      const userData = {
        email
      };
      dispatch(createAdmin(userData));
    }
  };



  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div className="text-4xl lg:w-[100%] bg-white px-4">
      <h1 className="text-2xl mb-8 w-[auto] lg:w-[60%] text-black-500 font-500">Create Admin</h1>
      <form className="w-full" onSubmit={handleContinue}>
        <div className="mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-500">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            className="border border-gray-600 outline-none text-black-500 text-sm rounded-lg w-full px-2 py-4"
            placeholder=""
          />
        </div>
       
        <SubmitButton
          isLoading={isLoading}
          className={`px-4 mt-4 py-4 w-full text-white text-sm rounded-lg text-md ${isLoading ? 'bg-blue-100/55' : 'custom-bg'
            }`}
        >
          Submit
        </SubmitButton>
      </form>
    </div>
  );
};

export default CreateAdmin;