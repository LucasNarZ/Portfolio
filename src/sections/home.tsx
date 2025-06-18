import TypeWriter from "../components/typeWriter"

function Home(){
    return (
        <section id="Home" className="flex flex-col items-center justify-center dark:bg-gray-700 bg-white h-[100vh] w-[100vw]">
            <div>
                <p className="text-black dark:text-white text-6xl">I'm Lucas</p>
                <TypeWriter />
            </div>
            
        </section>
    )
}

export default Home