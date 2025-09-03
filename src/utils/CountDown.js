import { useEffect, useState } from "react"

function CountDown({targetDate}) {

    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

    useEffect(()=>{
        const timer = setInterval(()=> {
            setTimeLeft(getTimeRemaining(targetDate));
        },1000);

        return ()=> clearInterval(timer);
    },[targetDate]);

    return (
        <CountDown days={timeLeft.days} hours={timeLeft.hours} minutes={timeLeft.hours} seconds ={timeLeft.seconds}
        />
    )
}

export default CountDown;

function getTimeRemaining(targetDate) {
    const total = Date.parse(targetDate) - Date.now();
    const seconds = Math.floor((total/1000)%60);
    const minutes = Math.floor((total/1000/60)%60);
    const hours = Math.floor((total/(1000*60*60))%60);
    const days = Math.floor(total/(1000*60*60*24));
    return {total, seconds, minutes, hours, days};
}
