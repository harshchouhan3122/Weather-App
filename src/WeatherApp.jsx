import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState(
        {
            city: "Delhi",
            feelsLike: 24.84,
            temp: 24.84,
            tempMax: 28.84,
            tempMin: 22.84,
            humidity: 82.84,
            weather: "haze",
        }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center", border: "1px solid transparent", width: "400px"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}