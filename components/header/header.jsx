
const Header = () => {
  return (
    <div className='h-16 w-full left-1/2 -translate-x-1/2 fixed top-0 bg-white border border-white bg-opacity-[0.47] flex flex-col items-center justify-center gap-1 sm:mt-5 px-20 sm:rounded-full sm:w-[470px] sm:flex-row sm:h-12 shadow-m backdrop-blur-md'>
        <div className='flex text-[15px] text-gray-400 gap-1'>
          <p className='bg-gray-200 text-black px-2 rounded-3xl cursor-pointer'>Home</p>
          <p className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>About</p>
          <p className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Projects</p>
          <p className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Skills</p>
        </div>
        <div className='flex text-[15px] text-gray-400 gap-1'>
          <p className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Experience</p>
          <p className='px-2 hover:bg-gray-200 hover:text-black hover:px-2 hover:rounded-3xl cursor-pointer transition-all'>Contact</p>
        </div>
    </div>
  )
}

export default Header