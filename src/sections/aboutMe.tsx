import CareerTimeline from "../components/careerTimeline"

function AboutMe(){
    return (
        <section className="flex flex-col w-[100vw] h-[100vh] bg-gray-100 dark:bg-gray-900 items-center">
            <h1 className="text-5xl mt-20 mb-12">About Me</h1>
            <div className="flex">
                <div className="flex items-center justify-center">
                    <p>asdadsadsad</p>
                </div>
                <CareerTimeline />
            </div>
            
        </section>
    )
}

export default AboutMe