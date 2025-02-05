import { toast } from 'react-toastify';
import MaleAvatar from '../assets/malee-avatae.png'
import FemaleAvatar from '../assets/female-avatar.jpeg'
import { useAppDispatch, useAppSelector } from '../hooks';
import { voteFeatureRequest } from '../slices/feature/featureSlice';
import { useState } from 'react';
import { AiOutlineLoading } from "react-icons/ai";


const AllFeatureRequest = ({ feature }: any) => {
    const [isVoting, setIsVoting] = useState(false);
    const user = useAppSelector((state) => state.auth?.user);

 

    const dispatch = useAppDispatch();

    const handleVote = async (id: string) => {
        setIsVoting(true);
        try {
            if (feature.isVoted) {
                await dispatch(voteFeatureRequest(id)).unwrap();
                toast.success('You have unvoted this feature request');
                feature.isVoted = false;
                feature.likeCount -= 1;
            } else {
                const result = await dispatch(voteFeatureRequest(id)).unwrap();
                toast.success(result.message);
                feature.isVoted = true;
                feature.likeCount += 1;
            }
        } catch (error: any) {
            toast.error(error);
        } finally {
            setIsVoting(false);
        }
    };

    return (
        <div
            key={feature._id}
            className="flex flex-col rounded-2xl border bg-gray-700/100 border-gray-100/85 px-4 py-2 mb-4"
        >
            <div className="flex gap-4 items-center py-1">
                <button
                    className={`border flex flex-col items-center justify-center px-3 py-3 rounded-lg transition-all duration-300 ${feature.isVoted
                        ? "bg-blue-300 border-blue-400 text-blue-400"
                        : "border-gray-500/90 bg-gray-600/100 text-gray-500 cursor-pointer hover:bg-gray-600"
                        }`}
                    onClick={() => handleVote(feature._id)}
                    disabled={isVoting}
                >
                    {isVoting ? (
                        <AiOutlineLoading className="animate-spin text-white" size={15} />
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={feature.isVoted ? "#30A6EF" : "gray"} className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>

                    )}
                    <p className="text-xs mt-1">
                        {feature.isVoted ? "Voted" : "Vote"}
                    </p>
                </button>
                <div>
                    <p className="text-xs text-gray-500 mb-1">
                        {new Date(feature.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-300 font-medium">{feature.title}</p>
                </div>
            </div>
            <div className="flex py-1 gap-4 items-center">
                <div
                    className="border border-gray-600 flex flex-col items-center justify-center
                    px-5 py-3 rounded-lg"
                >
                    <p className="text-xs text-gray-300">{feature.likeCount}</p>
                </div>
                <div className="flex items-center gap-3">
                    <img
                        src={
                            user?.gender === "Male"
                                ? MaleAvatar
                                : user?.gender === "Female"
                                    ? FemaleAvatar
                                    : MaleAvatar
                        }
                        alt="Profile"
                        width={25}
                        height={25}
                        className="rounded-full"
                    />
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-sm">by</span>
                        <p className="text-sm text-gray-300">
                            {feature.createdBy?.firstName || 'Unknown'}{' '}
                            {feature.createdBy?.lastName || 'Unknown'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFeatureRequest;
