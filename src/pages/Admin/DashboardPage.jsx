// src/pages/Admin/DashboardPage.jsx
const DashboardPage = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Toplam Sipariş</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Toplam Ürün</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">45</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Aktif Kullanıcılar</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Toplam Gelir</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">₺24,500</p>
        </div>
      </div>
    );
  };
  
  export default DashboardPage;