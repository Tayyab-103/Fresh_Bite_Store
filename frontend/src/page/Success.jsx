import React from "react";
import paymentCartImage from "../assest/payment-boy.gif";

const Success = () => {
  return (
    <>
      <div className="relative top-20">
        <div className="flex w-full justify-center items-center flex-col">
          <img
            src={paymentCartImage}
            alt="success image"
            className="w-full max-w-sm"
          />

          <p className="text-slate-500 text-3xl font-bold">
            Payment is Successfully
          </p>
        </div>
      </div>
    </>
  );
};

export default Success;
