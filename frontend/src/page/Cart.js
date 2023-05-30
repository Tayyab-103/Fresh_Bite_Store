import React from 'react'
import { useSelector } from 'react-redux';
import CartProduct from '../component/CartProduct';

const Cart = () => {
      const productCartItem = useSelector((state) => state.product.cartItem);
      console.log(productCartItem);
  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        Your Cart Items
      </h2>

      <div className="">
        {/* Display Cart Items */}
        <div className="w-full max-w-3xl">
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
        {/* Total Cart Items */}
        <div className=""></div>
      </div>
    </div>
  );
}

export default Cart