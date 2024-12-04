import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RequireRole = ({ children, allowedRoles }) => {
  const { currentUserRole, loading: roleLoading } = useSelector(
    (state) => state.role
  );
  const { user, loading: authLoading } = useSelector((state) => state.auth);

  if (roleLoading || authLoading) {
    return <div className="p-6">Yükleniyor...</div>;
  }

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  if (!allowedRoles.includes(currentUserRole)) {
    return <Navigate to="/" />;
  }

  return children;
};

RequireRole.propTypes = {
  children: PropTypes.node,
  allowedRoles: PropTypes.array,
};

export default RequireRole;
