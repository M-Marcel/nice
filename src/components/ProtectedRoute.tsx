import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';


const ProtectedRoute = () => {
    const { token } = useAppSelector((state) => state.auth) || localStorage.getItem('token');
    // If there is no token, navigate to login page
    if (!token) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />; 
};

export default ProtectedRoute;
