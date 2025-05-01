import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from './button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry } from './redux/slice';
export const Country=()=>{
    const navigate=useNavigate();
    
    const selectedCountry=useSelector((state)=>state.studentDetails.country);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        dispatch(setCountry(e.target.value))
    }
    const { data, isLoading, isError } = useQuery({
        queryKey: ['countries'],
        queryFn: async () => {
          const response = await axios.get('https://restcountries.com/v3.1/all');
          return response.data;
        },
      });
    
      if (isLoading) return <p>Loading</p>;
      if (isError) return <p>Failed to load </p>;
      
    return(
        <>
      <label>Country  </label>
      <select value={selectedCountry} onChange={handleChange} >
        <option>--Select--</option>
        {data.map((country) => (
          <option key={country.ele}  >
            {country.name.common}
          </option>
        ))}
      </select>   <Button label='Next' onClick={()=>navigate('/password')}/>
    </>
    )
}