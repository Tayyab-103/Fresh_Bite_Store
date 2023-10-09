import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

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
  const handleSubmit = async (e) => {
    e.preventDefault(); //it is use to show chrome console
    console.log(data);

    const { name, image, category, price } = data;
    if (name && image && category && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/uploadproduct`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();
      console.log(fetchRes);
      toast.success(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast.error("Enter Required Fields");
    }
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
          value={data.name}
        />
        <label htmlFor="category">Category</label>
        <select
          className="bg-slate-200 p-1 my-1"
          name="category"
          id="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>Select Category</option>
          <option value={"fruit"}>Fruits</option>
          <option value={"vegetable"}>Vegetables</option>
          <option value={"ice-cream"}>Ice-Cream</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"rice"}>Rice</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
          <option value={"panner"}>Panner</option>
          <option value={"sandwich"}>Sandwich</option>
        </select>

        {/* Upload Image */}
        <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer hover:bg-slate-300">
            {data.image ? (
              <image src={data.image} alt="new product image" className="h-full" />
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
          value={data.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={2}
          className="bg-slate-200 p-1 my-1 resize-none"
          onChange={handleOnChange}
          value={data.description} // when data is submit then auto-matically empty the fields for again reciveing the data for the user
        ></textarea>

        <button className="bg-slate-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow">
          Save
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
