import React from "react";
import Button from "./Button";

interface LogoutModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ onClose, onConfirm }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="#D9DBE9" />
                    <path d="M23 15L22.3374 15.2338C19.7587 16.144 18.4693 16.5991 17.7346 17.6374C17 18.6758 17 20.0431 17 22.7778V25.2222C17 27.9569 17 29.3242 17.7346 30.3626C18.4693 31.4009 19.7587 31.856 22.3374 32.7662L23 33" stroke="#1A1C1F" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M33 24L23 24M33 24C33 23.2998 31.0057 21.9915 30.5 21.5M33 24C33 24.7002 31.0057 26.0085 30.5 26.5" stroke="#1A1C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <p className="text-md font-[500] mb-6 mt-4">
                    Sure you want to log out?
                </p>
                <div className="flex justify-between gap-4">
                    <Button
                        type="button"
                        onClick={onClose}
                        className="font-medium text-black-500 text-sm flex-1 border border-gray-600 backdrop-blur-md px-6 py-3 rounded-md "
                    >
                        Cancel
                    </Button>
                    <Button
                        type="button"
                        onClick={onConfirm}
                         className="custom-bg flex-1 font-medium text-white text-sm px-6 py-3 rounded-lg"
                    >
                        log out
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
