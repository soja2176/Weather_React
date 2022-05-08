import React from 'react'
import sty from '../components/styles/About.module.css'

export default function About(){
    return(
        <div className={sty.saludo}>
            <h1>Bienvenido a mi app del clima!!!</h1>
        <div>
            <h2>Mi nombre es Santiago, soy estudiante de la carrera Full Stack Web Developer en Henry</h2>
        </div>
        </div>
    )
}