import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[1200px] h-[1200px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-6xl font-bold">{productDetail?.title}</div>
        <div className="my-8 text-4xl">{productDetail?.description}</div>
        <div className="text-5xl text-red-500">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="text-5xl my-2 text-red-500">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-7xl font-bold my-12">
          {productDetail?.price} <span className="text-lg">TL</span>
        </div>
        <div className="flex items-center gap-5 my-6">
          <div
            onClick={decrement}
            className="text-7xl text-center cursor-pointer"
          >
            -
          </div>
          <input
            type="text"
            value={quantity}
            className="text-5xl font-bold text-center w-16"
          />
          <div
            onClick={increment}
            className="text-6xl text-center cursor-pointer"
          >
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border w-[300px] h-20 rounded-md flex items-center justify-center text-4xl bg-gray-200 cursor-pointer my-10"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
