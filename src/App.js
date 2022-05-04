import React, {useState} from 'react';
import Cards from '../src/components/Cards.jsx';
import Nav from './components/nav.jsx';



function App() {
  const [cities, setCities] = useState([]);
  function onSearch(ciudad) {
    const apiKey = '19c2c297eab5ce4b6ef3750b1b69a2a9'; 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
 
  return ( 
      <div>
        <Nav onSearch={onSearch}/>
         <div>
        <Cards onClose={onClose} cities={cities}/>
      </div>  
      </div>
  );
}

export default App;
