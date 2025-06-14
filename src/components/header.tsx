import type { Dispatch } from "react";
import ThemeToggle from "./themeToggle";
import LanguageToggle from "./languageToggle";

interface HeaderProps {
    darkTheme: boolean;
    setDarkTheme: Dispatch<boolean>;
}

function Header({darkTheme, setDarkTheme}:HeaderProps){
    return(
        <nav className="flex justify-between items-center w-[100vw] h-16 p-3 bg-gray-100 dark:bg-gray-800 fixed z-1000">
            <div className="flex flex-col ml-3">
                <p className="text-xl dark:text-white text-black">Lucas</p>
                <p className="text-sm dark:text-white text-black">Fullstack Developer</p>
            </div>
            <div>
                <ul className="flex gap-8">
                    <li className="underline-animate group">
                        <span><a href="#Home">Home</a></span>
                        <span></span>
                    </li>
                    <li className="underline-animate group">
                        <span><a href="#AboutMe">About Me</a></span>
                        <span></span>
                    </li>
                    <li className="underline-animate group">
                        <span><a href="#Projects">Projects</a></span>
                        <span></span>
                    </li>
                    <li className="underline-animate group">
                        <span><a href="#Skills">Skills</a></span>
                        <span></span>
                    </li>
                    <li className="underline-animate group">
                        <span><a href="#Contact">Contact</a></span>
                        <span></span>
                    </li>
                    <li className="underline-animate group">
                        <span><a href="#SideProjects">Side Projects</a></span>
                        <span></span>
                    </li>
                </ul>
            </div>
            <div className="flex gap-6">
                <ThemeToggle  darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <LanguageToggle />
            </div>
        </nav>
    )
}

export default Header