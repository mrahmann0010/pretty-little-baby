import { useState, useEffect } from "react";
import CountDownSec from "./FirstPageWithCountDown";
import SecondPage from "./utils/SecondPage";


function App() {


    const [currentPage, setCurrentPage] = useState(0); // 0 = first page

  let scrollTimeout = null;

  const handleScroll = (e) => {
    // throttle scroll events
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      scrollTimeout = null;
    }, 800); // 800ms cooldown between page changes

    if (e.deltaY > 0) {
      // scroll down
      setCurrentPage((prev) => Math.min(prev + 1, 1));
    } else {
      // scroll up
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }
  };

  // For mobile: swipe detection
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const delta = touchStartY - touchEndY;

      if (Math.abs(delta) > 50) { // swipe threshold
        if (delta > 0) setCurrentPage(1); // swipe up
        else setCurrentPage(0); // swipe down
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
    <main className="flex justify-center items-center h-screen"
     onWheel={handleScroll} >
      
      {currentPage === 0 && <CountDownSec />}
      {currentPage === 1 && <SecondPage />}

    </main>
  );
}


export default App;
