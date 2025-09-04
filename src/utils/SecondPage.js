import { motion } from "framer-motion";
import ScrollHint from "./ScrollHint";
// import "./index.css"; // Make sure your fonts are imported here

const SecondPage = () => {
  return (
    <section
      className="w-full min-h-[100vh] relative flex flex-col justify-center items-center text-center p-6 overflow-hidden sm:hidden
                 bg-cover bg-center"
      style={{ backgroundImage: `url('/flowers.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-20 flex flex-col gap-4 items-center"
      >
        <h1 className="font-great-vibes text-4xl text-white drop-shadow-lg">
          Happy Birthday, Mawa! 🎉
        </h1>

        <p className="font-poppins text-lg text-white max-w-xs drop-shadow-md">
          "Wishing the happiest birthday to someone who’s not just beautiful on the outside, but brilliant on the inside too. Keep shining, inspiring, and making us all look up to you!"
        </p>

        <motion.div
          className="mt-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <button className="px-6 py-3 bg-pink-400/80 hover:bg-pink-500/90 text-white font-semibold rounded-xl shadow-lg">
            Make a Wish ✨
          </button>
        </motion.div>
      </motion.div>

      {/* Floating hearts */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-pink-300 rounded-full opacity-70"
            animate={{
              y: ["-10%", "110%"],
              x: [`${i * 10}%`, `${i * 15}%`],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          ></motion.div>
        ))}
      </div>

      <ScrollHint />
    </section>
  );
};

export default SecondPage;
