'use client'

const Header = () => {

  const handleScroll = (id) => {
    const projects = document.getElementById(id)
    projects.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div className='h-16 w-full left-1/2 -translate-x-1/2 fixed top-0 bg-white border border-white bg-opacity-[0.47] flex flex-col items-center justify-center gap-1 sm:mt-5 px-20 sm:rounded-full sm:w-[470px] sm:flex-row sm:h-12 shadow-md backdrop-blur-md z-50'>
        <div className='flex text-[15px] text-gray-400 gap-1'>
          <p onClick={() => handleScroll('home')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Home</p>
          <p onClick={() => handleScroll('about')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>About</p>
          <p onClick={() => handleScroll('projects')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Projects</p>
          <p onClick={() => handleScroll('skills')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Skills</p>
        </div>
        <div className='flex text-[15px] text-gray-400 gap-1'>
          <p onClick={() => handleScroll('experience')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Experience</p>
          <p onClick={() => handleScroll('contact')} className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Contact</p>
        </div>
    </div>
  )
}

export default Header