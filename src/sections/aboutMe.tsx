import CareerTimeline from "../components/careerTimeline"

function AboutMe(){
    return (
        <section id="AboutMe" className="flex flex-col w-[100vw] h-[130vh] bg-gray-100 dark:bg-gray-900 items-center">
            <h1 className="text-4xl mt-10 mb-12 text-black dark:text-white">About Me</h1>
            <div className="flex">
                <CareerTimeline />
            </div>
            
        </section>
    )
}

export default AboutMe