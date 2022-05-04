import React from 'react';
import styles from '../components/styles/Card.module.css'

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código

  return (
   
    <div className={styles.card}>
      <button className={styles.btnC} onClick={onClose}>X</button>
     <h4 className={styles.nameT}>{name}</h4>
    <div>
     <p className={styles.text}>Min</p>
     <p className={styles.temp}>{min}</p>
     <p className={styles.text}>Max</p>
     <p className={styles.temp}>{max}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt = {"img"}></img>
    
    </div>
  )
};