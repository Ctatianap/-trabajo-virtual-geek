import React from "react";
import Keyboard from "./Keyboard";
import Configuration from "./Configuration";
import SoundMocks from "../utils/mocks/SoundMocks";

const Container = ({
  changePower,
  power,
  bank,
  changeBank,
  changeVolumen,
  volumen,
  text,
  changeText,
}) => {
  const playSound = (character) => {
    if (power === "On") {
      const audio = document.getElementById(character);
      audio.volume = volumen;
      audio.play();
      changeText(character);
    }
  };

  return (
    <div id="drum-machine" className="container row">
      <Keyboard
        playSound={playSound}
        bank={bank}
        text={text}
        changeText={changeText}
      />

      <Configuration
        bank={bank}
        changeBank={changeBank}
        power={power}
        changePower={changePower}
        volumen={volumen}
        changeVolumen={changeVolumen}
        text={text}
        changeText={changeText}
      />
    </div>
  );
};

export default Container;
