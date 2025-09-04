// // import { useState, useEffect } from "react";
// // import CountDownSec from "./FirstPageWithCountDown";
// // import SecondPage from "./utils/SecondPage";


// // function App() {



// //     const targetDate = new Date("2025-09-05T00:00:00"); // manually set the unlock date

// //     const [currentPage, setCurrentPage] = useState(0); // 0 = first page
// //     let scrollTimeout = null;

// //   const handleScroll = (e) => {
// //     // throttle scroll events
// //     if (scrollTimeout) return;
// //     scrollTimeout = setTimeout(() => {
// //       scrollTimeout = null;
// //     }, 800); // 800ms cooldown between page changes

// //     if (e.deltaY > 0) {
// //       // scroll down
// //       setCurrentPage((prev) => Math.min(prev + 1, 1));
// //     } else {
// //       // scroll up
// //       setCurrentPage((prev) => Math.max(prev - 1, 0));
// //     }
// //   };

// //   // For mobile: swipe detection
// //   useEffect(() => {
// //     let touchStartY = 0;

// //     const handleTouchStart = (e) => {
// //       touchStartY = e.touches[0].clientY;
// //     };

// //     const handleTouchEnd = (e) => {
// //       const touchEndY = e.changedTouches[0].clientY;
// //       const delta = touchStartY - touchEndY;

// //       if (Math.abs(delta) > 50) { // swipe threshold
// //         if (delta > 0) setCurrentPage(1); // swipe up
// //         else setCurrentPage(0); // swipe down
// //       }
// //     };

// //     window.addEventListener("touchstart", handleTouchStart);
// //     window.addEventListener("touchend", handleTouchEnd);

// //     return () => {
// //       window.removeEventListener("touchstart", handleTouchStart);
// //       window.removeEventListener("touchend", handleTouchEnd);
// //     };
// //   }, []);

// //   return (
// //     <main className="flex justify-center items-center h-screen"
// //      onWheel={handleScroll} >
      
// //       {currentPage === 0 && <CountDownSec />}
// //       {currentPage === 1 && <SecondPage />}

// //     </main>
// //   );
// // }


// // export default App;




// import { useState, useEffect } from "react";
// import CountDownSec from "./FirstPageWithCountDown";
// import SecondPage from "./utils/SecondPage";
// import ThirdPage from "./utils/ThirdPage";

// function App() {
//   const [currentPage, setCurrentPage] = useState(0); // 0 = first page

//   // const targetDate = new Date("2025-09-05T00:00:00"); // manually set the unlock date
//   const targetDate = new Date("2025-09-04T22:04:00"); // 4 Sep 2025, 10:04 PM

//   let scrollTimeout = null;

//   const handleScroll = (e) => {
//     if (scrollTimeout) return;
//     scrollTimeout = setTimeout(() => {
//       scrollTimeout = null;
//     }, 800);

//     const now = new Date();
//     const canGoNext = now >= targetDate; // simple check

//     if (e.deltaY > 0 && canGoNext) {
//       setCurrentPage(1); // scroll down
//     } else if (e.deltaY < 0) {
//       setCurrentPage(0); // scroll up
//     }
//   };

//   // Mobile swipe detection
//   useEffect(() => {
//     let touchStartY = 0;

//     const handleTouchStart = (e) => {
//       touchStartY = e.touches[0].clientY;
//     };

//     const handleTouchEnd = (e) => {
//       const touchEndY = e.changedTouches[0].clientY;
//       const delta = touchStartY - touchEndY;

//       const now = new Date();
//       const canGoNext = now >= targetDate; // manual check

//       if (Math.abs(delta) > 50) {
//         if (delta > 0 && canGoNext) setCurrentPage(1); // swipe up only if allowed
//         else setCurrentPage(0); // swipe down always allowed
//       }
//     };

//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchend", handleTouchEnd);

//     return () => {
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, []);

//   return (
//     <main
//       className="flex justify-center items-center h-screen"
//       onWheel={handleScroll}
//     >
//       {currentPage === 0 && <CountDownSec />}
//       {currentPage === 1 && <SecondPage />}
//       {currentPage === 2 && <ThirdPage />}
//     </main>
//   );
// }

// export default App;




// Third -- version

import { useState, useEffect } from "react";
import CountDownSec from "./FirstPageWithCountDown";
import SecondPage from "./utils/SecondPage";
import ThirdPage from "./utils/ThirdPage";

function App() {
  const [currentPage, setCurrentPage] = useState(0); // 0 = first page
  const targetDate = new Date("2025-09-04T22:04:00"); // unlock second page
  // const targetDate = new Date("2025-09-05T22:41:00");


  let scrollTimeout = null;

  const handleScroll = (e) => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      scrollTimeout = null;
    }, 800);

    const now = new Date();
    const canGoNext = now >= targetDate; // only for unlocking page 1

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
      const canGoNext = now >= targetDate;

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
