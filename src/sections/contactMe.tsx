import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function ContactMe() {
  return (
    <section id="Contact" className="duration-700 flex flex-col w-full h-[700px] py-16 px-4 bg-white dark:bg-gray-700 items-center">
      <h1 className="text-4xl mb-4 text-black dark:text-white">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-md">Feel free to reach out through any of the platforms below.</p>
      <div className="flex gap-12 text-3xl items-center h-full">
        <a href="https://github.com/LucasNarZ" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors" aria-label="GitHub">
            <FaGithub className="w-12 h-12" />
        </a>
        <a href="mailto:lucasnarloch123@gmail.com" className="text-gray-800 dark:text-white hover:text-red-500 transition-colors" aria-label="Email">
            <FaEnvelope className="w-12 h-12" />
        </a>
        <a href="https://www.linkedin.com/in/lucasnarloch" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-700 transition-colors" aria-label="LinkedIn">
            <FaLinkedin className="w-12 h-12"/>
        </a>
      </div>
    </section>
  );
}

export default ContactMe;
