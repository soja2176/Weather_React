import React from 'react';
import styles from '../components/styles/Card.module.css'
import {Link} from 'react-router-dom'

export default function Card({max,min,name,img,onClose,id}) {
  return (  
    <div className={styles.card}>
      <button 
        className={styles.btnC} 
        onClick={onClose}
      >
        X
      </button> 
      <h4 className={styles.nameT}>
        {name}
      </h4>
      <h3 className={styles.text}>
        Temperatura
      </h3>
      <div className={styles.info}>     
        <p className={styles.text}>
          Min 
        </p>
        <p className={styles.temp}>
          {min+' º'}
        </p>
        <p className={styles.text}>
          Max 
        </p>
        <p className={styles.temp}>
          {max+' º'}
        </p>
        <img className={styles.imax} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt = {"img"}/>
        <Link to={`/City/${id}`} >
          <button className={styles.verMas}>
            Ver mas
          </button>
        </Link>
      </div>
    </div>
  )
};