'use client'

const Header = () => {

  const handleScroll = (id) => {
    const projects = document.getElementById(id)
    projects.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div className='h-16 w-full sm:w-fit left-1/2 -translate-x-1/2 fixed top-0 bg-white border border-white bg-opacity-[0.47] flex flex-col items-center justify-center gap-1 sm:mt-5 sm:rounded-full sm:flex-row sm:h-12 shadow-md backdrop-blur-md z-50 px-5'>
        <div className='flex text-[14px] text-gray-400 gap-1'>
          <p onClick={() => handleScroll('home')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Inicio</p>
          <p onClick={() => handleScroll('about')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all w-[79px]'>Sobre mí</p>
          <p onClick={() => handleScroll('projects')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Projectos</p>
          <p onClick={() => handleScroll('skills')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Habilidades</p>
        </div>
        <div className='flex text-[15px] text-gray-400 gap-1'>
          <p onClick={() => handleScroll('experience')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Experiencia</p>
          <p onClick={() => handleScroll('contact')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Contacto</p>
        </div>
    </div>
  )
}

export default Header