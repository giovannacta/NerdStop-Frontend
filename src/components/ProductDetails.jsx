import React from "react";

const ProductDetails = ({ description }) => {
  return (
    <div className="mt-20">
      <div className="flex mb-4">
        <h3 className="text-lg font-semibold uppercase">Description</h3>
      </div>
      <div className="flex flex-col pb-16">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
