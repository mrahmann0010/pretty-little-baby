import { useState, useEffect } from "react";
import CountDownSec from "./FirstPageWithCountDown";
import SecondPage from "./utils/SecondPage";
import ThirdPage from "./utils/ThirdPage";

function App() {
  const [currentPage, setCurrentPage] = useState(0); // 0 = first page
  const unlockDate = new Date("2025-09-05T22:41:00"); // unlock second page

  let scrollTimeout = null;

  const handleScroll = (e) => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      scrollTimeout = null;
    }, 800);

    const now = new Date();
    const canGoNext = now >= unlockDate; // only for unlocking page 1

    if (e.deltaY > 0) {
      // scroll down
      setCurrentPage((prev) => {
        if (prev === 0 && !canGoNext) return 0; // can't go to page 1 yet
        return Math.min(prev + 1, 2); // max 2 pages
      });
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

      const now = new Date();
      const canGoNext = now >= unlockDate;

      if (Math.abs(delta) > 50) {
        if (delta > 0) {
          // swipe up
          setCurrentPage((prev) => {
            if (prev === 0 && !canGoNext) return 0; // can't go to page 1 yet
            return Math.min(prev + 1, 2);
          });
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

