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
import { getAllFeatureRequest, setPage } from "../slices/feature/featureSlice"
import FeatureRequest from "../components/FeatureRequest"
import PrevIcon from "../assets/svg/PrevIcon"
import NextIcon from "../assets/svg/NextIcon"
import LoaderIcon from "../assets/loader.svg"



const blockOptions = ["Block1", "Block2", "Block3"];
const tagOptions = ["Tag1", "Tag2", "Tag3"];

const RequestAFeature = () => {

  const [email, setEmail] = useState<string>("");
  const { setActiveModal } = useModal();


  const dispatch = useAppDispatch();

  const { displayedFeatures = [], isLoading, isError, message, currentPage, totalPages } = useAppSelector(
    (state) => state.feature
  );

  const user = useAppSelector((state) => state.auth.user);
  const userId = user?._id;

  const enhancedFeatures = displayedFeatures.map((feature) => ({
    ...feature,
    isVoted: Array.isArray(feature.likedUsers) && userId
      ? feature.likedUsers.includes(userId)
      : false,
  }));


  useEffect(() => {
    dispatch(getAllFeatureRequest());
  }, [dispatch]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  const handleNewFeature = () => {
    dispatch(getAllFeatureRequest());
  };

  useEffect(() => {
    dispatch(getAllFeatureRequest());
  }, [dispatch]);


  return (
    <>
      <div>
        <Hero>
          <Header
            openSignUpModal={() => setActiveModal("signup")}
            openLoginModal={() => setActiveModal("login")}
          />
          <Heading className="">
            <div className="relative top-[150px]">
              <div className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center mx-[8px] lg:mx-[0]">
                <div className="max-w-[auto] lg:max-w-[25%] text-center lg:text-left flex flex-col justify-center items-center lg:block mb-8 lg:mb-[0]">
                  <h1 className="text-5xl w-[60%] lg:w-[60%] mb-2 leading-11 text-black-300">Request a feature</h1>
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
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="w-full border border-gray-600 py-2 outline-none px-2 rounded-md"
                />
              </div>
              <div className="flex gap-2">
                <Dropdown options={blockOptions}>Block</Dropdown>
                <Dropdown options={tagOptions}>Tags</Dropdown>
              </div>
            </div>

            <div className="mt-8">
              {isLoading ? (
                <div className="flex items-center justify-center gap-4 h-[60vh]">
                  <img
                    src={LoaderIcon}
                    alt="loader"
                    width={24}
                    height={24}
                    className="animate-spin"
                  />
                  Loading ...
                </div>
              ) : isError ? (
                <p className="text-red-500">{message}</p>
              ) : (
                <>
                  {enhancedFeatures && enhancedFeatures.length > 0 ? (
                    enhancedFeatures.map((feature) => (
                      <FeatureRequest key={feature._id} feature={feature} />
                    ))
                  ) : (
                    <p className="text-gray-400">No features available. Add a new request!</p>
                  )}
                  <div className="pagination-buttons flex justify-between mt-4">
                    <button
                      onClick={handlePreviousPage}
                      disabled={currentPage <= 1}
                      className="px-4 py-2  text-gray-500 rounded-md disabled:opacity-50"
                    >
                      <PrevIcon />
                    </button>
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage >= totalPages}
                      className="px-4 py-2 text-gary-500 rounded-md disabled:opacity-50"
                    >
                      <NextIcon />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="w-[auto] lg:w-[40%]">
            <RequestForm onNewFeature={handleNewFeature} />
          </div>

        </div>
      </div>

      <Join />
      <Footer />
    </>
  );
};


export default RequestAFeature;
