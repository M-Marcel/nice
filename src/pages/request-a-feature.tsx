import { useEffect, useState } from "react"
import Header from "../components/Header"
import Heading from "../components/Heading"
import Hero from "../components/Hero"
import { useModal } from "../context/ModalContext"
import Modals from "../components/Modals"
import FeatureFrame from '../assets/featuresframe.png'
import Footer from "../components/Footer"
import Join from "../components/Join"
import Dropdown from "../components/Dropdown"
import RequestForm from "../components/RequestForm"
import { useAppDispatch, useAppSelector } from "../hooks"
import { getAllFeatureRequest } from "../slices/feature/featureSlice"
import FeatureRequest from "../components/FeatureRequest"

const RequestAFeature = () => {
  const [email, setEmail] = useState<string>("");
  const { setActiveModal } = useModal()
  const BlockOptions = ["Block1", "Block2", "Block3"];
  const TagOptions = ["Tag1", "Tag2", "Tag3"];

  const dispatch = useAppDispatch();

  const { features, isLoading, isError, message } = useAppSelector(
      (state) => state.feature
  );

  useEffect(() => {
      dispatch(getAllFeatureRequest());
  }, [dispatch]);


  return (
    <>
      <div className="">
        <Hero>
          <Header
            openSignUpModal={() => setActiveModal("signup")}
            openLoginModal={() => setActiveModal("login")}
          />
          <Heading className="">
            <div className="relative top-[150px]">
              <div className='flex flex-col lg:flex-row lg:gap-8 items-center justify-center mx-[8px] lg:mx-[0]'>
                <div className="max-w-[auto] lg:max-w-[25%] text-center lg:text-left flex flex-col 
                  justify-center items-center lg:block mb-8 lg:mb-[0]">
                  <h1 className="text-5xl w-[60%] lg:w-[60%]  mb-2 leading-11 text-black-300">Request a feature</h1>
                  <p className="text-black-400 text-sm lg:w-[90%]">We are always looking for ways to make Lanepact better for you</p>
                </div>
                <div className='mt-2 ml-4 lg:ml-[0]'>
                  <img src={FeatureFrame} alt='communityFrame' width={700} height={700} />
                </div>
              </div>
            </div>
          </Heading>
        </Hero>
      </div>
      <Modals email={email} setEmail={setEmail} />
      <div className="px-5 lg:px-7.5 xl:px-10 lg:mx-8 mt-[180px] lg:mt-[80px]">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col w-[auto] lg:w-[60%]">
            <div className="flex justify-between items-center gap-2">
              <div className="w-[80%]">
                <input type="text" placeholder="Search for anything" className="w-full border border-gray-600 py-2 outline-none px-2 rounded-md" />
              </div>
              <div className="flex gap-2">
                <Dropdown options={BlockOptions} >Block</Dropdown>
                <Dropdown options={TagOptions} >Tags</Dropdown>
              </div>
            </div>
            <div>
              <div>
                {isLoading ? (
                  <p>Loading features...</p>
                ) : isError ? (
                  <p className="text-red-500">{message}</p>
                ) : (
                  <div className="mt-8">
                    {features && features.length > 0 ? (
                      features?.map((feature) => (
                        <FeatureRequest key={feature._id} feature={feature} />
                      ))
                    ) : (
                      <p className="text-gray-400">No features available. Add a new request!</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <RequestForm />
        </div>
      </div>
      <Join />
      <Footer />
    </>
  )
}

export default RequestAFeature