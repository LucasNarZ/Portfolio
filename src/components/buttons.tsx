export function ShowProjectButton(){
    return (
        <button className="h-9 relative overflow-hidden group px-6 py-2 rounded-xl font-semibold text-white bg-black/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 active:scale-95 cursor-pointe">
            <span className="relative z-10">See Project</span>

            <span className="absolute -left-4/5 -top-[50%] w-4/5 h-[200%] bg-gradient-to-r from-white/10 via-white/30 to-white/10 rotate-45 group-hover:left-full transition-all duration-700 ease-in-out pointer-events-none"></span>

        </button>
    )
}

export function ShowProjectGithubButton(){
    return (
        <button className="h-9 relative overflow-hidden group px-6 rounded-xl font-semibold text-white bg-black/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 active:scale-95 cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
                {/* Ícone do GitHub inline SVG */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                aria-hidden="true"
                >
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.016c0 4.424 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.025a9.564 9.564 0 012.5-.336c.848.004 1.705.115 2.5.337 1.909-1.296 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.923.678 1.862 0 1.344-.012 2.428-.012 2.758 0 .268.18.58.688.48A10.018 10.018 0 0022 12.016C22 6.484 17.523 2 12 2z"
                    clipRule="evenodd"
                />
                </svg>
                See Project
            </span>

            <span className="absolute -left-4/5 -top-[50%] w-4/5 h-[200%] bg-gradient-to-r from-white/10 via-white/30 to-white/10 rotate-45 group-hover:left-full transition-all duration-700 ease-in-out pointer-events-none"></span>
        </button>

    )

}