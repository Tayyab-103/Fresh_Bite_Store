import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate();
  const routeChange = () => {
    Navigate("/");
  };
  return (
    <>
      <header class="bg-gray-700 text-white py-4 text-center">
        <div class="container mx-auto px-4">
          <h1 class="text-2xl font-bold">Fresh-Bite About us</h1>
        </div>
      </header>

      <main class="container mx-auto px-4 py-8">
    <section class="mb-8 text-center">
      <h2 class="text-3xl font-bold mb-4">About Us</h2>
      <p class="mb-4">Online food stores typically offer a wide range of products, including fresh produce, dairy products, meat, seafood, pantry staples, snacks, beverages, frozen foods, and household items. Customers can browse through the virtual aisles, add items to their online shopping cart, and proceed to the checkout to complete their purchase.</p>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-4">Add more content about your online food store here</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white rounded-lg shadow-lg p-4">
          <img onClick={routeChange} src="https://www.thestar.com/content/dam/thestar/life/food_wine/2017/01/15/fresh-bites-new-apple-brand-pazazz-available-now-in-stores/pazazz-in-apple-basket.jpg" alt="Team Member 1" class="w-full mb-4 rounded-lg cursor-pointer"/>
          <h3 class="text-lg font-semibold">Fresh Apples</h3>
          <p class="text-gray-700"> Red Delicious is our choice for best apple for overall nutrition</p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-4">
          <img onClick={routeChange} src="https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271157/bananas-chopped-up-in-a-bowl.jpg" alt="Team Member 2" class="w-full mb-4 rounded-lg cursor-pointer"/>
          <h3 class="text-lg font-semibold">Fresh Bananas</h3>
          <p class="text-gray-700">Bananas contain fiber, potassium, folate, and antioxidants, such as vitamin C.</p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-4">
          <img onClick={routeChange} src="https://as2.ftcdn.net/v2/jpg/05/64/04/73/1000_F_564047323_IPjf48i1GXM01eLGuI1pAD8EzWHl4S8V.jpg" alt="Team Member 3" class="w-full mb-4 rounded-lg cursor-pointer"/>
          <h3 class="text-lg font-semibold">Fresh Vegetables</h3>
          <p class="text-gray-700">Organic, chemical-free and farmer-friendly</p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-4">
          <img onClick={routeChange} src="https://media.istockphoto.com/id/1309966291/photo/delivery-fast-food-concept.jpg?s=612x612&w=0&k=20&c=TcY_bJDPphPUl1X9PtsWXfLBdmRRcd9wbiOHbuN8O9k=" alt="Team Member 4" class="w-full mb-4 rounded-lg cursor-pointer"/>
          <h3 class="text-lg font-semibold">Fresh Fast Food</h3>
          <p class="text-gray-700">Delivery fastfood ordering food online concept.</p>
        </div>
      </div>
    </section>
  </main>

    <footer class="bg-gray-700 text-white py-4">
    <div class="container mx-auto px-4">
      <p class="text-center">© 2023 Fresh-Bite Store. All rights reserved.</p>
    </div>
  </footer>

    </>
  ); 
};

export default About;
