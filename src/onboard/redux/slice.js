import { createSlice } from "@reduxjs/toolkit"
const initialState1={
    email:"",
    firstName:"",
    lastName:"",
    country:"",
    password:""

}

export const studentDetailsSlice=createSlice({
    name:"studentDetails",
    initialState:initialState1,
    reducers:{
        setEmail:(state,action)=>{
            state.email=action.payload
        },
        setFirstName:(state,action)=>{
            state.firstName=action.payload
        },
        setLastName:(state,action)=>{
            state.lastName=action.payload
        },
        setCountry:(state,action)=>{
            state.country=action.payload
        },
        setPassword:(state,action)=>{
            state.password=action.payload
        },

    }
});



export const {setEmail,setFirstName,setLastName,setCountry,setPassword}=studentDetailsSlice.actions;
export default studentDetailsSlice.reducer;
