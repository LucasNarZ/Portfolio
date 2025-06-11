import type { Dispatch } from "react";

interface ThemeToggleProps {
    darkTheme: boolean;
    setDarkTheme: Dispatch<boolean>;
}

export default function ThemeToggle({darkTheme, setDarkTheme}:ThemeToggleProps) {
    const handleToggle = () => {
        setDarkTheme(!darkTheme)
    }

  return (
    <button
      onClick={handleToggle}
      className="relative w-14 h-8 rounded-full p-1 bg-gray-300 dark:bg-gray-700 transition-colors duration-300"
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-white transition-all duration-300 transform ${
          darkTheme ? "translate-x-6" : ""
        }`}
      >
        <div className="flex items-center justify-center w-full h-full text-sm">
          {darkTheme ? "🌙" : "☀️"}
        </div>
      </div>
    </button>
  );
}