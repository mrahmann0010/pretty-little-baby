



// // import { useState, useEffect, useRef } from "react";
// // import { motion } from "framer-motion";
// // import confetti from "canvas-confetti";

// // const ThirdPage = () => {
// //   const [celebrate, setCelebrate] = useState(false);
// //   const canvasRef = useRef(null);

// //   const handleCelebrate = () => {
// //     setCelebrate(true);
// //   };

// //   useEffect(() => {
// //     let animationInterval;
// //     if (celebrate) {
// //       animationInterval = setInterval(() => {
// //         confetti({
// //           particleCount: 5,
// //           startVelocity: 30,
// //           spread: 360,
// //           origin: {
// //             x: Math.random(),
// //             y: Math.random() * 0.5
// //           },
// //           colors: ["#FF5E5E", "#FFD700", "#BA55D3", "#87CEFA", "#FF69B4"]
// //         });
// //       }, 250);
// //     }

// //     return () => clearInterval(animationInterval);
// //   }, [celebrate]);

// //   return (
// //     <section
// //       className="w-full min-h-[100vh] relative flex flex-col justify-center items-center text-center p-6 overflow-hidden sm:hidden bg-white"
// //     >
// //       {/* Fireworks Canvas */}
// //       <canvas ref={canvasRef} className="absolute inset-0 z-20 pointer-events-none"></canvas>

// //       {/* Background Dim */}
// //       {celebrate && <div className="absolute inset-0 bg-black/60 z-10"></div>}

// //       {/* Content */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1.2 }}
// //         className="relative z-30 flex flex-col gap-6 items-center"
// //       >
// //         {/* Collage Image */}
// //         <motion.img
// //           src="/photo-collage.png"
// //           alt="Birthday Collage"
// //           className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-2xl shadow-2xl border-4 border-pink-200"
// //           animate={{ scale: celebrate ? 1.05 : [1, 1.03, 1] }}
// //           transition={{ repeat: celebrate ? 0 : Infinity, duration: 4, ease: "easeInOut" }}
// //         />

// //         {/* Paragraph */}
// //         <div className="max-w-xs text-center font-poppins text-gray-800">
// //           <p className="text-lg mb-2">
// //             Happy Birthday, Mawa! 🎉 You light up every room with your beauty and brains.
// //           </p>
// //           <p className="text-base text-gray-600">
// //             Your smile inspires, your laughter uplifts, and your kindness touches hearts. 
// //             May this year bring you endless joy, magical moments, and all the love you deserve! 💖
// //           </p>
// //         </div>

// //         {/* Celebrate Button */}
// //         {!celebrate && (
// //           <motion.div
// //             animate={{ scale: [1, 1.05, 1] }}
// //             transition={{ repeat: Infinity, duration: 2 }}
// //             className="mt-4"
// //           >
// //             <button
// //               onClick={handleCelebrate}
// //               className="px-6 py-3 bg-pink-400/80 hover:bg-pink-500/90 text-white font-semibold rounded-xl shadow-lg"
// //             >
// //               Celebrate 🎆
// //             </button>
// //           </motion.div>
// //         )}
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default ThirdPage;


// import { useState } from "react";
// import { motion } from "framer-motion";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const ThirdPage = () => {
//   const [celebrate, setCelebrate] = useState(false);

//   // Load tsparticles full features
//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   return (
//     <section
//       className="w-full min-h-[100vh] relative flex flex-col justify-center items-center text-center p-6 overflow-hidden sm:hidden bg-white"
//     >
//       {/* Fireworks Particles */}
//       {celebrate && (
//         <Particles
//           id="tsparticles"
//           init={particlesInit}
//           options={{
//             fullScreen: { enable: true, zIndex: 20 },
//             particles: {
//               number: { value: 0 },
//               color: { value: ["#FF5E5E", "#FFD700", "#BA55D3", "#87CEFA", "#FF69B4"] },
//               shape: { type: "circle" },
//               size: { value: { min: 2, max: 4 } },
//               move: {
//                 enable: true,
//                 gravity: { enable: true, acceleration: 9.81 },
//                 speed: { min: 10, max: 20 },
//                 decay: 0.05,
//                 direction: "none",
//                 outModes: "destroy",
//               },
//             },
//             emitters: [
//               {
//                 direction: "top",
//                 life: { count: 0, duration: 0.1, delay: 0 },
//                 rate: { delay: 0.1, quantity: 30 },
//                 size: { width: 0, height: 0 },
//                 position: { x: 50, y: 50 }, // center of screen
//               },
//             ],
//           }}
//         />
//       )}

