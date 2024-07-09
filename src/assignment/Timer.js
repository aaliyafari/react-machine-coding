import React, { useState,useEffect,useRef } from 'react'

const Timer = () => {
    const [isRunning,setIsRunning] = useState(false)
    const [elapsedTime,setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            
            intervalIdRef.current = setInterval(() => {
                console.log(intervalIdRef.current,"intervalId")
                setElapsedTime(Date.now() - startTimeRef.current);
                console.log("elapsedTime",elapsedTime)
            }, 10);
        }

        return () => {
            console.log(intervalIdRef.current,"clearing intervalId")
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);
    function timer(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }
    const startButton =()=>{
    setIsRunning(true)
    startTimeRef.current = Date.now() - elapsedTime;
    }
    const stopButton =()=>{
        setIsRunning(false)
    }
    const resetButton =()=>{
        setElapsedTime(0)
        setIsRunning(false)
    }
  return (

   <div className="stopwatch">
     <div className="display">{timer()}</div>
   <div className='controls'> 
   <button onClick={startButton} className="start-button">Start</button>
   <button onClick={stopButton} className="stop-button">Stop</button>
   <button onClick={resetButton} className="reset-button">Reset</button>
   </div>
   </div>
  )
}

export default Timer