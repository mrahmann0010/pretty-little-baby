import { motion } from "framer-motion";

const ScrollHint = ({ direction = "up" }) => {
  return (
    <motion.div
      className="flex flex-col items-center mt-6 mb-4"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      {direction === "up" ? (
        <>
          <span className="text-white font-semibold text-sm">Scroll Up For Next Page</span>
          <div className="w-3 h-3 border-b-2 border-r-2 border-white transform rotate-45 mt-1"></div>
        </>
      ) : (
        <>
          <span className="text-white font-semibold text-sm">Scroll Down</span>
          <div className="w-3 h-3 border-t-2 border-l-2 border-white transform rotate-45 mt-1"></div>
        </>
      )}
    </motion.div>
  );
};

export default ScrollHint;
