import React from 'react';
import './App.css';

import { Weather } from './../Wather/Wather';
import { Controls } from './../Controls/Controls';
import WeatherToday from './../WeatherToday/WeatherToday';

const App = () => {
  return (
    <Weather>
      <Controls />
      <WeatherToday />
    </Weather>
  );
}


export default App;
