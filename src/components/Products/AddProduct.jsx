import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function AddProduct({ products, setProducts, setShowModal }) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    image: '',
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validasyonu
    if (!formData.title || !formData.price || !formData.image || !formData.category) {
      setShowModal(true);
      return;
    }

    const newProduct = {
      id: products.length + 1,
      ...formData,
      price: parseFloat(formData.price)
    };

    setProducts(newProduct);
    setFormData({
      title: '',
      price: '',
      image: '',
      category: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Ürün Adı
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Ürün adını giriniz"
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Fiyat
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Fiyat giriniz"
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Görsel URL
        </label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Görsel URL'si giriniz"
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Kategori
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        >
          <option value="">Kategori Seçiniz</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      <div className="md:col-span-2 lg:col-span-4 flex justify-end">
        <button
          type="submit"
          className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
        >
          Ürün Ekle
        </button>
      </div>
    </motion.form>
  );
}

AddProduct.propTypes = {
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default AddProduct;