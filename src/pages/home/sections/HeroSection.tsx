import { ArrowRight, Mail, TextCursor } from 'lucide-react';
import profil from '../../../assets/images/profil.png'
import useTypeWriter from '../../../hooks/UseTypeWriter';
import { Link } from 'react-router-dom';

function HeroSection() {
    const typed = useTypeWriter(["I'm Hiraina.", "You can call me Dahira."], 150, 1500)

    return (
        <section>
            <div className="flex flex-col items-start gap-6">
                <img
                    src={profil}
                    alt=""
                    className='
                        w-[150px] h-[150px]
                        rounded-full
                        border-4 border-[var(--gray-primary)]

                        md:w-[20%] md:h-[20%]
                    '
                />
                <h1 className="text-3xl md:text-4xl font-semibold">
                    Hello . . .
                    <br />
                    {typed}
                    <TextCursor className='inline animate-pulse'/>
                </h1>
                <h2 className="text-2xl text-[var(--text-gray)]">
                    JAVA Full-stack developer
                    <br />
                    <em>(Spring boot & React / React Admin)</em>
                </h2>
                <p className='text-lg'>
                    Crafting robust back-end systems and clean web experiences,
                    <br />
                    Back-end first, user experience always in mind.
                </p>
                <div className="flex items-center gap-4 mt-2">
                    <Link
                        to="/projects"
                        className="flex items-center gap-2 px-5 py-2.5 bg-[var(--gray-primary)] text-[var(--bg)] text-sm font-medium hover:opacity-80"
                    >
                        My work
                        <ArrowRight size={15} />
                    </Link>

                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium duration-400 hover:bg-[var(--gray-primary)]"
                    >
                        <Mail size={15} />
                        Contact
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;