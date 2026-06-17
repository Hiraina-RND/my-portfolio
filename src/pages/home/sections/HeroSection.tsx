import profil from '../../../assets/images/profil.png'

function HeroSection() {
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
                <h1 className="text-4xl font-semibold">Hello, I'm Hiraina.</h1>
                <h2 className="text-2xl text-[var(--text-gray)]">JAVA Full-stack developer
                    <br />
                    <em>(Spring boot & React / React Admin)</em>
                </h2>
                <p className='text-lg'>
                    Crafting robust back-end systems and clean web experiences,
                    <br />
                    Back-end first, user experience always in mind.
                </p>
            </div>
        </section>
    )
}

export default HeroSection;