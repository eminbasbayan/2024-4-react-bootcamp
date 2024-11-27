// src/pages/Admin/ProductsPage.jsx
const ProductsPage = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Ürün Listesi</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Yeni Ürün Ekle
          </button>
        </div>
      </div>
      <div className="p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Ürün Adı
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Fiyat
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Stok
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Örnek Ürün 1</td>
              <td className="px-6 py-4 whitespace-nowrap">₺199.99</td>
              <td className="px-6 py-4 whitespace-nowrap">45</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-500 hover:text-blue-700 mr-2">
                  Düzenle
                </button>
                <button className="text-red-500 hover:text-red-700">Sil</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
