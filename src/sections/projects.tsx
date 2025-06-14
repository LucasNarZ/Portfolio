import ProjectCard from "../components/project"

function Projects(){
    return (
        <section id="Projects" className="flex flex-col w-[100vw] h-[160vh] bg-white 
        dark:bg-gray-700 items-center">
            <h1 className="text-4xl mt-14 mb-4 text-black dark:text-white">Projects</h1>
            <p className="mb-12 text-black dark:text-white">Some projects that demonstrate my skills.</p>
            <div className="grid grid-cols-2 gap-12">
                <ProjectCard title="Bookland" description="A monthly book subscription website made using React and Sass." imageUrl=""/>
                <ProjectCard title="Bookland" description="A monthly book subscription website made using React and Sass." imageUrl=""/>
                <ProjectCard title="Bookland" description="A monthly book subscription website made using React and Sass." imageUrl=""/>
                <ProjectCard title="Bookland" description="A monthly book subscription website made using React and Sass." imageUrl=""/>
            </div>

        </section>
    )
}

export default Projects