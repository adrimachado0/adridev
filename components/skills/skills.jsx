'use client'

import { motion } from "framer-motion"

const Skills = () => {
    
    const tagSkill = [
        "HTML",
        "CSS",
        "Javascript",
        "JQuery",
        "Ajax",
        "Bootstrap.css",
        "Tailwind.css",
        "React",
        "Redux",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Framer Motion",
        "Git"
    ]

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.05 * i
                },
        })
    };

    return (
        <div id='skills' className='max-w-[750px] scroll-mt-28 text-center mx-auto'>
            <h3 className='text-2xl mb-8'>My Skills</h3>
            <div className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {
                    tagSkill.map((skill, i) => (
                        <motion.div
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={i}
                            key={i} 
                            className='border border-black-[0.1] rounded-xl px-3 py-2 shadow'>
                            <p>{skill}</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills