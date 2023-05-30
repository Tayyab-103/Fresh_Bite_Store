import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home";
import Menu from "./page/Menu";
import About from "./page/About";
import Contact from "./page/Contact";
import Login from "./page/Login";
import Newproduct from "./page/Newproduct";
import Singup from "./page/Singup";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import Cart from "./page/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* <Route path="/menu" element={<Menu />} /> */}
      <Route path="/menu/:filterby" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newproduct" element={<Newproduct />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/cart" element={<Cart/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //wrape then in provider after a import react-redux
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

  //RouterProvider used
  //or
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
