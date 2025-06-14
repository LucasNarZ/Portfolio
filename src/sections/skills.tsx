import { FaPython, FaReact, FaAws, FaNode, FaDocker, FaSass} from "react-icons/fa"
import { SiTypescript ,SiNestjs, SiPostgresql, SiC, SiGit, SiTailwindcss, SiRedis, SiTypeorm, SiJest } from "react-icons/si"
import Skill from "../components/skill"

function Skills(){

    const skillsIcons = [
    <SiTypescript className="w-14 h-10 text-blue-600"/>, 
    <FaPython className="w-14 h-10 text-blue-400"/>,
    <SiNestjs className="w-14 h-10 text-red-500"/>,
    <FaReact className="w-14 h-10 text-blue-300" />, 
    <SiPostgresql className="w-14 h-10 text-blue-500" />,
    <FaAws className="w-14 h-10 dark:text-white text-gray-500"/>,
    <SiC className="w-14 h-10  text-blue-500"/>, 
    <FaNode className="w-14 h-10 text-green-500"/>,
    <SiTailwindcss className="w-14 h-10 text-blue-500" />,
    <SiRedis className="w-14 h-10 text-red-500"/>,
    <SiTypeorm className="w-14 h-10 dark:text-white text-gray-500" />, 
    <SiGit className="w-14 h-10 text-red-500" />,
    <SiJest className="w-14 h-10 text-red-500" />,
    <FaSass className="w-14 h-10 text-pink-300" />,
    <FaDocker className="w-14 h-10 text-blue-500" />,
    ]

    return (
        <section id="Skills" className="flex flex-col w-[100vw] h-[100vh] bg-gray-100 dark:bg-gray-900 items-center">
            <h1 className="text-4xl mt-10 mb-4 text-black dark:text-white">Skills</h1>
            <p className="mb-12 text-black dark:text-white">The skills that allow me to create anything.</p>
            <div className="h-full flex items-center justify-center">

                <div className="grid grid-cols-5 gap-16">
                    {skillsIcons.map((icon, index) => {
                        return (
                            <Skill key={index} icon={icon}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills