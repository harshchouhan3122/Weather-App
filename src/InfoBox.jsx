import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';

export default function InfoBox({ info }) {

    let IMG_URL = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
    let IMG_URL_THUNDER="https://media.istockphoto.com/id/1011777484/photo/cloud-storm-sky-with-thunderbolt-over-rural-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=G8aN12QHfqH8ktSwUanoQNvyYx2anv7Saof78ppYTZw="
    let IMG_URL_CLOUDY="https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let IMG_URL_RAIN="https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let IMG_URL_HOT="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TrdzfkrLvvrvp5CWEqh5C2DNS13jrgLo849g6T583So="
    let IMG_URL_COLD="https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fHww"
    // IMG_URL = IMG_URL_HOT;

    // let info = {
    //     city: "Delhi",
    //     feelsLike: 24.84,
    //     temp: 24.84,
    //     tempMax: 28.84,
    //     tempMin: 22.84,
    //     humidity: 82.84,
    //     weather: "haze",
    // }

    return(
        <div className='InfoBox'>
            {/* <h2>Weather Info</h2> */}

            <Card sx={{ maxWidth: 345 }}>
  <CardMedia
    component="img"
    alt="Img"
    height="140"
    image={
      info.humidity > 80 ? IMG_URL_RAIN : (info.temp < 15 ? IMG_URL_COLD : (info.temp > 35 ? IMG_URL_HOT : IMG_URL_CLOUDY ))
    }
  />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {info.city} {
                      info.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon> : (info.temp < 15 ? <AcUnitIcon></AcUnitIcon> : (info.temp > 35 ? <WbSunnyIcon></WbSunnyIcon> : <CloudIcon></CloudIcon>))
                    }
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{textAlign:'center'}} component={"span"}>
                        <p>Temperature : {info.temp}&deg;C</p>
                        <p>Temp Max : {info.tempMax}&deg;C</p>
                        <p>Temp Min : {info.tempMin}&deg;C</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C.</p>
                  </Typography>
                </CardContent>

            </Card>

        </div>
    )
}