'use client'

import Link from "next/link"
import Image from "next/image"
import Github from '@/app/assets/github.png'
import Linkedin from '@/app/assets/linkedinBlack.png'

import ArrowRight from '@/app/assets/arrowRight.png'
import ArrowDownload from '@/app/assets/arrowDownload.png'


const Profile = () => {

  const handleClickDownload = () => {
    const pdfUrl = './public/adrielmachado.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'adrielmachado.pdf'; // Nombre de archivo que se descargará
    link.click();
  }

  return (
    <div className="flex flex-col items-center mt-3 gap-3 sm:flex-row">
        <button onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} className="font-medium px-5 h-11 rounded-full shadow-md bg-[#101827] text-white flex items-center gap-3">Contáctame ya!<Image alt="ArrowRight" src={ArrowRight} /></button>
        <a download={true} href="/adrielmachado.pdf" className="font-medium px-5 h-11 rounded-full shadow-md bg-[#FCFCFC] flex items-center gap-2">Descargar CV <Image alt="ArrowDownload" src={ArrowDownload} /></a>
        <Link target="_blank" href="https://ar.linkedin.com/in/adriel-machado-50892025a" className="w-11 h-11 rounded-full shadow-md bg-[#FCFCFC] flex items-center justify-center"><Image alt="Linkedin" width={19} src={Linkedin } /></Link>
        <Link target="_blank" href="https://github.com/adrimachado0" className="w-11 h-11 rounded-full shadow-md bg-[#FCFCFC] flex items-center justify-center"><div className="bg-black w-[19px] h-[19px] flex items-center justify-center rounded-[4px]"><Image alt="Github" width={15} src={Github } /></div></Link>
    </div>
  )
}

export default Profile