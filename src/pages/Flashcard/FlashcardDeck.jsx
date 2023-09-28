import React from "react";
import Flashcard from "./Flashcard";

const flashcards = [
    {
        id: 1,
        front: "What is the capital of France?",
        back: "Paris",
        duration: 30,
    },
    {
        id: 2,
        front: "What is the square root of 16?",
        back: "4",
        duration: 15,
    },
];

const FlashcardDeck = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            {flashcards.map((flashcard) => (
                <Flashcard key={flashcard.id} flashcard={flashcard} />
            ))}
        </div>
    );
};

export default FlashcardDeck;