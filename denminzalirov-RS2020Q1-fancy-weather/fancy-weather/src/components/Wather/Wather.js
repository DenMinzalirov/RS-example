import React, { Component } from 'react';
import { getBackgroundUrl, getWeatherByAddress, getCurrentLocation, getWeatherByCoords } from './../services/index';
import MapBlock from './../MapBlock/MapBlock';
import MyModal from './../Modal'

const defaultState = {
    backgroundUrl: '',
    weather: '',
    isLoading: false,
    error: null,
    currentLocation: { lat: 53.6173806, lon: 23.817635 },
    place: null,
    lang: 'EN',
    units: 'metric',
};
export const WeatherContext = React.createContext({
    store: defaultState,
});

export class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
    };

    componentDidMount() {
        this.fetchAll();
    };

    componentDidCatch(error) {
        this.setState({ error });
    };

    fetchAll = async () => {
        const { lang, units, place } = this.state;
        this.setState({ isLoading: true });
        try {
            const currentLocation = !place ? await getCurrentLocation() : this.state.weather.city.coord;
            const backgroundUrl = await getBackgroundUrl();
            const weather = place ?
                await getWeatherByAddress(place, { lang, units }) :
                await getWeatherByCoords(currentLocation, { lang, units });
            this.setState({ backgroundUrl, weather, currentLocation });
        } catch (error) {
            console.error(error);
        } finally {
            this.setState({ isLoading: false });
        };
    }

    handleLanguageChange = (lang) => this.setState({ lang }, () => this.fetchAll());
    handleUnitsChange = (units) => this.setState({ units }, () => this.fetchAll());
    handleAddressChange = (place) => this.setState({ place });

    render() {
        let isGetWeather = true;
        if (this.state.weather?.cod === '404') {
            isGetWeather = false;
        }
        const context = {
            store: this.state,
            onRefresh: this.fetchAll,
            onLangChange: this.handleLanguageChange,
            onUnitsChange: this.handleUnitsChange,
            onAddressChange: this.handleAddressChange,
        }
        const { backgroundUrl } = this.state;
        return (
            <WeatherContext.Provider value={context}>
                <div
                    style={{ backgroundImage: `url(${backgroundUrl})` }}
                    className="app-container">
                    {this.props.children}
                    <MapBlock centr={this.state} />
                    <MyModal isGetWeather={isGetWeather} />
                </div>
            </WeatherContext.Provider>
        )
    }
}
