export default function TicketStatsBanner({
    inProgress = 0,
    resolved = 0,
}) {
    return (
        <section className="w-full px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                <div
                    className="relative overflow-hidden rounded-xl p-16 text-white
             bg-gradient-to-r from-[#5B2BE0] to-[#9B5CFF]"
                >
                    {/* Left PNG */}
                    <img
                        src="/images/vector1.png"
                        alt=""
                        className="absolute left-0 top-0 h-full opacity-20 pointer-events-none"
                    />

                    {/* Right PNG */}
                    <img
                        src="/images/vector1.png"
                        alt=""
                        className="absolute right-0 top-0 h-full opacity-20 pointer-events-none scale-x-[-1]"
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center">
                        <h3 className="text-lg font-medium mb-4 tracking-wide">
                            In-Progress
                        </h3>
                        <p className="text-5xl font-semibold">
                            {inProgress}
                        </p>
                    </div>
                </div>

                <div
                    className="relative overflow-hidden rounded-xl p-16 text-white bg-gradient-to-r from-[#38B86D] to-[#0F9B8E]"
                >
                    {/* Left PNG */}
                    <img
                        src="/images/vector1.png"
                        alt=""
                        className="absolute left-0 top-0 h-full opacity-20 pointer-events-none"
                    />

                    {/* Right PNG */}
                    <img
                        src="/images/vector1.png"
                        alt=""
                        className="absolute right-0 top-0 h-full opacity-20 pointer-events-none scale-x-[-1]"
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center">
                        <h3 className="text-lg font-medium mb-4 tracking-wide">
                            Resolved
                        </h3>
                        <p className="text-5xl font-semibold">
                            {resolved}
                        </p>
                    </div>
                </div>



            </div>
        </section>
    );
}