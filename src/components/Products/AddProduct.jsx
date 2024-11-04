import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button';
import './AddProduct.css';
import ProductInput from './ProductInput';

const productInputs = [
  {
    label: 'Title',
    type: 'text',
    placeholder: 'Ürün ismi giriniz.',
    name: 'title',
  },
  {
    label: 'Price',
    type: 'number',
    placeholder: 'Ürün fiyatı giriniz.',
    name: 'price',
  },
  {
    label: 'Image URL',
    type: 'text',
    placeholder: 'Ürün görseli giriniz.',
    name: 'image',
  },
  {
    label: 'Category',
    type: 'text',
    placeholder: 'Ürün kategorisi giriniz.',
    name: 'category',
  },
];

function AddProduct({ products, setProducts, setShowModal }) {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    image: '',
    category: '',
  });
  const [isShowButton, setShowButton] = useState(true);

  function handleChange({ target: { name, value } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowButton(!isShowButton);
    const isFormValid = Object.values(product).every(
      (value) => value.trim() !== ''
    );

    if (!isFormValid) {
      console.error('Input alanları boş geçilemez!');
      setShowModal(true);
      return;
    }

    const newProduct = {
      id: Math.random(),
      ...product,
      price: Number(product.price),
    };
    setProducts([newProduct, ...products]);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input, index) => (
        <ProductInput key={index} {...input} handleChange={handleChange} />
      ))}
      <Button color={'success'}>Yeni Ürün Ekle</Button>
    </form>
  );
}

export default AddProduct;

AddProduct.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
};
