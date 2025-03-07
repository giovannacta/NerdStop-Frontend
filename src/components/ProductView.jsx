import { useCallback, useContext } from "react";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";

const ProductView = (props) => {

  const { product } = props
  const {addToCart} = useContext(ShopContext)

  return (
    <section>
      <div className="flex flex-col gap-14 xl:flex-row items-center xl:items-start">
        <div className="flex justify-center xl:justify-start xl:flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-[350px] max-h-[450px] object-contain"
          />
        </div>

        <div className="flex flex-col xl:flex-[1.5]">
          <h3 className="h3">{product.name}</h3>
          <div className="flex gap-x-2 text-secondary medium-22">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p>(178)</p>
          </div>
          <div className="flex gap-x-6 medium-20 my-4">
            <div className="line-through">${product.old_price}</div>
            <div className="text-secondary">${product.new_price}</div>
          </div>
          <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
            <button onClick={() => {addToCart(product.id)}} className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest hover:bg-primary hover:text-black">
              Add to cart
            </button>
            <button className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest !bg-secondary !border-secondary hover:!bg-primary hover:!text-black">
              Buy Now
            </button>
          </div>
          <p>
            <span className="medium-16 text-tertiary">Category: </span>Games
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
