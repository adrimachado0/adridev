'use client'
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
        <h3 onClick={() => {console.log(proyectos)}} className='text-2xl'>My projects</h3>
        {
          proyectos ? proyectos.map((proyecto, i) => (
            <Project 
                titulo={proyecto.titulo}
                descripcion={proyecto.descripcion}
                tecnologias={proyecto.tecnologias}
                image={imagesObject[proyecto.image]}
                key={i}
            />
          ))
          : <p>loading</p>
        }
    </div>
  )
}

export default Projects