import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getPortfolioBySlug } from "../slices/portfolio/portfolioSlice";
import LoaderIcon from "../assets/loader.svg";
import templateMap from "../templates/templateMap";
// import { Portfolio } from "../dataTypes";

const PortfolioShow = () => {
    const { slug:portfolioSlug } = useParams();
    console.log("Slug", portfolioSlug);
    const dispatch = useAppDispatch();
    const { portfolio, isLoading, isError, message } = useAppSelector((state) => state.portfolio);

    useEffect(() => {
        if (portfolioSlug) {
            dispatch(getPortfolioBySlug(portfolioSlug));
        }
    }, [dispatch, portfolioSlug]);

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

export default PortfolioShow;