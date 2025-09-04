// import { useEffect, useState } from "react"

// function getTimeRemaining(targetDate) {
//   const total = Date.parse(targetDate) - Date.now();
//   const seconds = Math.floor((total / 1000) % 60);
//   const minutes = Math.floor((total / 1000 / 60) % 60);
//   const hours = Math.floor((total / (1000 * 60 * 60)) % 24); // ✅ FIXED
//   const days = Math.floor(total / (1000 * 60 * 60 * 24));
//   return { total, seconds, minutes, hours, days };
// }


// function CountDown({targetDate}) {

//     const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

//     useEffect(()=>{
//         const timer = setInterval(()=> {
//             setTimeLeft(getTimeRemaining(targetDate));
//         },1000);

//         return ()=> clearInterval(timer);
//     },[targetDate]);

//     if( timeLeft.total <=0) {
//         return <p className="text-center text-xl">Time's up</p>
//     }

//     return (
//         <div className="flex gap-2">
//             <TimeBox label="days" value={timeLeft.days} />
//             <TimeBox label="hours" value={timeLeft.hours} />
//             <TimeBox label="min" value={timeLeft.minutes} />
//             <TimeBox label="sec" value={timeLeft.seconds} />
//         </div>
//     )
// }

// export default CountDown;

// function TimeBox({ label, value }) {
//   return (
//     <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//       <span className="countdown font-mono text-5xl">
//         <span style={{ "--value": value }}></span>
//       </span>
//       {label}
//     </div>
//   );
// }




import { useState, useEffect } from "react";

function CountDown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const getTimeRemaining = (targetDate) => {
      const total = Date.parse(targetDate) - Date.now();
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      return { total, seconds, minutes, hours, days };
    };

    setTimeLeft(getTimeRemaining(targetDate)); // initialize

    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null; // render nothing on server

  if (timeLeft.total <= 0) {
    return <p className="text-center text-xl">Time's up</p>;
  }

  return (
    <div className="flex gap-2">
      <TimeBox label="days" value={timeLeft.days} />
      <TimeBox label="hours" value={timeLeft.hours} />
      <TimeBox label="min" value={timeLeft.minutes} />
      <TimeBox label="sec" value={timeLeft.seconds} />
    </div>
  );
}

export default CountDown;

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": value }}>{value}</span>
      </span>
      {label}
    </div>
  );
}
