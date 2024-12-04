import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RequireRole = ({ children, allowedRoles }) => {
  const { currentUserRole } = useSelector((state) => state.role);
  const { user } = useSelector((state) => state.auth);

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
