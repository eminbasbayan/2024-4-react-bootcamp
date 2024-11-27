import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="main-layout">
      {!location.pathname.startsWith('/auth') && <Header />}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
