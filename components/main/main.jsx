import Image from "next/image"
import Adri from '@/app/assets/adri.png'

import Profile from "./profile"

const Main = () => {
  return (
    <div id="home" className="flex flex-col items-center gap-5 scroll-mt-28">
        <div className="w-[115px] h-[115px] bg-white rounded-full flex items-center justify-center shadow-lg">
            <Image alt="Adriel machado" className="rounded-full" src={Adri} width={100}/>
        </div>
        <div className="text-center w-[320px]">
            <h1 className="text-2xl">Hola! Soy <span className="font-medium underline">Adriel Machado</span></h1>
            <p>Soy <span className="font-semibold">Full-Stack Developer</span>, con <span className="font-semibold">2 años</span> de experiencia. Suelo construir <span className="underline italic">landing pages & web apps</span>. La tecnología principal que utilizo, es <span className="underline">React</span> {"("}<span className="underline">Next.js</span>{")"}.</p>
        </div>
        <Profile />
    </div>
  )
}

export default Main