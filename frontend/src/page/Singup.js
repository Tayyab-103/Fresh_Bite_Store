import React, { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { Link, useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

const Singup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //if you share data in from then it will store step-1
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  //onclick event on image
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
        //...preve is called a spread operator
        ...preve,
        [name]: value,
      };
    });
  };

  //showProfile
  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  //our page will be not be refresh
  //()=>it is called Arrow Function
  console.log(process.env.REACT_APP_SERVER_DOMIN);
  //convert into async
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          //.env file create and then backend server Port paste in it and the fetch below syntax
          //``==> Template literals string
          // fetching by object that's why it is use {}
          `${process.env.REACT_APP_SERVER_DOMIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            //convert Json format and body means signup key
            body: JSON.stringify(data),
          }
        );
        // fetch data which is already convert json format
        const dataRes = await fetchData.json();
        console.log(dataRes);
        // alert(dataRes.message);
        toast(dataRes.message);
        
//if signup successfully our user redirect to the login page
        if(dataRes.alert){
          Navigate("/login");
        }

      } else {
        alert("Password don't match");
      }
    } else {
      alert("Please fill all the required fields");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        {/* <h1 className='text-center text-3xl font-bold'>Signup</h1> */}

        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md flex m-auto relative">
          <img
            src={data.image ? data.image : loginSignupImage}
            alt="this is img"
            className="w-full h-full cursor-pointer"
            onClick={routeChange}
          />
          <label
            className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-60 w-full text-center cursor-pointer"
            htmlFor="profileImage"
          >
            <div className="">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleUploadProfileImage}
            />
          </label>
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mb-2 mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className=" mb-2 mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          />
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className=" mb-2 mt-1 flex px-2 py-1 bg-slate-200 rounded focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-slate-200 rounded border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className=" w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign up
          </button>
        </form>
        <p className="text-left text-sm mt-3">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-600 underline ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Singup;
