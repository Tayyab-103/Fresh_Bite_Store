import React from 'react'
import paymentErrorCartImage from "../assest/payment-error.gif";

const Cancel = () => {
  return (
      <>
    <div className="relative top-20">
      <div className="flex w-full justify-center items-center flex-col">
              <img src={paymentErrorCartImage} alt='cancel immage' className="w-full max-w-sm" />
            
              <p className="text-slate-500 text-3xl font-bold">Payment is Cancel</p>
      </div>
    </div>
    </>
  )
}

export default Cancel