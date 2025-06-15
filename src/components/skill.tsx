import type { ReactNode } from "react"

interface SkillsProps {
    icon: ReactNode;
}

function Skill({icon}:SkillsProps){
    return (
        <div className="duration-1000 hover:scale-140 shadow-xl hover:shadow-3xl flex items-center justify-center border-[1px] w-20 h-20 rounded-full bg-white dark:bg-gray-700 dark:hover:bg-gray-700/120 hover:bg-gray-200">
            {icon}
        </div>
    )
}

export default Skill