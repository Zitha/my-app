import React from "react";

const NotesTakerEditor = ({ notes, onNotesChange }) => {
    return (
        <textarea
            className="w-full h-48 resize-none"
            value={notes}
            onChange={onNotesChange}
        />
    );
};

export default NotesTakerEditor;