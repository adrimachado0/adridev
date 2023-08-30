'use client'
import Image from "next/image"

import { useRef } from "react"
import { useScroll, motion, useTransform } from "framer-motion"

const Project = ({titulo, descripcion, tecnologias, image}) => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["0 1", "1.33 1"],
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]); 
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    console.log(descripcion)

    return (
        <motion.div style={{scale:scaleProgress, opacity:opacityProgress}} ref={ref} className="group relative flex md:odd:justify-end w-full md:w-[700px] h-[300px] bg-[#F2F3F6] rounded-xl shadow-md mb-16 hover:bg-gray-200 hover:cursor-pointer transition-all overflow-hidden" >
            <div className="px-9 py-10 flex flex-col mx-auto md:mx-0 justify-between max-w-[350px]">
                <div className="text-left flex flex-col gap-2">
                    <h3 className="font-semibold text-2xl">{titulo}</h3>
                    <p>{descripcion}</p>
                </div>
                <div className="max-w-[250px] flex gap-3 flex-wrap">
                    {
                    tecnologias.split(' ').map((tecnologia, i) => (
                        <div className="bg-[#3F3F41] px-3 py-1 rounded-full text-white text-xs" key={i}>
                        <p>  
                            {tecnologia}
                        </p>
                        </div>
                        ))
                    }
                </div>
            </div>
            <Image 
                className="rounded-tl-2xl absolute -right-5 -bottom-7 
                transition-all
                md:group-odd:-left-5 
                md:group-odd:rounded-tr-2xl
                md:group-odd:rounded-tl-none 
                md:group-hover:scale-[1.04] 
                md:group-hover:-translate-x-5 
                md:group-hover:translate-y-5 
                md:group-hover:-rotate-2
                md:group-odd:group-hover:translate-x-5
                md:group-odd:group-hover:translate-y-5
                md:group-odd:group-hover:rotate-2
                shadow-lg
                hidden md:block" 
                height={300} 
                src={image} 
                alt={`imagen ${titulo}`}
            />
        </motion.div>
    )
}

export default Project