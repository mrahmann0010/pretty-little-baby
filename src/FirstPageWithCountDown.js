import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import CountDown from "./utils/CountDown";
import ScrollHint from "./utils/ScrollHint";

function FirstPageWithCountDown() {

    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    // Track window size for confetti
    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <section className="fixed w-screen min-h-screen overflow-hidden flex flex-col gap-4 items-center justify-center
         bg-gradient-to-br from-teal-200 via-purple-200 to-pink-300" 
        style={{ height: '100dvh' }}>



            {/* Confetti animation */}
            <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={200}   // Amount of confetti
                recycle={true}         // Keep flowing
                gravity={0.3}          // Confetti falling speed
                friction={0.99}        // Makes it slow down a bit
                colors={["#FF7F7F", "#FFD700", "#BA55D3", "#87CEFA", "#FF69B4"]}
            />


            <CountDown targetDate="2025-09-05T00:00:00" />
            <FirstPageBody />

            <ScrollHint />

        </section>
    )
}

export default FirstPageWithCountDown;

const FirstPageBody = () => {
    return (
        <div className="flex flex-col gap-1 items-center">
            <h2 className="text-xl font-medium text-gray-800">Remaining Till..</h2>
            <h1 className="text-3xl font-bold text-white">Baby's Birthday</h1>
        </div>
    )
}
