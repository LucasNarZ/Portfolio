import { ArrowRight, ArrowLeft } from "lucide-react";

type CareerStep = {
    date: string;
    title: string;
    description: string;
};

const careerData: CareerStep[] = [
    {
        date: "May 2020",
        title: "First Time Programming",
        description: "When i started to learn my first programming language, foundation of what i know today.",
    },
    {
        date: "Oct 2024 - now",
        title: "internship BackEnd Developer",
        description: "My first professional experience.",
    },
    {
        date: "Jan 2025 - now",
        title: "Bachelor in Computer Science at PUCPR",
        description: "Started a bachelor in Computer Science to go deeper into programming knowledge.",
    },
];

export default function CareerTimeline() {
    return (
        <div className="relative flex flex-col items-center px-4 py-10">
            <div className={`absolute left-5/6 md:left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2`} />

            {careerData.map((step, index) => {
                const isLeft = window.innerWidth > 500 ? index % 2 === 0 : 0;
                return (
                    <div
                        key={index}
                        className={`relative w-full flex items-center mb-5 transition-all duration-500 ${!isLeft ? "justify-start" : "justify-end"
                            }`}
                    >
                        <div className="w-5/6 md:w-1/2 px-4 group ">
                            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-600 dark:to-gray-700 shadow-lg group-hover:shadow-2xl rounded-2xl p-4 transform transition-all duration-300 group-hover:scale-[1.03]">
                                <p className="text-sm text-gray-400 dark:text-white">{step.date}</p>
                                <h3 className="text-xl font-bold text-gray-800  dark:text-white">{step.title}</h3>
                                <p className="text-gray-600 mt-2 dark:text-gray-50">{step.description}</p>
                            </div>
                        </div>

                        <div className="absolute left-5/6 md:left-1/2 transform -translate-x-1/2 z-10 bg-white p-2 rounded-full shadow-md group-hover:shadow-xl transition-all duration-300 animate-pulse">
                            <div className="transition-transform duration-300 group-hover:scale-125">
                                {isLeft ? (
                                    <ArrowRight className="text-gray-500" />
                                ) : (
                                    <ArrowLeft className="text-gray-500" />
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>


    );
}
