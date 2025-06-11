import { useState } from "react"
import Header from "./components/header"
import Home from "./sections/home"
import AboutMe from "./sections/aboutMe";

function App() {
  const [ darkTheme, setDarkTheme ] = useState(true);

  return (
    <div data-theme={darkTheme ? "dark" : ""} className="transition-colors duration-500">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Home />
      <AboutMe />
    </div>
  )
}

export default App
