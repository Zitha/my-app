import React, { useState, useEffect } from "react";

const NotesTakerEditor = ({ notes, onNotesChange }) => {

    const colorTheme = ["#F7CE21", "#14AF6C", "#104FC1", "#F9851C", "#CFB5E2", "#FFC0C0"]
    const [currentColor, setCurrentColor] = useState("#14AF6C")
    const [arrowClicked, setArrowClicked] = useState(0)
    //const { setData, data } = useData()
    const [body, setBody] = useState("")
    const [title, setTitle] = useState("")
    //let notes = data

    return (
        <div
            className="z-10 absolute top-4 p-4 left-1/2 transform -translate-x-1/2 rounded-lg border-[5px] border-black w-full sm:w-[350px] h-[300px]"
            style={{ display: 'block', backgroundColor: currentColor }}
        >
            <textarea
                style={{ resize: 'none' }}
                name="body"
                className="w-full h-full font-Inter outline-none"
                value={notes}
                onChange={onNotesChange}
            />
        </div>
    );
};

export default NotesTakerEditor;