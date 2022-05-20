import React, {useState} from 'react'
import HomeStyle from '../home/Home.module.css'
import Nav from '../nav'
import Cards from '../Cards.jsx'
import About from '../About.jsx'
import City from '../Ciudad.jsx'
import {Route} from 'react-router-dom'

export default Home;

function Home(){
    const [cities, setCities] = useState([]);
    function onSearch(City) {
      const apiKey = process.env.REACT_APP_API_KEY; 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}&units=metric`)
        .then(r => r.json())
        .then((response) => {
          if(response.main !== undefined){
            const City = {
              min: Math.round(response.main.temp_min),
              max: Math.round(response.main.temp_max),
              img: response.weather[0].icon,
              id: response.id,
              wind: response.wind.speed,
              temp: response.main.temp,
              name: response.name,
              weather: response.weather[0].main,
              clouds: response.clouds.all,
              latitud: response.coord.lat,
              longitud: response.coord.lon
            };
            setCities((oldCities) => {
              if (oldCities.some(c => c.name === City.name)){
                return oldCities;
              }else{
                return [...oldCities, City]
              }
            });
          } else {
            alert("City not found");
          }
        });
  
      }
    //   function onFilter(CityId) {
    //     let City = cities.filter(c => c.id === parseInt(CityId));
    //     if(City.length > 0) {
    //         return City[0];
    //     } else {
    //         return null;
    //     }
    //   }
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }
   return( <div className={HomeStyle}>
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
    <Route path="/City/:CityId" exact render={({match}) => {
      const city = cities.find(c=> c.id === Number(match.params.CityId))
      return <City city={city} />
    }}>
    </Route>
    </div>
  </div>)
}

