// src/layouts/AdminLayout.jsx
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-4">
          <Link
            to="/admin/dashboard"
            className="block py-2 px-4 hover:bg-gray-700 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            className="block py-2 px-4 hover:bg-gray-700 transition-colors"
          >
            Ürün Yönetimi
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <header className="bg-white shadow">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
          </div>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
