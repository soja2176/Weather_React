import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../components/styles/Card.module.css'

export default function Ciudad({city}) {
    return (
        <div className={styles.cardExt}>
                <div >
                    <h2 className={styles.nameT}>{city.name}</h2>
                    <div className={styles.infoExt}>
                        <div className={styles.text}>Temperatura: {city.temp} ºC</div>
                        <div className={styles.text}>Clima: {city.weather}</div>
                        <div className={styles.text}>Viento: {city.wind} km/h</div>
                        <div className={styles.text}>Cantidad de nubes: {city.clouds}</div>
                        <div className={styles.text}>Latitud: {city.latitud}º</div>
                        <div className={styles.text}>Longitud: {city.longitud}º</div>
                    </div>
                        <Link to={'/'} >
                            <button className={styles.verMas}>
                                Atrás
                            </button>
                        </Link>
                </div>
        </div>
    )
}