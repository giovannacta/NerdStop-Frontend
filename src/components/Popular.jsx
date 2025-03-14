import React, { useEffect, useState } from "react";
import Item from "./Item";

const Popular = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-white mt-12 md:mt-20">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center">Popular at NerdStop</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-12 sm:mb-16" />

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((item) => (
              <Item
                key={item._id}
                id={item._id}
                image_urls={item.image_urls}
                name={item.name}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-center w-full text-sm sm:text-base">
              No products available
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Popular;
