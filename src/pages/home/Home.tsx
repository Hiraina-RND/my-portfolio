import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";

function Home() {
    return (
        <main className="min-h-screen bg-[var(--gray-primary)] flex justify-center">
            <div
                className="
                    w-full max-w-4xl
                    min-h-screen
                    bg-white
                    bg-[linear-gradient(var(--gray-primary)_2px,transparent_2px),linear-gradient(90deg,var(--gray-primary)_2px,transparent_2px)]
                    bg-[length:30px_30px]
                    p-6
                    flex flex-col gap-14
                    pb-24
                    "
            >
                <HeroSection />
                <AboutSection />
            </div>
        </main>
    );
}

export default Home;