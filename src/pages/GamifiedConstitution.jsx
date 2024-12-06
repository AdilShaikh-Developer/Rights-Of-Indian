import React from "react";

import "../stylesheets/gamified-constitution.css";

const GamifiedConstitution = () => {
  const handleFlashCardClick = (e) => {
    e.currentTarget.classList.toggle("unflipped");
    e.currentTarget.classList.toggle("flipped");
  };
  return (
    <div className="gamified-constitution-page">
      <h2>Flashcard Flip</h2>
      <p>Click a card to flip and learn an article!</p>
      <div className="flashcard-container">
        <div
          className="flashcard unflipped"
          onClick={handleFlashCardClick}
        ></div>
        <div
          className="flashcard unflipped"
          onClick={handleFlashCardClick}
        ></div>
        <div
          className="flashcard unflipped"
          onClick={handleFlashCardClick}
        ></div>
        <div
          className="flashcard unflipped"
          onClick={handleFlashCardClick}
        ></div>
      </div>
    </div>
  );
};

export default GamifiedConstitution;
