import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Item from "../components/Item";

const Category = ({ category }) => {
  const { all_products } = useContext(ShopContext);

  if (!all_products) {
    return <p>Loading products...</p>;
  }

  const filteredProducts = all_products.filter(
    (product) => product.category._id === category
  );

  return (
    <section className="bg-white">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <div className="flexBetween my-8 mx-2">
          <h5>
            <span className="font-bold">
              Showing {filteredProducts.length}{" "}
            </span>{" "}
            out of {all_products.length} products
          </h5>
          <div className="relative inline-block">
            <button className="flex items-center justify-between w-full px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff7c03]">
              Sort by
              <MdOutlineKeyboardArrowDown className="ml-2 text-lg" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="btn_dark_rounded">Load more</button>
        </div>
      </div>
    </section>
  );
};

export default Category;
