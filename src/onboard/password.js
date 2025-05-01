import { useDispatch, useSelector } from "react-redux"
import { setPassword } from "./redux/slice";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

export const Password=()=>{
    const navigate=useNavigate();
    const password=useSelector((state)=>state.studentDetails.password);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        dispatch(setPassword(e.target.value))
    }
    return(
        <div>
        <label>Password  </label>
            <input type="password" placeholder="enter password" value={password} onChange={handleChange}></input>   <Button label='Next' onClick={()=>navigate('/summary')}/>
        </div>
    )
}