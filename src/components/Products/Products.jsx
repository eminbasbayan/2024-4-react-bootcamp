import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  const fullName = "Emin Başbayan";

  const image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  const title = "Çanta";
  const price = 500;

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="products-wrapper">
        <ProductItem
          myName={fullName}
          image={image}
          title={title}
          price={price}
        />
      </div>
    </div>
  );
}

export default Products;
