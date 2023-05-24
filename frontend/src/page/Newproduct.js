import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/ImagetoBase64";

const Newproduct = () => {
  //useState for restoring all this section
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });
  //e parameter pass
  const handleOnChange = (e) => {
    const { name, value } = e.target; //Extract the values

    setData((preve) => {
      return {
        ...preve, //just split the previous value after that
        [name]: value, //we can give the name inside
      };
    });
  };
  //uoload-Image function/Method
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    // console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  // data shows view site bar so synthetic evnet used
  const handleSubmit = (e) => {
    e.preventDefault(); //it is use to show chrome console
    console.log(data);
  };
  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          id="name"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
        />
        <label htmlFor="category">Category</label>
        <select
          className="bg-slate-200 p-1 my-1"
          name="category"
          id="category"
          onChange={handleOnChange}
        >
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Ice-Cream</option>
          <option>Dosa</option>
          <option>Pizza</option>
        </select>

        {/* Upload Image */}
        <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer hover:bg-slate-300">
            {data.image ? (
              <img src={data.image} className="h-full" />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}

            <input
              type={"file"}
              accept="image/"
              onChange={uploadImage}
              className="hidden"
              id="image"
            />
          </div>
        </label>

        <label htmlFor="price" className="m-1">
          Price
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          name="price"
          id="price"
          onChange={handleOnChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={2}
          className="bg-slate-200 p-1 my-1 resize-none"
          onChange={handleOnChange}
        ></textarea>

        <button className="bg-slate-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow">
          Save
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
