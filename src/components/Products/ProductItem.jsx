import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { addToCart } from '../../redux/slices/cartSlice';

const ProductItem = (props) => {
  const { id, image, category, title, price, onDeleteItem } = props;
  const { onDeleteItem: deleteItem, ...productData } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(productData));
    toast.success('Ürün sepete eklendi');
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={itemAnimation}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div 
        className="relative group cursor-pointer"
        onClick={() => navigate(`/urun/${id}`)}
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain object-center transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
            {category}
          </span>
        </div>

        <h3 
          className="text-lg font-semibold mb-2 text-gray-900 hover:text-indigo-600 transition-colors duration-200 line-clamp-2 cursor-pointer"
          onClick={() => navigate(`/urun/${id}`)}
        >
          {title}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-indigo-600">
            {price.toFixed(2)}₺
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleAddToCart}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Sepete Ekle
          </button>
          
          <button
            onClick={() => onDeleteItem(id)}
            className="w-full px-4 py-2 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Ürünü Sil
          </button>
        </div>
      </div>
    </motion.div>
  );
};

ProductItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  onDeleteItem: PropTypes.func,
};

export default ProductItem;