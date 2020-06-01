import React, { useContext, useState } from 'react';
import { WeatherContext } from '../Wather/Wather';
import './index.css';
import * as moment from 'moment';
import 'moment/locale/en-au';
import 'moment/locale/ru';
// import 'moment/locale/en-au';

const WeatherToday = () => {
    const context = useContext(WeatherContext);
    const { store: { weather, lang, units } } = context;
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);
    if (weather.cod === '404') {
        weather.city = { name: 'city not found' };
        weather.list = [{ main: { temp: 'N/A' }, weather: [{ description: 'N/A' }] }];
    }
    moment.locale(['en-au', 'ru']);
    if (lang === 'RU') {
        moment.locale('ru');
    }
    let temp = 'Temperatur: ';
    let description = 'Description: ';
    if (lang === 'RU') {
        temp = 'Температура: ';
        description = 'Описание: ';
    };
    let grad = ' °C';
    if (units === 'imperial') {
        grad = ' °F';
    };
    return (
        <div className='wrapper weather-block'>
            <div className='weather-today'>
                <div className='weather-today-info'>
                    <div className='location'><span><h1>{weather ? weather.city.name : ''}</h1></span></div>
                    <div className='date-app'>
                        <span>{moment().format('LL')}</span>
                        <br />
                        <span>{time}</span>
                    </div>
                    <div className='weather-about'>
                        <div>
                            <span>{temp}{weather ? weather.list[0].main.temp : ''}{grad}</span>
                            <br />
                            <span>{description}{weather ? weather.list[0].weather[0].description : ''}</span>
                        </div>
                        <img src={`http://openweathermap.org/img/w/${'04d'}.png`} alt="" />
                    </div>
                </div>
                <div className='weather-today-icon'>
                    <span><h2>{weather ? weather.list[0].main.temp.toString().substring(0, 2) : ''}{grad}</h2></span>
                    <img src={`http://openweathermap.org/img/w/${'04d'}.png`} alt="" />
                </div>
            </div>
            <div className='weather-next-day'>
                <div className='weather-next-day-item'>
                    <span>{weather && weather.cod === '200' ? moment(weather.list[0 + 8].dt_txt).format('LL') : 'N/A'}</span>
                    <span>{temp}{weather && weather.cod === '200' ? weather.list[0 + 8].main.temp : 'N/A'}{grad}</span>
                    <span>{description}{weather && weather.cod === '200' ? weather.list[0 + 8].weather[0].description : 'N/A'}</span>
                </div>
                <div className='weather-next-day-item'>
                    <span>{weather && weather.cod === '200' ? moment(weather.list[0 + 16].dt_txt).format('LL') : 'N/A'}</span>
                    <span>{temp}{weather && weather.cod === '200' ? weather.list[0 + 16].main.temp : 'N/A'}{grad}</span>
                    <span>{description}{weather && weather.cod === '200' ? weather.list[0 + 16].weather[0].description : 'N/A'}</span>
                </div>
                <div className='weather-next-day-item'>
                    <span>{weather && weather.cod === '200' ? moment(weather.list[0 + 24].dt_txt).format('LL') : 'N/A'}</span>
                    <span>{temp}{weather && weather.cod === '200' ? weather.list[0 + 24].main.temp : 'N/A'}{grad}</span>
                    <span>{description}{weather && weather.cod === '200' ? weather.list[0 + 24].weather[0].description : 'N/A'}</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherToday;
