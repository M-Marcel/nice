import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { useEffect, useState } from 'react';
import LoaderIcon from "../assets/loader.svg"

const ProtectedRoute = () => {
    const user = useAppSelector((state) => state.auth.user);
    const token = localStorage.getItem("token");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // delay to ensure the Redux state is populated
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center gap-6 h-[100vh]">
                <img
                    src={LoaderIcon}
                    alt="loader"
                    width={24}
                    height={24}
                    className="animate-spin"
                />
                Loading
            </div>

        )
    }

    // If there is no token or user, navigate to login page
    if (!token || !user) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;