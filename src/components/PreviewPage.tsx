// PreviewModal.tsx
import { useParams } from "react-router-dom";
import UntitledIcon from "../assets/svg/Untitledicon";
import templateMap from "../templates/templateMap";
import LoaderIcon from "../assets/loader.svg";
import Button from "./Button";
import Logo from "./Logo";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import { getPortfolioById } from "../slices/portfolio/portfolioSlice";



const PreviewPage = () => {
     const { portfolioId } = useParams();
       const dispatch = useAppDispatch();
       const { portfolio, isLoading, isError, message } = useAppSelector((state) => state.portfolio);
   
       useEffect(() => {
           if (portfolioId) {
               dispatch(getPortfolioById(portfolioId));
           }
       }, [dispatch, portfolioId]);
   
       if (isLoading) {
           return (
               <div className="flex items-center justify-center gap-6 h-[100vh]">
                   <img src={LoaderIcon} alt="loader" width={24} height={24} className="animate-spin" />
                   Loading ...
               </div>
           );
       }
   
       if (isError) {
           return <p className="text-red-500">{message}</p>;
       }
   
       if (!portfolio) {
           return <p className="text-gray-400">Portfolio not found.</p>;
       }
   
       // Get the corresponding template component from the templateMap
       const TemplateComponent = portfolio.referenceTemplate ? templateMap[portfolio.referenceTemplate] : null;
   

    return (
        <>
            <div className="grid grid-cols-3 px-2 fixed  w-full bg-white z-30 py-4 items-center">
                <div className="hidden lg:block">
                    <a href="/">
                        <Logo />
                    </a>

                </div>
                <div className="flex items-center gap-1">
                    <UntitledIcon />
                    <p>untitled</p>
                </div>
                <div className="ml-[220px] lg:ml-0 flex items-center gap-4 justify-end">
                    <div className="flex">
                        <span className="text-gray-400 text-xs lg:text-sm">Status</span>
                    </div>
                    <Button
                      
                        className="px-2 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm border 
                    border-gray-600 rounded-xl lg:flex bg-white text-black-500
                    hover:scale-105 
transform transition-transform duration-300 "
                    >
                        Preview
                    </Button>
                    <Button
                      
                        className="lg:flex text-xs lg:text-sm items-center gap-2 custom-bg shadow-lg text-white px-6 py-3 rounded-xl">
                        Publish
                    </Button>
                </div>
            </div>

            <div className="flex justify-center items-center bg-transparent px-0 py-0">
            <div className="w-[100%] h-full overflow-y-auto">
                {TemplateComponent && portfolio ? (
                    <TemplateComponent
                        key={portfolio._id}
                        templateId={portfolio.referenceTemplate}
                        templateData={portfolio}
                    />
                ) : (
                    <p className="text-gray-400">Template component not found.</p>
                )}
            </div>
        </div>
        </>


    );
};

export default PreviewPage;