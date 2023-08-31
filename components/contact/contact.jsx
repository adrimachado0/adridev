'use client'

import Formulario from "./formulario"

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center gap-3 mb-32">
        <h3 className="text-2xl text-center" >Contact</h3>
        <p className="text-center w-[350px] sm:w-[450px]">Por favor, sigamos en contacto. Puedes rellenar este formulario, y nos comunicaremos vía mail.</p>
        <Formulario />
    </div>
  )
}

export default Contact