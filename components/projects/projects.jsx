'use client'

import Link from "next/link"

import { useState, useEffect } from "react"
import axios from "axios"

import Project from "./project"

import Workables from './img/workables.png'
import Shaper from './img/shaper.png'
import Squared from './img/squared.png'

const Projects = () => {

  const [proyectos, setProyectos] = useState();

  useEffect(() => {
    axios.get('https://portfolio-2023-psi-self.vercel.app/api/projects')
      .then(response => {return response.data})
      .then(data => {setProyectos(data)})
    return
  }, [])
  
  const imagesObject = {
    "Workables": Workables,
    "Shaper": Shaper,
    "Squared": Squared,
  }

  return (
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
          : <p>loading</p>
        }
    </div>
  )
}

export default Projects