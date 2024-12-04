import { createSlice } from "@reduxjs/toolkit";

const initialState ={
id:1,
firstName:"Rolana",
lastName:"Kamaria",
email:"nana@gmail.com",
password:"12345678",
userType:1,
industry:[],
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => { 
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.password = action.payload.password;
      state.email = action.payload.email;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setIndustry: (state, action) => {
      state.industry = action.payload;
    },
  }
});

export const {registerUser,setUserType,setIndustry} = userSlice.actions
    export default userSlice.reducer;