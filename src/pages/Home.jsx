import React, { useEffect, useState } from "react";
import api from "../api"; 
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token"); 
        const response = await api.get("/api/products", {
          headers: token ? { Authorization: `Bearer ${token}` } : {}, 
        });

        console.log("API Response:", response.data); 
        setProducts(response.data); 
      } catch (error) {
        console.error("Error to find products:", error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <>
      <Hero />
      <Popular products={products} /> 
      <Newsletter />
    </>
  );
};

export default Home;
