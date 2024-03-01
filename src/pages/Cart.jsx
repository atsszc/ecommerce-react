import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal} from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount} = useSelector((state) => state.carts);
  const formattedtotalAmount = totalAmount.toFixed(2);

  
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-4xl">
            Toplam Tutar :{" "}
            <span className="font-bold ml-2">{formattedtotalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div className="text-4xl my-12">
          Sepetiniz boş, lütfen bir ürün ekleyiniz.
        </div>
      )}
    </div>
  );
};

export default Cart;
