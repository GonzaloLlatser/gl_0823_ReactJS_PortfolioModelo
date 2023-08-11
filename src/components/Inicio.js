import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
      <h1>Un poco sobre mí</h1>

      <h2>
        Hola, soy Gonzalo Llatser y estoy en proceso de convertirme en Desarrollador Web.
        Actualemente estoy cursando la FP de DAW en Valencia, España. <Link to='/contacto'>Contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        <div className='works'></div>
      </section>
    </div>
  )
}
