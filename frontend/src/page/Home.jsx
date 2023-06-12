import React, { useRef } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../component/HomeCard";
import CardFeature from "../component/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import AllProduct from "../component/AllProduct";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  // console.log(productData);
  const homeProductCardList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    [] //.coming data in the form of array
  );
  // console.log(homeProductCartListVegetables);

  //Random data in Database:
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

   const Navigate = useNavigate();
  const routeChange = () => {
    Navigate("/cart");
  };
  return (
    <>
      <div className="p-2 md:p-4">
        {/* Left-Side */}
        <div className="md:flex gap-4 py-2">
          <div className="md:w-1/2">
            <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
              <p className="text-sm font-medium text-slate-900">
                Bike Delivery
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
                className="h-7"
              />
            </div>
            <h2 className="text-4xl md:text-7xl font-bold py-3 text-green-900">
              Fresh-Bite!
              The Fasted Delivery in 
              <span className="text-green-600"> your Home</span>
            </h2>
            <p className="py-3 text-base ">
              Online food stores typically offer a wide range of products, including fresh produce, dairy products, meat, seafood, pantry staples, snacks, beverages, frozen foods, and household items. Customers can browse through the virtual aisles, add items to their online shopping cart, and proceed to the checkout to complete their purchase.
            </p>
<br/>
            <button onClick={routeChange} className="font-bold bg-green-800 text-slate-200 px-4 py-2 rounded-md transform hover:scale-110 transition duration-300">
              Order Now
            </button>
          </div>

          {/* Image Div Right-Side */}
          <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
            {homeProductCardList[0]
              ? homeProductCardList.map((el) => {
                  return (
                    <HomeCard
                      key={el._id}
                      id={el._id}
                      image={el.image}
                      name={el.name}
                      price={el.price}
                      category={el.category}
                    />
                  );
                })
              : loadingArray.map((el, index) => {
                  return (
                    <HomeCard
                      key={index + "loading..."}
                      loading={"Loading..."}
                    />
                  );
                })}
          </div>
        </div>

        {/* Section Second: */}
        <div className="">
          <div className="flex w-full items-center">
            <h2 className="font-bold text-2xl text-slate-800 mb-4">
              Fresh Vegetables
            </h2>

            <div className="ml-auto flex gap-4">
              <button
                onClick={preveProduct}
                className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
              >
                <GrPrevious />
              </button>
              <button
                onClick={nextProduct}
                className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
              >
                <GrNext />
              </button>
            </div>
          </div>
          <div
            className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
            ref={slideProductRef}
          >
            {homeProductCartListVegetables[0]
              ? homeProductCartListVegetables.map((el) => {
                  return (
                    <CardFeature
                      key={el._id + "vegetable"}
                      id={el._id}
                      name={el.name}
                      category={el.category}
                      price={el.price}
                      image={el.image}
                    />
                  );
                })
              : loadingArrayFeature.map((el, index) => (
                  <CardFeature
                    loading="Loading..."
                    key={index + "cartloading"}
                  />
                ))}
          </div>
        </div>
        <AllProduct heading={"Your Product"} />
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

export default Home;
