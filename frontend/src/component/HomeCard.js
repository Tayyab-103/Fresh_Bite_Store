import React from "react";

const HomeCard = ({ name, image, category, price, loading }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[150px]">
      {name ? (
        <>
          <div className="w-40 min-h-[150px]">
            <img src={image} className="h-full w-full" />
          </div>
          <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
            {name}
          </h3>
          <p className="text-center text-slate-500  font-medium">{category}</p>
          <p className="text-center font-bold">
            <span className="text-red-500">Rs </span>
            <span>{price}</span>
          </p>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
