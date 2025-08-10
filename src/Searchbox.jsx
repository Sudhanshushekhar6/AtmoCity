import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import "./Searchbox.css";

export default function Searchbox({updateinfo}) {
  let [City, setCity] = useState("");
   let [error, seterror] = useState(false);
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "e3a4a6c29dae93973146f90c219f437d";

  let getweatherinfo = async () => {
    try{

    
    let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
    let jsonresponse = await response.json();
    console.log(jsonresponse);
    let result = {
      city: City,
      temp: jsonresponse.main.temp,
      temp_Min: jsonresponse.main.temp_min,
      temp_Max: jsonresponse.main.temp_max,
      humidity: jsonresponse.main.humidity,
      feelsLike: jsonresponse.main.feels_like,
      weather: jsonresponse.weather[0].description,
    };
    console.log(result);
    return result;
}
catch(err){
throw err;
}
  };

  let handlechange = (event) => {
    setCity(event.target.value);
  };

  let handlesubmit = async (event) => {
    try{
    event.preventDefault();
    console.log("City");
    setCity("");
    let info = await getweatherinfo();
    updateinfo(info);
    }catch(err){
        seterror(true)
    }
  };

  return (
    <div>
      <h3>Search for the weather </h3>
      <form onSubmit={handlesubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={City}
          onChange={handlechange}
        />
        <br></br>
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No city Found</p>}
      </form>
    </div>
  );
}
