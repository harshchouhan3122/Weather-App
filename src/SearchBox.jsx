
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css";
import { useState } from 'react';

// const express = require('express');
// require('dotenv').config()
// const app = express();

// const API_URL = process.env.API_URL;
// const API_KEY = process.env.API_KEY;

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    
    let handelChange = (evt) => {
        setCity(evt.target.value);
    }
    
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            console.log(result);
            return result;

        } catch (err) {
            // let result = err;
            // setError(true);
            throw err;
        }
        

    }
    
        let handelSubmit = async (evt) => {
            try {
                evt.preventDefault();
                console.log(city);
                setCity("");
                let newInfo = await getWeatherInfo();
                updateInfo(newInfo);
                setError(false);

            } catch (err) {
                setError(true);
            }
        }
        
        const API_URL = "https://api.openweathermap.org/data/2.5/weather"
        const API_KEY = "50aceb14cd2acec39dd0ace2f20c7490"
    
        return (
            <div className='SearchBox'>
            {/* <h2>Search for the weather</h2> */}
            <form onSubmit={handelSubmit} className='SearchForm'>
                <TextField 
                id="city" 
                label="City Name" 
                variant="outlined" 
                required 
                value={city} 
                onChange={handelChange} />

                <Button variant="contained" endIcon={<SearchIcon />} type='submit'> Search </Button>
            </form>
            
            {error && <p style={{color:"red"}}>No Such Place Exists !</p>}
            
        </div>
    )
}