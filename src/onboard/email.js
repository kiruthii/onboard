import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "./redux/slice";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

export const Email=()=>{
    const navigate=useNavigate();
    const email=useSelector((state)=>state.studentDetails.email);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        dispatch(setEmail(e.target.value));
    }
    return(
        <>
        <label>Email  </label>
        <input type="email" placeholder="enter email" value={email} onChange={handleChange}></input>   <Button label='Next' onClick={()=>navigate('/firstname')}/>
        </>
    )
}