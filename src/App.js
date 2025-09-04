import { useState, useEffect } from "react";
import CountDownSec from "./FirstPageWithCountDown";
import SecondPage from "./utils/SecondPage";
import ThirdPage from "./utils/ThirdPage";

function App() {
  const [currentPage, setCurrentPage] = useState(0); // 0 = first page
  let scrollTimeout = null;

  // Handle scroll
  const handleScroll = (e) => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      scrollTimeout = null;
    }, 800);

    if (e.deltaY > 0) {
      // scroll down
      setCurrentPage((prev) => Math.min(prev + 1, 2)); // max 2
    } else if (e.deltaY < 0) {
      // scroll up
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }
  };

  // Mobile swipe detection
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const delta = touchStartY - touchEndY;

      if (Math.abs(delta) > 50) {
        if (delta > 0) {
          // swipe up
          setCurrentPage((prev) => Math.min(prev + 1, 2));
        } else {
          // swipe down
          setCurrentPage((prev) => Math.max(prev - 1, 0));
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <main
      className="flex justify-center items-center h-screen"
      onWheel={handleScroll}
    >
      {currentPage === 0 && <CountDownSec />}
      {currentPage === 1 && <SecondPage />}
      {currentPage === 2 && <ThirdPage />}
    </main>
  );
}

export default App;