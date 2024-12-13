import { useEffect, useState } from "react";
import { FeatureFormData } from "../dataTypes";
import SelectOption from "./Select"
import { useAppDispatch, useAppSelector } from "../hooks";
import { toast } from "react-toastify";
import { createFeatureRequest, reset } from "../slices/feature/featureSlice";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

type NewFeatureProps = {
  onNewFeature:() => void
}


const RequestForm = ({onNewFeature}:NewFeatureProps) => {

  const navigate = useNavigate()

  const options = [
    { value: "Web2", label: "Web2" },
    { value: "Web3", label: "Web3" },
    { value: "Web4", label: "Web4" },
    { value: "Web5", label: "Web5" },
  ];


  const [formData, setFormData] = useState<FeatureFormData>({
    title: '',
    tag: '',
    description: '',
  })

  const { title, tag, description } = formData

  const dispatch = useAppDispatch();
  const { isLoading, isSuccess, message } = useAppSelector((state) => state.feature)



  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

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
      toast.error("You must be logged in to submit a feature request.");
      navigate("/"); 
      return;
    }
    if (!title || !description || !tag) {
      return toast.error('please fill in the fields')
    } else {

      const featureData = {
        title,
        tag,
        description
      }
      dispatch(createFeatureRequest(featureData))
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Feature request created successfully');
      setFormData({
        title: '',
        tag: '',
        description: '',
      });
      onNewFeature();
    }
    return () => {
      dispatch(reset())
    }

  }, [isSuccess, message, onNewFeature, dispatch])


  return (
    <div className="text-4xl w-[auto] lg:w-[35%] ">
      <h1 className="text-3xl mb-8 w-[auto] lg:w-[60%] text-black-500 font-500">Submit idea or feedback</h1>
      <form className="w-full" onSubmit={handleContinue}>
        <div className="mb-2">
          <label className="block mb-1 text-sm font-medium text-gray-500 ">
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
          <label className="block mb-1 text-sm font-medium border-gray-600 text-gray-500 ">
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
  )
}

export default RequestForm