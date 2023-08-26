import Link from "next/link"
import Image from "next/image"
import Github from '@/app/assets/github.png'
import Linkedin from '@/app/assets/linkedinBlack.png'

import ArrowRight from '@/app/assets/arrowRight.png'
import ArrowDownload from '@/app/assets/arrowDownload.png'


const Profile = () => {
  return (
    <div className="flex flex-col items-center mt-3 gap-3 sm:flex-row">
        <button className="font-medium px-5 h-11 rounded-full shadow-md bg-[#101827] text-white flex items-center gap-3">Contact me here <Image src={ArrowRight} /></button>
        <button className="font-medium px-5 h-11 rounded-full shadow-md bg-[#FCFCFC] flex items-center gap-2">Download CV <Image src={ArrowDownload} /></button>
        <Link target="_blank" href="https://ar.linkedin.com/in/adriel-machado-50892025a" className="w-11 h-11 rounded-full shadow-md bg-[#FCFCFC] flex items-center justify-center"><Image width={19} src={Linkedin } /></Link>
        <Link target="_blank" href="https://github.com/adrimachado0" className="w-11 h-11 rounded-full shadow-md bg-[#FCFCFC] flex items-center justify-center"><div className="bg-black w-[19px] h-[19px] flex items-center justify-center rounded-[4px]"><Image width={15} src={Github } /></div></Link>
    </div>
  )
}

export default Profile