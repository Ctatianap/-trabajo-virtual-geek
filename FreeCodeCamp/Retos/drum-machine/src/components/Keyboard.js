import React from "react";
import KeyIndividual from "./KeyIndividual";

const Keyboard = ({ playSound, bank }) => {
  return (
    <div className="container col-lg-8 col-12">
      <div className="row">
        <KeyIndividual character="Q" playSound={playSound} />
        <KeyIndividual character="W" playSound={playSound} />
        <KeyIndividual character="E" playSound={playSound} />
      </div>
      <div className="row">
        <KeyIndividual character="A" playSound={playSound} />
        <KeyIndividual character="S" playSound={playSound} />
        <KeyIndividual character="D" playSound={playSound} />
      </div>
      <div className="row">
        <KeyIndividual character="Z" playSound={playSound} />
        <KeyIndividual character="X" playSound={playSound} />
        <KeyIndividual character="C" playSound={playSound} />
      </div>
    </div>
  );
};

export default Keyboard;
