import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function Infobox({info}){
const URL="https://plus.unsplash.com/premium_photo-1661931016055-cb7ff5a23647?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL="https://images.unsplash.com/photo-1489674267075-cee793167910?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyfGVufDB8fDB8fHww";
const RAIN_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW58ZW58MHx8MHx8fDA%3D";
// let info={
//     city:"Delhi",
//     feelslike:24.84,
//     temp:25.05,
//     tempMin:25.05,
//     tempMax:25.05,
//     humidity:47,
//     weather:"haze",
// }

    return(
        <div className="Infobox">

<div className="cardcontainer">
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}

        image = {
  info.humidity > 80
    ? RAIN_URL
    : info.temp > 15
    ? HOT_URL
    : COLD_URL
}

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
    {info.city}{
  info.humidity > 80
    ? <WbSunnyIcon/>
    : info.temp > 15
    ? <AcUnitIcon/>
    : <WbSunnyIcon/>
}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
         <div>Temperature:{info.temp}&deg;C</div>
          <div>Humidity:{info.humidity}</div>
           <div>Min Temperature:{info.tempMin}&deg;C</div>
           <div>Max Temperature:{info.tempMax}&deg;C</div>
           <div> The weather cab be described as {info.weather} and feels like {info.feelslike}</div>
        </Typography>
      </CardContent>
    </Card>
</div>
        </div>
    );
}