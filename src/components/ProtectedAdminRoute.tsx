import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';

const ProtectedAdminRoute = () => {
    const { user } = useAppSelector((state) => state.adminauth);

    // If the user is not logged in or is not a super-admin, navigate to the admin login page
    if (!user || user.role !== 'superadmin') {
        return <Navigate to="/admin/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedAdminRoute;