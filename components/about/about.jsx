import React from 'react'

const About = () => {
  return (
    <div className='text-center flex flex-col gap-3 items-center'>
        <h2 className='text-2xl'>About Me</h2>
        <div className='flex flex-col items-center gap-5 px-5'>
            <p className='max-w-[715px]'>Mi nombre es Adriel Machado, tengo 19 años y nací en Argentina. Luego de graduarme en la escuela secundaria, en el año 2021, tomé la decisión de iniciar mi carrera como web developer. Luego de bootcamps y cursos intensivos, y sobre todo gracias a mi constancia, hoy tengo los conocimientos necesarios para ser Full-Stack Developer. Mi stack principal es de React, Next.js, Node.js, Express y MongoDB. Sé utilizar Headless CMS como strapi también. Aún así, todo el tiempo estoy aprendiendo nuevas tecnologías.</p>
            <p className='max-w-[700px]'>En mi tiempo libre, me entretengo jugando videojuegos, pasando tiempo con mi familia, entrenando, entre otras cosas. Me gusta mucho leer, pero lamentablemente no tengo mucho tiempo para hacerlo. Desde que soy chico, toco la guitarra.</p>
        </div>
    </div>
  )
}

export default About