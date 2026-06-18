import HeroSection from "./sections/HeroSection";

function Home() {
    return (
        <main className="min-h-screen bg-[var(--gray-primary)] flex justify-center">
            <div
                className="
                    w-full max-w-3xl
                    min-h-screen
                    bg-white
                    bg-[linear-gradient(var(--gray-primary)_2px,transparent_2px),linear-gradient(90deg,var(--gray-primary)_2px,transparent_2px)]
                    bg-[length:30px_30px]
                    p-8                    
                    "
            >
                <HeroSection />
            </div>
        </main>
    );
}

export default Home;