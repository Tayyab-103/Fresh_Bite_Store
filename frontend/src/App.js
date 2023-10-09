import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch()
//checking purpose 
// const productData = useSelector((state)=>state.product)

  //we can grab all this value
  useEffect(() => {
    //immediate call function
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`);
      const resData = await res.json();
      // console.log(resData);
      dispatch(setDataProduct(resData));
    })();
  }, [dispatch]);

  // ^
  // |
  // |
  // i want to set this data to redux to manage all this data in every component for that go on the redux folder
// all this data we getting 
  // console.log(productData);
  return (
    <>
      <Toaster />
      <Header />
      <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
