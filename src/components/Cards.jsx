import React from 'react';
import Card from './Card';
import styles from '../components/styles/Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
//<Card max,min,name,img,onClose />
  return (<div className={styles.container}>
    {
    props.cities && props.cities.map((city,index) => (
     <Card name={city.name} min={city.main.temp_min} max={city.main.temp_max}
      img={city.weather[0].icon} onClose={() => alert(city.name)} 
    key = {index}/> // uso index pero tiene propiedad id que podría usar quedaría key = {city.id};
    ))
    }
  </div>)
};