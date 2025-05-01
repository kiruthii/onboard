import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const Summary=()=>{
    const navigate=useNavigate();
    const studentDetails=useSelector((state)=>state.studentDetails);
    useEffect(()=>{
        if(!studentDetails.email){
            navigate('/')
        }

    },[studentDetails])
    
    return(
        <>
      <h3>Summary</h3>
      <p>Firstname:  {studentDetails.firstName}</p>
      <p>LastName:  {studentDetails.lastName}</p>
      <p>Email:  {studentDetails.email}</p>
      <p>Password:  {studentDetails.password}</p>
      <p>Country:  {studentDetails.country}</p>
      
        </>
    )
}