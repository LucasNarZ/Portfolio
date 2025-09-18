import ProjectCard from "../components/project"

function Projects(){
    return (
        <section id="Projects" className="flex flex-col w-[100vw] min-h-[1100px] bg-white 
        dark:bg-gray-700 items-center pb-10">
            <h1 className="text-4xl mt-14 mb-4 text-black dark:text-white">Projects</h1>
            <p className="mb-12 text-black dark:text-white text-center">Some projects that demonstrate my skills.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ProjectCard title="Sunlog.dev" description="Sunlog.dev is a developer-focused platform to create, share, and discover devlogs. Organize your coding journey by projects, skills, and tags, and explore trending users and posts. Built with Next.js, NestJS, and PostgreSQL for a fast and scalable experience." imageUrl="sunlog.png" technologies={["NestJS", "NextJS", "Docker", "PostgresSQL", "Sequelize", "AWS", "CI/CD"]} liveUrl="52.207.81.181" githubUrl="https://github.com/LucasNarZ/Sunlog.dev"/>

                <ProjectCard title="Bookland" description="A monthly book subscription website made using React and Sass." imageUrl="bookland.png"  technologies={["HTML", "CSS", "React", "Redux"]} liveUrl="https://landing-page-lucasnarz.vercel.app/" githubUrl="https://github.com/LucasNarZ/Book-Service-Landing-page"/>

                <ProjectCard title="PocScript" description="A compiler written in C that converts to assembly." imageUrl="gear.svg" technologies={["C", "NASM", "make"]}/>

                <ProjectCard title="Simple Thermostat" description="A simple thermostat firmware written in C++ that connect to aws, basic control front-end and api using API Gateway." imageUrl="gear.svg" technologies={["C++", "Arduino Framework", "Esp32", "AWS"]}/>
            </div>

        </section>
    )
}

export default Projects
