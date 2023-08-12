import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>Un poco sobre mí</h1>

      <h2>
        Hola, soy <strong>Gonzalo Llatser</strong> y estoy en proceso de convertirme en<strong> Desarrollador Web. </strong>
        Actualmente estoy cursando la FP de <strong>DAW</strong> en Valencia, España.
      </h2>

      <h3>Te ayudo a crear tu sitio web, tener más visibilidad y relevancia en internet. <Link to='/contacto'>Contacta conmigo</Link></h3>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <ListadoTrabajos limite ='3'/>
      </section>
    </div>
  )
}
