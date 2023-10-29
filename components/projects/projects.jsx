'use client'

import Link from "next/link"

import { useState, useEffect } from "react"
import axios from "axios"

import Project from "./project"

import Workables from './img/workables.png'
import Shaper from './img/shaper.png'
import Squared from './img/squared.png'
import Fonoaudiologia from './img/fonoaudiologia.png'

const Projects = () => {

  const [proyectos, setProyectos] = useState();

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/projects`)
      .then(response => response.data)
      .then(data => {setProyectos(data); console.log(data)})
    return
  }, [])
  
  const imagesObject = {
    "Workables": Workables,
    "Shaper": Shaper,
    "Squared": Squared,
    "Fonoaudiologia":Fonoaudiologia,
  }

  return (
    <>
      <div className="mx-auto text-center flex flex-col gap-5">
        <h3 className='text-2xl'>Última presentación</h3>
        <video
          className='w-[98%] lg:w-10/12 mx-auto rounded-3xl'
          src="https://res.cloudinary.com/dksuajem1/video/upload/v1698618997/2023-10-29-19-24-01_dqa3zr.mp4"
          title="Mi tienda web."
          controls
        />
      </div>
      <div id='projects' className='w-full md:max-w-[715px] flex flex-col gap-3 items-center mx-auto text-center px-5 scroll-mt-28'>
          <h3  className='text-2xl'>Mis proyectos</h3>
          {
            proyectos ? proyectos.map((proyecto, i) => (
              <Project 
              key={i}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              tecnologias={proyecto.tecnologias}
              image={imagesObject[proyecto.image]}
              link={proyecto.link}
              />
              ))
              : <p>cargando</p>
            }
      </div>
    </>
  )
}

export default Projects