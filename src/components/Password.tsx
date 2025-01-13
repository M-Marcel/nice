import { useEffect, useState } from "react";
import { UpdatePasswordFormData } from "../dataTypes";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toast } from "react-toastify";
import { reset, updatePassword } from "../slices/user/userSlice";
import { useNavigate } from "react-router-dom";
import CloseEye from "../assets/svg/CloseEye"
import OpenEye from "../assets/svg/OpenEye"
import SubmitButton from "./SubmitButton";
import Button from "./Button";


const Password = () => {
  const [passWordVisible, setPassWordVisible] = useState<boolean>(false)
  const [newPassWordVisible, setNewPassWordVisible] = useState<boolean>(false)

  const togglePassWordVisibility = () => {
    setPassWordVisible(!passWordVisible)
  }
  const togglePassWordVisibility2 = () => {
    setNewPassWordVisible(!newPassWordVisible)
  }
  const [formData, setFormData] = useState<UpdatePasswordFormData>({
    currentPassword: '',
    newPassword: ''
  })

  const { currentPassword, newPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isSuccess, isLoading, message } = useAppSelector((state) => state.user);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) {
      return toast.error('Please fill in all fields');
    } else {
      const userData = { currentPassword, newPassword };
      dispatch(updatePassword(userData));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Password changed successfully.');
      navigate('/dashboard'); // Redirect to the dashboard
    }
    // Reset any authentication-related state when the component unmounts
    return () => {
      dispatch(reset());
    };
  }, [isSuccess, message, dispatch, navigate]);

  return (
    <div className="flex flex-col lg:flex-row px-2">
      <div className="px-4 w-[100%] lg:w-[100%] lg:relative left-[0%]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-[100%] lg:w-[100%] px-2 py-4 h-[100vh]">
            <div className="relative top-[20px]">
              <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <form onSubmit={handleSubmit} className="w-[100%] lg:w-[80%]">
                  <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="relative flex w-[100%] lg:w-[90%] flex-col mb-3">
                      <label className="mb-1 text-sm text-gray-500">
                        Current Password
                      </label>
                      <input
                        type={passWordVisible ? 'text' : 'password'}
                        value={currentPassword}
                        name="currentPassword"
                        onChange={onChange}
                        className="border py-2 px-2 w-[100%] border-gray-600 outline-0 rounded-lg"
                      />
                      <Button type="button" className="flex justify-center items-center absolute top-8 right-[10px] lg:right-[10px]  text-gray-800" onClick={togglePassWordVisibility}>
                        {passWordVisible ?
                          (
                            <OpenEye />
                          ) : (

                            <CloseEye />
                          )

                        }
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="relative flex w-[100%] lg:w-[90%] flex-col mb-3">
                      <label className="mb-1 text-sm text-gray-500">New</label>
                      <input
                        type={newPassWordVisible ? 'text' : 'password'}
                        value={newPassword}
                        name="newPassword"
                        onChange={onChange}
                        className="border px-2 py-2 w-[100%] border-gray-600 outline-0 rounded-lg"
                      />
                      <Button type="button" className="flex justify-center items-center absolute top-[55%] right-[10px] lg:right-[10px]  text-gray-800" onClick={togglePassWordVisibility2}>
                        {newPassWordVisible ?
                          (
                            <OpenEye />
                          ) : (

                            <CloseEye />
                          )

                        }
                      </Button>
                    </div>
                  </div>
                  <div className="w-[100%] lg:w-[90%] flex flex-row-reverse  mt-2">
                    <SubmitButton
                      isLoading={isLoading}
                      className={`px-4 py-2 w-full text-white rounded-lg text-md ${isLoading ? 'bg-blue-100/55' : 'custom-bg'}`}
                    >
                      Save
                    </SubmitButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
