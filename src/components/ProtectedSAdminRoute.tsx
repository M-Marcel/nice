import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';

const ProtectedSAdminRoute = () => {
    const { user } = useAppSelector((state) => state.adminauth);

    // If the user is not logged in or is not a super-admin, navigate to the admin login page
    if (!user || user.role !== 'admin') {
        return <Navigate to="/admin/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedSAdminRoute