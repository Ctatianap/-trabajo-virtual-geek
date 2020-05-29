import React, { useEffect } from "react";

function keyPressed(e, character, playSound) {
  playSound(e.key.toUpperCase());
}

const KeyIndividual = ({ character, playSound, url, text }) => {
  useEffect(() => {
    document.addEventListener("keypress", (e) =>
      keyPressed(e, character, playSound)
    );
  }, [character, playSound]);
  return (
    <div
      id={text}
      className="drum-pad col-3 m-2"
      onClick={() => playSound(character)}
    >
      {character}
      <audio id={character} className="clip" src={url}></audio>
    </div>
  );
};

export default KeyIndividual;
