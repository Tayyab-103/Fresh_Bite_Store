import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/CartProduct";
import emptyCartImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

    const handlePayment = async () => {
      if (user.email) {
        const stripePromise = await loadStripe(
          process.env.REACT_APP_STRIPE_PUBLIC_KEY
        );
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/create-checkout-session`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productCartItem),
          }
        );
        if (res.statusCode === 500) return;

        const data = await res.json();
        console.log(data);

        toast.success("Redirect to payment Gateway...!");
        stripePromise.redirectToCheckout({ sessionId: data });
      } else {
        toast.error("You have not Login!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    };
  return (
    <>
      <div class="bg-gray-700 text-white py-4 text-center">
        <div class="container mx-auto px-4">
          <h1 class="text-2xl font-bold">Your Cart Items </h1>
        </div>
      </div>
      <div className="p-2 md:p-4">
        {productCartItem[0] ? (
          <div className="my-4 flex gap-3">
            {/* display cart items  */}
            <div className="w-full max-w-3xl ">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>

            {/* total cart item  */}
            <div className="w-full max-w-md  ml-auto">
              <h2 className="bg-slate-500 text-white p-2 text-lg">Summary</h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Qty :</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Price</p>
                <p className="ml-auto w-32 font-bold">
                  <span className="text-red-500">Rs </span> {totalPrice}
                </p>
              </div>
              <button
                className="bg-red-500 w-full text-lg font-bold py-2 text-white "
                onClick={handlePayment}
              >
                Payment
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex w-full justify-center items-center flex-col">
              <img src={emptyCartImage} className="w-full max-w-sm" />
              <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
            </div>
          </>
        )}
      </div>

      <footer class="bg-gray-700 text-white py-6 ">
        <div class="container mx-auto px-4">
          <p class="text-center">
            © 2023 Fresh-Bite Store. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Cart;
