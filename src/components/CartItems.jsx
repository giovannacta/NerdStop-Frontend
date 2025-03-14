import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <section className="max_padd_container pt-28 flex flex-col items-center">
      <table className="w-full max-w-4xl border-collapse border border-gray-200 shadow-md">
        <thead>
          <tr className="bg-slate-900/10 text-left text-sm sm:text-base font-semibold border-b border-gray-300">
            <th className="p-3">Products</th>
            <th className="p-3">Title</th>
            <th className="p-3">Price</th>
            <th className="p-3 text-center">Quantity</th>
            <th className="p-3 text-center">Total</th>
            <th className="p-3 text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            if (cartItems[product._id] > 0) {
              return (
                <tr
                  key={product._id}
                  className="border-b border-gray-200 text-sm sm:text-base"
                >
                  <td className="p-3 flex items-center">
                    <img
                      src={product.image_urls[0]}
                      alt="productImg"
                      height={43}
                      width={43}
                      className="rounded-lg ring-1 ring-gray-300"
                    />
                  </td>
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">${product.price}</td>
                  <td className="p-3 text-center">{cartItems[product._id]}</td>
                  <td className="p-3 text-center">
                    ${(cartItems[product._id] * product.price).toFixed(2)}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => removeFromCart(product._id)}
                    >
                      <TbTrash size={20} />
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      <div className="mt-12 p-6 bg-primary w-full max-w-md md:w-[400px] rounded-lg shadow-md">
        <h4 className="bold-20 pb-4 border-b border-gray-300">Summary</h4>
        <div className="flex flex-col gap-6 py-4">
          <div className="flex justify-between">
            <h4 className="medium-16">Subtotal:</h4>
            <h4 className="text-gray-30 font-semibold">
              ${getTotalCartAmount()}
            </h4>
          </div>
          <div className="flex justify-between">
            <h4 className="medium-16">Shipping fee:</h4>
            <h4 className="text-gray-30 font-semibold">Free</h4>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between bold-18">
            <h4>Total:</h4>
            <h4>${getTotalCartAmount()}</h4>
          </div>
          <button className="mt-4 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-80 transition">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
