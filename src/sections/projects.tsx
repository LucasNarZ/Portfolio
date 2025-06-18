import ProjectCard from "../components/project"

function Projects(){
    return (
        <section id="Projects" className="flex flex-col w-[100vw] h-[1100px] bg-white 
        dark:bg-gray-700 items-center">
            <h1 className="text-4xl mt-14 mb-4 text-black dark:text-white">Projects</h1>
            <p className="mb-12 text-black dark:text-white">Some projects that demonstrate my skills.</p>
            <div className="grid grid-cols-2 gap-12">
                <ProjectCard title="Bookland" description="A monthly book subscription website made using React and Sass." imageUrl="bookland.png"  technologies={["HTML", "CSS", "React", "Redux"]} liveUrl="https://landing-page-lucasnarz.vercel.app/" githubUrl="https://github.com/LucasNarZ/Book-Service-Landing-page"/>
                <ProjectCard title="Form" description="A dev form using react-hook-form lib." imageUrl="form.png" technologies={["React", "React Hook Form", "Material UI"]} liveUrl="form-five-xi.vercel.app" githubUrl="https://github.com/LucasNarZ/Form"/>
                <ProjectCard title="PocScript" description="A compiler written in C that converts to assembly." imageUrl="gear.svg" technologies={["C", "NASM", "make"]}/>
                <ProjectCard title="Simple Thermostat" description="A simple thermostat firmware written in C++ that connection to aws, basic control front-end and api using API Gateway." imageUrl="gear.svg" technologies={["C++", "Arduino Framework", "Esp32", "AWS"]}/>
            </div>

        </section>
    )
}

export default Projects