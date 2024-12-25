import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="content pt-14">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
