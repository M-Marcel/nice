import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllFeatureRequest, setPage } from "../../slices/feature/featureSlice";
import PrevIcon from "../../assets/svg/PrevIcon"
import NextIcon from "../../assets/svg/NextIcon"
import LoaderIcon from "../../assets/loader.svg"
import AllFeatureRequest from "../FeatureRequest";

const NewFeatures = () => {
    const dispatch = useAppDispatch()
    const { displayedFeatures, isLoading, isError, message, currentPage, totalPages, limit } = useAppSelector((state) => state.feature);
    const user = useAppSelector((state) => state.auth.user);
    const userId = user?._id;

    const enhancedFeatures = displayedFeatures.map((feature) => ({
        ...feature,
        isVoted: userId ? feature.likedUsers.includes(userId) : false
    }));

    useEffect(() => {
        dispatch(getAllFeatureRequest({ page: currentPage, pageSize: limit }));
    }, [dispatch, currentPage, limit]);

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
    return (
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
                            <AllFeatureRequest key={feature._id} feature={feature} />
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
    )
}

export default NewFeatures