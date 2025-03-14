import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Item = ({ id, name, image_urls, price }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="relative flexCenter group overflow-hidden transition-all duration-100">
        <Link
          to={`/product/${id}`}
          className="h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700"
        >
          <FaSearch className="hover:rotate-90 hover:scale-125 transition-all duration-200" />
        </Link>
        <img
          src={image_urls?.[0] || "https://placehold.co/300"}
          alt="productImage"
          className="w-full h-[300px] block object-cover group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      <div className="p-4 overflow-hidden">
        <h4 className="my-[6px] medium-16 line-clamp-2 text-gray-30">{name}</h4>
        <div className="flex gap-5">
          <div className="bold-16">${price?.toFixed(2)}</div>{" "}
          
        </div>
      </div>
    </div>
  );
};

export default Item;
