import { Bike } from "lucide-react"
import { BiBasketball } from "react-icons/bi"
import { PiGameControllerFill } from "react-icons/pi"

function AboutSection() {
    return (
        <section
            className="
                bg-[var(--bg-black)]/65
                px-6 py-8
                text-[var(--text-white)]
                flex flex-col
                items-start
                gap-7
            "
        >
            <h2
                className="
                    text-[length:var(--h2-text)]
                    font-semibold
                "
            >
                About Me
            </h2>

            <div className="flex flex-col gap-5">
                <p className="opacity-70 leading-relaxed">
                    Computer science student currently seeking an internship or apprenticeship
                    in software development, with a strong focus on backend development using

                    <span className="
                        inline-flex items-center gap-1 px-2 mx-2 align-middle
                        bg-[var(--mini-bg-black)]
                    "
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                            className="w-5 h-5"
                        />
                        <span>Spring Boot</span>
                    </span>

                    and

                    <span className="
                        inline-flex items-center gap-1 px-2 mx-2 align-middle
                        bg-[var(--mini-bg-black)]
                    "
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                            className="w-4 h-4"
                        />
                        <span>PostgreSQL.</span>
                    </span>

                    Also interested in frontend development with

                    <span className="
                        inline-flex items-center gap-1 px-2 mx-2 align-middle
                        bg-[var(--mini-bg-black)]
                    "
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                            className="w-5 h-5"
                        />
                        <span>React</span>
                    </span>

                    and

                    <span className="
                        inline-flex items-center gap-1 px-2 mx-2 align-middle
                        bg-[var(--mini-bg-black)]
                    "
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                            className="w-5 h-5"
                        />
                        <span>React Admin</span>
                    </span>

                    especially for building clean and functional interfaces.
                </p>

                <div className="flex flex-row">

                </div>

                <div className="
                        text-sm text-[var(--text-white)]
                        flex flex-col gap-2
                        "
                >
                    <span className="font-bold">
                        When not coding:
                    </span>
                    <ul className="pl-6 list-disc">
                        <li>
                            <div className="flex items-center gap-1">
                                <em>basketball</em>
                                <BiBasketball />
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-1">
                                <em>motorcycle rides</em>
                                <Bike />
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-1">
                                <em>gaming</em>
                                <PiGameControllerFill />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="
                    text-sm text-[--text-white]
                    flex items-center gap-1
                    text-nowrap
                "
                >
                    <span className="font-bold">Location: </span>
                    <span className="opacity-70">Antananarivo, Madagascar</span>
                    <img
                        src="https://flagcdn.com/w40/mg.png"
                        alt="Madagascar flag"
                        className="w-6 h-4"
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutSection