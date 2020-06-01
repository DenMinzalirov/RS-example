const UNSPLASH_ACCESS_KEY = `cjDp8Eu_-tcmdkj-GaR1LR0OmsTrsz8tqqkbJBJS0Fs`;
const unsplashUrl = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${UNSPLASH_ACCESS_KEY}`;
const WEATHER_API_KEY = `a9a46a879917e21377a0e4454b33183b`;

export const getBackgroundUrl = async () => {
    try {
        const json = await fetch(unsplashUrl);
        const backgroundData = await json.json();
        return backgroundData?.urls?.regular;
    } catch (error) {
        console.error(error);
    }
};
export const getWeatherByAddress = async (place, options) => {
    const { units, lang } = options;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&lang=${lang.toLowerCase()}&units=${units}&APPID=${WEATHER_API_KEY}`;
    try {
        const json = await fetch(url);
        return (await json.json());
    } catch (error) {
        console.error(error);
    }
};
export const getWeatherByCoords = async ({ lat, lon }, options) => {
    const { units, lang } = options
    const url = `https://api.openweathermap.org/data/2.5/forecast?APPID=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}&units=${units}&lang=${lang.toLowerCase()}`
    try { 
        const json = await fetch(url)
        return (await json.json())
    } catch (error) {
        console.error(error)
    }
}

export const getCurrentLocation = () =>
    new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude: lat, longitude: lon } = position.coords
                resolve({ lat, lon })
            }, (error) => reject(error));
        } else {
            reject('Not supported')
        }
    });
// получаем координаты по названию населённого пункта
// export const getCoordByPlace = async (place) => {
//     const url = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=ccb1bee210a3442a9ed73889d1109649&pretty=1&no_annotations=1`;
//     try {
//         const json = await fetch(url);
//         const res = await json.json();
//         return res;
//     } catch (error) {
//         console.error(error);
//     }
// }
