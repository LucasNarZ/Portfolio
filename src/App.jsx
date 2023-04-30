import './css/styles.css';
import JsIcon from './icons/iconjs.svg';
import CssIcon from './icons/logo-css.svg';
import htmlIcon from './icons/732212.svg';
import ReactIcon from './icons/React-icon.svg';
import SassIcon from './icons/sass-1.svg';
import GithubIcon from './icons/github-mark.svg';
import {useState, useRef} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Header(props){
    return(
        <header className= "header">
            <div className='name-and-prof'>
                <p className='name'>Lucas</p>
                <p className='prof'>Front-end Developer</p>
            </div>
            <nav>
                <ul className='Menu'>
                    <li><a href="/#Home">Home</a></li>
                    <li><a href="/#Skills">Skills</a></li>
                    <li><a href="/#Projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}

function Home(props){
    return(
        <section id='Home'>
            <div className='info'>
                <p>I'm Lucas</p>
                <p>Front-end Developer and UI & UX Designer</p>
                <p>I'm a front-end developer with expertise in HTML, CSS, JS, and React. I specialize in creating responsive and dynamic user interfaces.</p>
                <Link to="/Contact"><button className='contact-me-btn'>Contact Me</button></Link>
            </div>
            <div className="images">
                <img src={JsIcon} alt="JavaScript" />
                <div className='icons'>
                    <img src={htmlIcon} alt="HTML"/>
                    <p>UI/UX</p>
                    <img src={ReactIcon} alt="React"/>
                </div>
                <img src={CssIcon} alt="CSS"/>
            </div>
        </section>
    )
}

function Skills(props){
    return(
        <section id='Skills'>
            <p className='title'>Skills</p>
            <p className='text'>I'm always learning new things</p>
            <div className='boxes'>
                <div className='box' key="html">
                    <img src={htmlIcon} alt="HTML"/>
                    <p>HTML stands for HyperText Markup Language. It is a standard markup language for web page creation.</p>
                </div>
                <div className='box' key="css">
                    <img src={CssIcon} alt="CSS"/>
                    <p>CSS was developed by W3C (World Wide Web Consortium) in 1996 for a rather simple reason.</p>
                </div>
                <div className='box' key="JavaScript">
                    <img src={JsIcon} alt="JavaScript" />
                    <p>JavaScript is a lightweight programming language that web developers commonly use to create more dynamic interactions when developing web pages.</p>
                </div>
                <div className='box' key="React">
                    <img src={ReactIcon} alt="React"/>
                    <p>The React.js framework is an open-source JavaScript framework and library developed by Facebook.</p>
                </div>
                <div className='box' key="Sass">
                    <img src={SassIcon} alt="Sass"/>
                    <p>Sass (Syntactically Awesome Style Sheets) is an extension of CSS. Style sheet languages control where and how text appears on a webpage, from frame size and color to menu positions.</p>
                </div>
                <div className='box ui-ux' key="ui/ux">
                    <p className='box-title'>UI/UX</p>
                    <p>UX design refers to the term “user experience design”, while UI stands for “user interface design”.</p>
                </div>
            </div>
        </section>
    )
}

function Projects(props){
    const [isViseble, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(!isViseble)
    }


    return(
        <section id="Projects">
            <div className="title-description">
                <p className="title">Projects</p>
                <p className='text'>Here you can see my skills in practice</p>
            </div>
            <div className="project">
                <div className="title-image">
                    <p className="project-title">E-commerce</p>
                    <img src="" className="project-image" alt="" />
                </div>
                <div className="project-info">
                    <p className="project-description">This project is a complete e-commerce for books, it contains pages like the home page, the cart, search of products, checkout, login etc.</p>
                    <p className="skills-used">Build using: React,  Sass.</p>
                    <a href="http://github.com" target='_blanked'><img src={GithubIcon} className="github" alt="github" /></a>
                </div>
            </div>
            <div className="project">
            <div className="title-image">
                <p className="project-title">Landing Page</p>
                <img src="" className="project-image" alt="" />
            </div>
            <div className="project-info">
                <p className="project-description">The landing page was designed to showcase the product's features and benefits, and to encourage users to take action, such as making a purchase or signing up for a free trial.</p>
                <p className="skills-used">Build using: React,  Sass.</p>
                <a href="http://github.com" target='_blanked'><img src={GithubIcon} className="github" alt="github" /></a>
                
            </div>
        </div>  
        <div className="project">
            <div className="title-image">
                <p className="project-title">Form</p>
                <img src="" className="project-image" alt="" />
            </div>
            <div className="project-info">
                <p className="project-description">The objective of this form is to gather information from the user through an intuitive interface.The form is divided nto sections to make it more easy for the user to proceed and complete the form.</p>
                <p className="skills-used">Build using React,  Sass.</p>
                <a href="http://github.com" target='_blanked'><img src={GithubIcon} className="github" alt="github" /></a>
                
            </div>
        </div> 
        {!isViseble && <p className='see-more' onClick={handleClick}>See More</p>}
        {isViseble && <div className="see-more-projects">
            <div className="see-more-project project">
                <div className="title-image">
                    <p className="project-title">E-commerce</p>
                    <img src="" className="project-image" alt="" />
                </div>
                <div className="project-info">
                    <p className="project-description">This project is a complete e-commerce for books, it contains pages like the home page, the cart, search of products, checkout, login etc.</p>
                    <p className="skills-used">Build using: React,  Sass.</p>
                    <a href="http://github.com" target='_blanked'><img src={GithubIcon} className="github" alt="github" /></a>
                </div>
            </div>
            <div className="see-more-project project">
                <div className="title-image">
                    <p className="project-title">Landing Page</p>
                    <img src="" className="project-image" alt="" />
                </div>
                <div className="project-info">
                    <p className="project-description">The landing page was designed to showcase the product's features and benefits, and to encourage users to take action, such as making a purchase or signing up for a free trial.</p>
                    <p className="skills-used">Build using: React,  Sass.</p>
                    <a href="http://github.com" target='_blanked'><img src={GithubIcon} className="github" alt="github" /></a>
                </div>
            </div>  
            <div className="see-more-project project">
                <div className="title-image">
                    <p className="project-title">Form</p>
                    <img src="" className="project-image" alt="" />
                </div>
                <div className="project-info">
                    <p className="project-description">The objective of this form is to gather information from the user through an intuitive interface.The form is divided nto sections to make it more easy for the user to proceed and complete the form.</p>
                    <p className="skills-used">Build using React,  Sass.</p>
                    <a href="http://github.com" target='_blanked'><img src={GithubIcon} className="github" alt="github" /></a>
                </div>
            </div> 
        </div>}
        {isViseble && <p className='hide' onClick={handleClick}>Hide</p>}
        

        </section>
    );
}

function Contact(props){
    return(
        <>
            <Header />
            <section className='contact'>
                <button className='linkedin'><a href="http://LinkedIn.com/in/lucas-narloch-a7ba51271/" target='_blank'>Linkedin</a></button>
                <p>Or sand me an email:</p>
                <strong><a href="mailto:lucasnarlochz@gmail.com" target="_blank">lucasnarlochz@gmail.com</a></strong>
            </section>
        </>

    )
}

function Main(props){
    return(
        <>
            <Header />
            <Home />
            <Skills />
            <Projects />
        </>
    )
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/Contact" element={<Contact />}/>
            </Routes>
        </Router>
    );
}

export default App;
