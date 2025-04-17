import { useAppDispatch } from "../hooks";
import { deletePortfolio } from "../slices/portfolio/portfolioSlice";
import Modal from "./Modal";

interface DeletePortfolioModalProps {
    isOpen: boolean;
    portfolioId: string | null;
    portfolioName: string;
    onClose: () => void;
}

const DeletePortfolioModal = ({
    isOpen,
    portfolioId,
    portfolioName,
    onClose,
}: DeletePortfolioModalProps) => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        if (portfolioId) {
            dispatch(deletePortfolio(portfolioId))
                .unwrap()
                .then(() => {
                    onClose();
                })
                .catch((error) => {
                    console.error('Delete failed:', error);
                });
        }
    };

    return (
        <Modal isVisible={isOpen} onClose={onClose}>
            <div className="py-4 rounded-2xl">
                <div className="flex justify-center items-center mb-4">
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="70" height="70" rx="35" fill="#F7F7FC" />
                        <path d="M41.25 29.584L40.7336 37.9382C40.6016 40.0727 40.5356 41.1399 40.0006 41.9072C39.7361 42.2866 39.3955 42.6067 39.0006 42.8473C38.2018 43.334 37.1325 43.334 34.994 43.334C32.8526 43.334 31.7819 43.334 30.9825 42.8464C30.5873 42.6054 30.2467 42.2847 29.9822 41.9047C29.4474 41.1361 29.3829 40.0674 29.2538 37.9299L28.75 29.584" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M27.5 29.5837H42.5M38.3798 29.5837L37.8109 28.4101C37.433 27.6305 37.244 27.2408 36.9181 26.9977C36.8458 26.9437 36.7692 26.8958 36.6892 26.8542C36.3283 26.667 35.8951 26.667 35.0288 26.667C34.1407 26.667 33.6967 26.667 33.3297 26.8621C33.2484 26.9053 33.1708 26.9552 33.0977 27.0113C32.768 27.2642 32.5839 27.6683 32.2155 28.4764L31.7108 29.5837" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M32.9165 38.75L32.9165 33.75" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M37.0835 38.75L37.0835 33.75" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                    </svg>

                </div>
                <div className="flex justify-center items-center text-center mb-6">
                    <p className="mb-6 text-lg font-semibold text-black-920">
                        Are you sure you want to delete {portfolioName || 'this portfolio'} ?
                    </p>
                </div>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 text-sm font-semibold border border-gray-900 rounded-xl hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-6 py-2 text-sm font-semibold bg-red-200 text-white rounded-xl hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default DeletePortfolioModal;