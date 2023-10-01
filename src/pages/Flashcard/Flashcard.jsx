import React, { useState, useEffect } from "react";
import About1 from "../../assets/About-1.png"

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
        <div className="slide-in-fwd-center flex flex-col justify-center items-center w-screen relative top-0 font-bold contain">
            <div className="font-Inter text-xs border-y-[4px] border-black lg:text-2xl tran bg-[#14AF6C] w-full text-left h-[300px] bg-left bg-no-repeat bg-contain p-4" style={{ backgroundImage: `url(${About1})` }}>

                <div className="text-4xl font-bold w-1/2 float-right">{flashcard.front}</div>
                <div className="text-2xl mt-4 w-1/2 float-righ">{secondsRemaining} seconds remaining</div>

            </div>
        </div>
    );
};

export default Flashcard;