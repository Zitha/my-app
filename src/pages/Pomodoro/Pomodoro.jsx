import React, { useState, useEffect } from "react";

const Pomodoro = () => {
    const [minutesRemaining, setMinutesRemaining] = useState(25);
    const [secondsRemaining, setSecondsRemaining] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        if (isTimerRunning) {
            const interval = setInterval(() => {
                if (secondsRemaining === 0) {
                    setMinutesRemaining(minutesRemaining - 1);
                    setSecondsRemaining(59);
                } else {
                    setSecondsRemaining(secondsRemaining - 1);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isTimerRunning, minutesRemaining, secondsRemaining]);

    const handleStartTimer = () => {
        setIsTimerRunning(true);
    };

    const handleStopTimer = () => {
        setIsTimerRunning(false);
    };

    return (
        <div className="slide-in-fwd-center flex flex-col justify-center items-center gap-3 w-screen h-auto p-2 lg:bg-white bg-[#88CFE8]">
            <div className="flex flex-row items-center mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Pomodoro
                </h2>
            </div>
            <div className="text-4xl font-bold sm:mx-auto sm:w-full sm:max-w-md">
                {minutesRemaining}:{secondsRemaining.toString().padStart(2, "0")}
            </div>
            <div className="text-4xl sm:mx-auto sm:w-full sm:max-w-md">
                {isTimerRunning ? "Timer running..." : "Timer stopped."}
            </div>
            <div className="flex flex-row items-center mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleStartTimer}
                >
                    Start Timer
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                    onClick={handleStopTimer}
                >
                    Stop Timer
                </button>
            </div>
        </div>
    );
};

export default Pomodoro;