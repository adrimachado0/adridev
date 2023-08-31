'use client'

import Image from 'next/image'
import NextLogo from '@/app/assets/nextjsLogo.png'
import ReactLogo from '@/app/assets/reactLogo.png'
import GraduadoLogo from '@/app/assets/graduadoLogo.png'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {

    const objectExperiences = [
        {
            title:"FullStack finalizado",
            location:"Argentina",
            description:"Luego de 8 meses de estudio, pude terminar completo el MERN Stack.",
            logo:GraduadoLogo,
            date:"2021 - 2022",
        },
        {
            title:"Front-End Developer",
            location:"Argentina",
            description:"Trabajé como desarrollador front-end durante 6 meses. Las habilidades que requería este trabajo, era sobre React.js.",
            logo:ReactLogo,
            date:"2022",
        },
        {
            title:"Full-Stack Developer",
            location:"Argentina",
            description:"Actualmente, trabajo como desarrollador full-stack. Dentro de mi stack, la tecnología principal es Next.js, seguido de, MongoDB y Tailwind.css. Abierto a nuevas oportunidades.",
            logo:NextLogo,
            date:"2023 - actualmente",
        }
    ]

    return (
        <div id='experience' className='text-2xl scroll-mt-28'>
            <h3 className='text-center'>My Experience</h3>
            <VerticalTimeline
                lineColor='#e5e7eb'
            >
                {
                    objectExperiences.map((experience, i) => (
                        <>
                            <VerticalTimelineElement
                                key={i}
                                contentStyle={{
                                    background: "#f3f4f6",
                                    boxShadow: "none",
                                    border:"1px solid rgba(0, 0, 0, 0.05)",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem",
                                }}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid #9ca3af"
                                }}
                                date={experience.date}
                                icon={<div className='flex items-center justify-center h-full bg-gray-200 rounded-full'><Image src={experience.logo} width={30} /></div>}
                            >
                                <h4 className='text-xl font-semibold'>{experience.title}</h4>
                                <p>{experience.location}</p>
                                <p>{experience.description}</p>
                            </VerticalTimelineElement>
                        </>
                    ))
                }
            </VerticalTimeline>
        </div>
    )
}

export default Experience