import Searchbox from "./Searchbox.jsx";
import Infobox from "./Infobox.jsx";
import {useState} from "react";
export default function Weatherapp(){
const [weatherinfo,setweatherinfo]=useState({
    city:"Kochi",
    feelslike:24.84,
    temp:25.05,
    tempMin:25.05,
    tempMax:25.05,
    humidity:47,
    weather:"haze",
});
let updateinfo=(newinfo)=>{
    setweatherinfo(newinfo);
}
return(
<div className="Weatherapp"mstyle={{textAlign:"center"}}>
    <h2>Weather App by Delta</h2>
    <Searchbox updateinfo={updateinfo}/>
    <Infobox info={weatherinfo}/>
</div>
)
}