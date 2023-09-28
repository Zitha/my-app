import React, { useState, useEffect } from "react"; 
import NotesTakerEditor from './NotesTakerEditor';

const NotesTaker = () => {
    const [secondsRemaining, setSecondsRemaining] = useState(600);
    const [notes, setNotes] = useState("");

    useEffect(() => {
        if (secondsRemaining > 0) {
            const interval = setInterval(() => {
                setSecondsRemaining(secondsRemaining - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [secondsRemaining]);

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <NotesTakerEditor notes={notes} onNotesChange={handleNotesChange} />
        </div>
    );
};

export default NotesTaker;