//       {/* Background Dim */}
//       {celebrate && <div className="absolute inset-0 bg-black/60 z-10"></div>}

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//         className="relative z-30 flex flex-col gap-6 items-center"
//       >
//         {/* Collage Image */}
//         <motion.img
//           src="/photo-collage.png"
//           alt="Birthday Collage"
//           className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-2xl shadow-2xl border-4 border-pink-200"
//           animate={{ scale: celebrate ? 1.05 : [1, 1.03, 1] }}
//           transition={{ repeat: celebrate ? 0 : Infinity, duration: 4, ease: "easeInOut" }}
//         />

//         {/* Paragraph */}
//         <div className="max-w-xs text-center font-poppins text-gray-800">
//           <p className="text-lg mb-2">
//             Happy Birthday, Mawa! 🎉 You light up every room with your beauty and brains.
//           </p>
//           <p className="text-base text-gray-600">
//             Your smile inspires, your laughter uplifts, and your kindness touches hearts. 
//             May this year bring you endless joy, magical moments, and all the love you deserve! 💖
//           </p>
//         </div>

//         {/* Celebrate Button */}
//         {!celebrate && (
//           <motion.div
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="mt-4"
//           >
//             <button
//               onClick={() => setCelebrate(true)}
//               className="px-6 py-3 bg-pink-400/80 hover:bg-pink-500/90 text-white font-semibold rounded-xl shadow-lg"
//             >
//               Celebrate 🎆
//             </button>
//           </motion.div>
//         )}
//       </motion.div>
//     </section>
//   );
// };

// export default ThirdPage;



import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const ThirdPage = () => {
  const [celebrate, setCelebrate] = useState(false);
  const canvasRef = useRef(null);

  const handleCelebrate = () => setCelebrate(true);

  useEffect(() => {
    let interval;
    if (celebrate) {
      interval = setInterval(() => {
        confetti({
          particleCount: 30,
          spread: 120,
          origin: { x: 0.5, y: 0.5 },
          gravity: 1,
          ticks: 200,
          colors: ["#FF5E5E", "#FFD700", "#BA55D3", "#87CEFA", "#FF69B4"]
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [celebrate]);

  return (
    <section className="w-full min-h-[100vh] relative flex flex-col justify-center items-center text-center p-6 overflow-hidden sm:hidden bg-white">
      
      {/* Background dim */}
      {celebrate && <div className="absolute inset-0 bg-black/60 z-10"></div>}

      {/* Collage + Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-20 flex flex-col items-center gap-6"
      >
        <motion.img
          src="/photo-collage.png"
          alt="Birthday Collage"
          className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-2xl shadow-2xl border-4 border-pink-200"
          animate={{ scale: celebrate ? 1.05 : [1, 1.03, 1] }}
          transition={{ repeat: celebrate ? 0 : Infinity, duration: 4, ease: "easeInOut" }}
        />

        <div className="max-w-xs text-center font-poppins text-gray-800">
          <p className="text-lg mb-2">
            Again, Happy Birthday, Mawa! 🎉 You light up every room with your beauty and brains.
          </p>
          <p className="text-base text-gray-600">
            Your smile inspires, your laughter uplifts, and your kindness touches hearts. 
            May this year bring you endless joy, magical moments, and all the love you deserve! 💖
          </p>
        </div>

        {!celebrate && (
          <motion.button
            onClick={handleCelebrate}
            className="px-6 py-3 mt-4 bg-pink-400/80 hover:bg-pink-500/90 text-white font-semibold rounded-xl shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Celebrate 🎆
          </motion.button>
        )}
      </motion.div>
    </section>
  );
};

export default ThirdPage;
