import { useDispatch, useSelector } from "react-redux"
import { setFirstName } from "./redux/slice";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

export const FirstName=()=>{
    const firstName=useSelector((state)=>state.studentDetails.firstName);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
            dispatch(setFirstName(e.target.value))
    }
    const navigate=useNavigate();
    return(
        <>
        <label>first name  </label>
            <input type="text" placeholder="enter first name" value={firstName} onChange={handleChange}></input>   <Button label='Next' onClick={()=>navigate('/lastname')}/>
               
      </>
    )
}