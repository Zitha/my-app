import React, { useState, useEffect } from "react"; 


const Flashcard = ({ flashcard }) => {
    const [secondsRemaining, setSecondsRemaining] = useState(flashcard.duration);

    useEffect(() => {
        if (secondsRemaining > 0) {
            const interval = setInterval(() => {
                setSecondsRemaining(secondsRemaining - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [secondsRemaining]);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-4xl font-bold">{flashcard.front}</div>
            <div className="text-2xl mt-4">{secondsRemaining} seconds remaining</div>
        </div>
    );
};

export default Flashcard;