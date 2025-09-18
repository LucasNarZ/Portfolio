import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    technologies?: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export default function ProjectCard({ title, description, imageUrl, technologies = [], githubUrl = "#", liveUrl = "#" }: ProjectCardProps) {
    return (
        <div className="group relative overflow-hidden w-11/12 place-self-center md:w-[50vw] max-w-[600px] rounded-2xl border transition-transform hover:scale-[1.02] shadow-xl hover:shadow-2xl bg-white/70 border-gray-200 backdrop-blur-md dark:bg-white/10 dark:border-white/20">
            <img src={imageUrl} alt={title} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="p-5 space-y-3">
                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">{technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-800 dark:bg-white/20 dark:text-white/90">{tech}</span>
                    ))}</div>
                )}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm">{description}</p>
                <div className="flex gap-3 pt-2">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 active:scale-95 text-white bg-black/30 border border-white/30 hover:bg-black/40 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/30">
                        <ExternalLink size={16} /> Ver Projeto
                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 active:scale-95 text-white bg-black/30 border border-white/30 hover:bg-black/40 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/30">GitHub</a>
                </div>
            </div>
            <div className="absolute inset-0 pointer-events-none transition duration-500 group-hover:bg-black/5 dark:group-hover:bg-white/5" />
        </div>
    );
}
