import React, {useState} from 'react'
import Nav from '../nav'
import Cards from '../Cards.jsx'
import About from '../About.jsx'
import Ciudad from '../Ciudad.jsx'
import {Route} from 'react-router-dom'

export default Home;

function Home(){
    const [cities, setCities] = useState([]);
    function onSearch(ciudad) {
      const apiKey = process.env.REACT_APP_API_KEY; 
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
            setCities((oldCities) => {
              if (oldCities.some(c => c.name === ciudad.name)){
                return oldCities;
              }else{
                return [...oldCities, ciudad]
              }
            });
          } else {
            alert("Ciudad no encontrada");
          }
        });
  
      }
    //   function onFilter(ciudadId) {
    //     let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    //     if(ciudad.length > 0) {
    //         return ciudad[0];
    //     } else {
    //         return null;
    //     }
    //   }
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }
   return( <div>
    <Route path='/'>
    <Nav onSearch={onSearch}/>
    </Route>
    <div>
    <Route path='/' exact>
    <Cards cities={cities} onClose={onClose}/>
    </Route>
    <Route path='/about' exact>
    <About />
    </Route>
    <Route path="/ciudad/:ciudadId" exact render={({match}) => {
      const city = cities.find(c=> c.id === Number(match.params.ciudadId))
      return <Ciudad city={city} />
    }}>
    </Route>
    </div>
  </div>)
}

