import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Home, FolderCheck } from "lucide-react";
import { NavLink } from "react-router-dom"

import DotSeparator from "../components/layouts/DotSeparator";

function Navbar() {
    return (
        <nav
            className="
                z-50
                fixed bottom-0 left-0
                w-full
                flex items-center justify-center gap-7
                border-t border-[var(--gray-secondary)]
                bg-white/80 backdrop-blur-md
                p-3 shadow-xl

                max-[400px]:gap-6

                md:bottom-3
                md:left-1/2
                md:-translate-x-1/2
                md:w-auto
                md:gap-6
                md:border-1
                md:border-[var(--gray-secondary)]
                md:rounded-xl
                md:px-6
            "
        >
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `relative p-1 ${isActive ?
                        "after:content-[''] after:absolute after:-bottom-2 after:left-1/2\
                        after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-black" : ""}`
                }
            >
                <Home size={32} />
            </NavLink>

            <NavLink
                to="/projects"
                className={({ isActive }) =>
                    `relative p-1 ${isActive ?
                        "after:content-[''] after:absolute after:-bottom-2 after:left-1/2\
                        after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-black" : ""}`
                }
            >
                <FolderCheck size={32} />
            </NavLink>

            <div className="hidden md:block">
                <DotSeparator />
            </div>

            <a
                href="https://github.com/Hiraina-RND"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub size={32} />
            </a>

            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedinIn size={32} />
            </a>

            <div className="hidden md:block">
                <DotSeparator />
            </div>

            <a
                href="mailto:hei.hiraina@gmail.com"
                className="
                    text-sm md:text-lg
                    text-white bg-black
                    font-semibold
                    py-2 px-3
                    rounded-lg
                "
            >
                Contact
            </a>
        </nav>
    );
}

export default Navbar;