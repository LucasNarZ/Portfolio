import { useState } from "react";



export default function LanguageToggle() {
  const [ lang, setLang ] = useState("en")

    const handleToggle = () => {
        setLang(lang === "en" ? "pr" : "en")
    }

  return (
    <button
      onClick={handleToggle}
      className="relative w-14 h-8 rounded-full p-1 bg-gray-300 dark:bg-gray-700 transition-colors duration-300"
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-white transition-all duration-300 transform ${
          lang === "en" ? "translate-x-6" : ""
        }`}
      >
        <div className="flex items-center justify-center w-full h-full text-sm">
          {lang === "en" ? "🇺🇸" : "🇧🇷"}
        </div>
      </div>
    </button>
  );
}