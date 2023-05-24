// for global used:
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  image: "",
  lastName: "",
  _id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      // all data show form server side
      //   console.log(action);
      console.log(action.payload.data);
      //   state.user = action.payload.data;
      state._id = action.payload.data._id;
      state.firstName = action.payload.data.firstName;
      state.lastName = action.payload.data.lastName;
      state.email = action.payload.data.email;
      state.image = action.payload.data.image;
    },
//Another function for logout
    logoutRedux : (state,action)=>{
           state._id = "";
           state.firstName = "";
           state.lastName = "";
           state.email = "";
           state.image = "";
    }
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;
