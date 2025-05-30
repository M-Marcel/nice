import { useEffect, useState } from "react";
import { FeatureFormData } from "../dataTypes";
import SelectOption from "./Select";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toast } from "react-toastify";
import { createFeatureRequest, getAllFeatureRequest, reset } from "../slices/feature/featureSlice";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";
import { useModal } from "../context/ModalContext";

type NewFeatureProps = {
  onNewFeature: () => void;
};

const RequestForm = ({ onNewFeature }: NewFeatureProps) => {
  const {isLoading, isSuccess, currentPage, limit } = useAppSelector((state) => state.feature);
  const { setActiveModal } = useModal();
  const navigate = useNavigate();

  const options = [
    { value: "personal", label: "Personal" },
    { value: "portfolio", label: "Portfolio" },
    { value: "business", label: "Business" },
    { value: "telegram-bot", label: "Telegram bot" },
    { value: "blockchain", label: "Blockchain" },
    { value: "web3", label: "Web 3" },
    { value: "crypto", label: "Crypto" },

  ];

  const [formData, setFormData] = useState<FeatureFormData>({
    title: '',
    tag: '',
    description: '',
  });

  const { title, tag, description } = formData;

  const dispatch = useAppDispatch();
  

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (selectedOption: { value: string; label: string } | null) => {
    if (selectedOption) {
      setFormData((prevState) => ({
        ...prevState,
        tag: selectedOption.value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        tag: '',
      }));
    }
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
    if (!title || !description || !tag) {
      return toast.error('Please fill in the fields');
    } else {
      const featureData = {
        title,
        tag,
        description,
      };
      dispatch(createFeatureRequest(featureData));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Feature request created successfully');
      dispatch(getAllFeatureRequest({ page: currentPage, pageSize: limit }));
      setFormData({
        title: '',
        tag: '',
        description: '',
      });
      onNewFeature();
      setActiveModal(null);
      dispatch(reset()); 
    }
  }, [isSuccess, dispatch, currentPage, limit, onNewFeature, setActiveModal]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div className="text-4xl lg:w-[100%] bg-white px-4">
      <h1 className="text-3xl mb-8 w-[auto] lg:w-[60%] text-black-500 font-500">
        Request For Your Favourite Feature
      </h1>
      <form className="w-full" onSubmit={handleContinue}>
        <div className="mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-500">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            className="border border-gray-600 outline-none text-black-500 text-sm rounded-lg w-full px-2 py-4"
            placeholder="Custom bot name"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1 text-sm font-medium border-gray-600 text-gray-500">
            Description
          </label>
          <textarea
            id="message"
            name="description"
            value={description}
            onChange={onChange}
            rows={6}
            cols={5}
            className="block px-2 py-4 outline-none w-full text-sm text-black-500 rounded-lg border border-gray-600"
            placeholder="Leave a comment..."
          />
        </div>
        <div>
          <SelectOption
            name="tag"
            value={tag}
            onChange={handleSelectChange}
            options={options}
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

export default RequestForm;