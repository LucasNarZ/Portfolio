import CareerTimeline from "../components/careerTimeline"

function AboutMe(){
    return (
        <section id="AboutMe" className="flex flex-col w-[100vw] h-[900px] bg-gray-100 dark:bg-gray-900 items-center">
            <h1 className="text-4xl mt-14 mb-4 text-black dark:text-white">About Me</h1>
            <p className="mb-12">A little bit a about my story</p>
            <div className="flex">
                <CareerTimeline />
            </div>
            
        </section>
    )
}

export default AboutMe