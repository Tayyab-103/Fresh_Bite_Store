import React, { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { Link, useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  //if you share data in from then it will store step-1
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    consfirmPassword: "",
  });
  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
 
  const Navigate = useNavigate();
  const routeChange = () => {
    Navigate("/login");
  };
  //if you share data in from then it will store step-2

  // e is a synthetic event is is also called instance methods
  //e is like a Event Object
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  //our page will be not be refresh
  //()=>it is called Arrow Function
  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password } = data;
    if (email && password) { 
        alert("Successfull");
    } 
    else {
      alert("Please fill all the required fields");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        {/* <h1 className='text-center text-3xl font-bold'>Signup</h1> */}

        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md flex m-auto">
          <img
            src={loginSignupImage}
            alt="this is img"
            className="w-full cursor-pointer"
            onClick={routeChange}
          />
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className=" mb-2 mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />
          <label htmlFor="password">Password</label>
          <div className=" mb-2 mt-1 flex px-2 py-1 bg-slate-200 rounded focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 rounded border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className=" w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Login
          </button>
        </form>
        <p className="text-left text-sm mt-3">
          Don't have account ?{" "}
          <Link to={"/signup"} className="text-red-600 underline ">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
