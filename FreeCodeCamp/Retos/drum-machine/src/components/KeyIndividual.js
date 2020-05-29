import React, { useEffect } from "react";

const keyCodObj = {
  q: 113,
  w: 119,
  e: 101,
  a: 97,
  d: 115,
  z: 122,
  x: 120,
  c: 99,
};
function keyPressed(e, character, playSound) {
  if (e.keyCode === keyCodObj[character.toLowerCase()]) {
    playSound(character);
  }
}

const KeyIndividual = ({ character, playSound, url }) => {
  useEffect(() => {
    document.addEventListener("keypress", (e) =>
      keyPressed(e, character, playSound)
    );
  }, [character, playSound]);
  return (
    <div
      id={character}
      className="drum-pad col-3 m-2"
      onClick={() => playSound(character)}
    >
      {character}
      <audio id={character} className="clip" src="/"></audio>
    </div>
  );
};

export default KeyIndividual;
