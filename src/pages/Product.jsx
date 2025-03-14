import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHeader from "../components/ProductHeader";
import ProductView from "../components/ProductView";
import ProductDetails from "../components/ProductDetails";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();

  const product = products.find((p) => p._id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductHeader product={product} />
        <ProductView product={product} />
        <ProductDetails description={product.description} />
      </div>
    </section>
  );
};

export default Product;
