import React from "react";
import Flashcard from "./Flashcard";

const flashcards = [
    {
        id: 1,
        front: "A warm wind which blows from interior of South Africa towards the east coast in winter is the?",
        back: "Paris",
        duration: 60,
    },
    {
        id: 2,
        front: "The wind which results from the balance between Corioli's Force and the Pressure Gradient Force is the?",
        back: "4",
        duration: 60,
    }, {
        id: 2,
        front: "An extended zone of High Pressure is known as a/an...?",
        back: "4",
        duration: 60,
    }, {
        id: 2,
        front: "Lines on a synoptic chart joining places of equal pressure are ...?",
        back: "4",
        duration: 60,
    }, {
        id: 2,
        front: "Rain that occurs when air rises and cools up the side of a mountain is?",
        back: "4",
        duration: 60,
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