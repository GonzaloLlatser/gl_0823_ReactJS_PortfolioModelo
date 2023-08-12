import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/Trabajos';

export const Proyecto = () => {

  const [proyecto, setProyecto] = useState({});

  const params = useParams();

  useEffect(() => {
    let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
    setProyecto(proyecto[0]);

    console.log(proyecto);

  }, [])

  return (
    <div className='page'>
      <div className='mask'>
        <img src={'/images/' + proyecto.id + '.png'} />
      </div>
      <h1 className='heading'>Proyecto {proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
    </div>
  )
}

