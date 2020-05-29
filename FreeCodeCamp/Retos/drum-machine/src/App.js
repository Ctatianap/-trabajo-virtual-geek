import React, { useState } from "react";
import SoundMocks from "./utils/mocks/SoundMocks";
import Container from "./components/Container";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [power, setPower] = useState("On");
  const [bank, setBank] = useState("Piano");
  const [volumen, setVolumen] = useState(0.5);
  const [text, setText] = useState("Volumen");

  function togglePower() {
    if (power === "On") {
      setPower("Off");
    } else {
      setPower("On");
    }
  }
  function toggleBank() {
    if (bank === "Piano") {
      setBank("HeaterKit");
    } else {
      setBank("Piano");
    }
  }
  function changeVolumen(newVolumen) {
    setVolumen(newVolumen);
  }
  function changeText(character) {
    setText(SoundMocks[bank][character.toUpperCase()]);
  }
  return (
    <div className="App">
      <Container
        bank={bank}
        power={power}
        changePower={togglePower}
        changeBank={toggleBank}
        changeVolumen={changeVolumen}
        volumen={volumen}
        text={text}
        changeText={changeText}
      />
    </div>
  );
};

export default App;
