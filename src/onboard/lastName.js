import { useDispatch, useSelector } from "react-redux"
import { setLastName } from "./redux/slice";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

export const LastName=()=>{
    const navigate=useNavigate();
    const lastName=useSelector((state)=>state.studentDetails.lastName);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        dispatch(setLastName(e.target.value))
    }
    return(
        <>
        <label>last name  </label>
            <input type="text" placeholder="enter last name" value={lastName} onChange={handleChange}></input>   <Button label='Next' onClick={()=>navigate('/country')}/>
               
      </>
    )
}