import { useState } from "react"
import Header from "./components/header"
import Home from "./sections/home"
import AboutMe from "./sections/aboutMe";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

function App() {
  const [ darkTheme, setDarkTheme ] = useState(true);

  return (
    <div data-theme={darkTheme ? "dark" : ""} className="transition-colors duration-500">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
