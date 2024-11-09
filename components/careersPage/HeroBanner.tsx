"use client"

export default function HeroBanner() {
    return (
        <section className="relative overflow-hidden h-screen flex justify-center items-center bg-[#00163D] text-white py-32 px-5 text-center">
            {/* Background Pattern and Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF914D] via-[#E35134] to-[#6F0A0D] opacity-70" />


            {/* Diagonal Divider */}
            <div className="absolute inset-0 h-1/2 bg-gradient-to-t from-[#00163D] to-transparent transform skew-y-3" />

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
                    Join Our Dynamic Team
                </h1>
                <p className="text-lg max-w-2xl mx-auto mb-8 drop-shadow-md">
                    Discover exciting career opportunities with us! We value creativity, collaboration, and growth.
                </p>
                <button
    onClick={() => {
        document.querySelector('#open-positions')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="bg-[#FF914D] text-white py-3 px-8 rounded-full font-semibold text-lg shadow-lg hover:bg-[#E35134] transition-all duration-300"
>
    Explore Open Positions
</button>
            </div>
        </section>
    );
}
