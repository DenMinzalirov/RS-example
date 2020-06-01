import React from 'react';
import './index.css'
import { YMaps, Map } from 'react-yandex-maps';

const MapBlock = (props) => {
    let latitude = 'Latitude';
    let longitude = 'Longitude';
    if (props?.centr?.lang === 'RU') {
        latitude = 'Широта';
        longitude = 'Долгота';
    }
    let lat = 53.6506;
    let lon = 23.8973;
    if (props?.centr?.weather?.city?.coord) {
        lat = props?.centr?.weather?.city?.coord.lat;
        lon = props?.centr?.weather?.city?.coord.lon;
    }
    function convertCoordinate(coordinate) {
        let degrees = Math.trunc(coordinate);
        const minutes = Math.abs(Math.round((coordinate - degrees) * 60));
        if (degrees === 0 && coordinate < 0) {
            degrees = `-${degrees}`;
        }
        return `${degrees}°${minutes}′`;
    }

    return (
        <div className='wrapper map-block'>
            <YMaps>
                <Map
                    state={{ center: [lat, lon], zoom: 9 }}
                />
            </YMaps>
            <div>
                <p className='map-position'><span>{latitude}: {convertCoordinate(lat)}</span></p>
                <p className='map-position'><span>{longitude}: {convertCoordinate(lon)}</span></p>
            </div>

        </div>
    )
}

export default MapBlock;