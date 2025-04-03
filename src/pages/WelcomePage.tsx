import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/lanepact-logo.png";
import Button from "../components/Button";

const WelcomePage = () => {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center plans-bg  ">
            <div className="flex flex-col text-center items-center justify-center mt-20  ">
                <img src={LogoImage} alt="logoImg" width={20} height={20} />
                <h1 className="font-title text-4xl text-blck-300 font-semi-bold pt-10 w-[70%] lg:w-[100%] ">
                    Welcome to Lanepact
                </h1>
                <p className="text-sm pt-3 text-gray-500">Get started with these resources</p>
            </div>

            <div className="flex mb-4 lg:mb-6 flex-col lg:flex-row w-[100%] justify-center items-center gap-4 mt-7 lg:mt-7">
                <div className="flex flex-col w-[95%] lg:w-[30%] text-left border border-gray-900 rounded-2xl h-[40vh] p-4 mb-2 bg-white ">

                </div>
                <div className="flex flex-col w-[95%] lg:w-[30%] text-left border border-gray-900 rounded-2xl h-[40vh] p-4 mb-2 bg-white ">

                </div>
                <div className="flex flex-col w-[95%] lg:w-[30%] text-left border border-gray-900 rounded-2xl h-[40vh] p-4 mb-2 bg-white ">

                </div>
            </div>
            <div className="mb-10">
                <Button 
                  onClick={() => navigate('/dashboard')}
                  className="flex custom-bg  justify-center items-center w-full bg-white  text-white border border-gray-900 text-xs px-2 py-3 lg:text-sm lg:px-5 lg:py-2 rounded-xl">
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default WelcomePage;
