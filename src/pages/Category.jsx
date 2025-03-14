import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";

const Category = () => {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products?category=${category}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log("Products loaded:", data); 
        setProducts(data);
      } catch (error) {
        console.error("Error to find products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  console.log("Products rendered in the category:", products);

  return (
    <section className="bg-white p-6">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Item
                key={product._id}
                id={product._id}
                image={
                  product.image_urls && product.image_urls.length > 0
                    ? `http://localhost:3000/${product.image_urls[0]}`
                    : "/fallback.jpg"
                }
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Category;
