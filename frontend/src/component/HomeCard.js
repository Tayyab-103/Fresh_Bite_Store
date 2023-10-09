import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, loading,id }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[150px]">
      {name ? (
        <>
          <Link
            //when onClick filter button then show upper on the menu page
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="w-40 min-h-[150px]">
              <image src={image} alt="home card image" className="h-full w-full" />
            </div>
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
              {name}
            </h3>
            <p className="text-center text-slate-500  font-medium">
              {category}
            </p>
            <p className="text-center font-bold">
              <span className="text-red-500">Rs </span>
              <span>{price}</span>
            </p>
          </Link>
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
