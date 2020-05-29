import React from "react";
import KeyIndividual from "./KeyIndividual";
import SoundMocks from "../utils/mocks/SoundMocks";

const Keyboard = ({ playSound, bank }) => {
  console.log("bank: ", bank);
  return (
    <div className="container col-lg-8 col-12">
      <div className="row">
        <KeyIndividual
          character="Q"
          playSound={playSound}
          url={SoundMocks[bank].q}
          text={SoundMocks[bank].Q}
        />
        <KeyIndividual
          character="W"
          playSound={playSound}
          url={SoundMocks[bank].w}
          text={SoundMocks[bank].W}
        />
        <KeyIndividual
          character="E"
          playSound={playSound}
          url={SoundMocks[bank].e}
          text={SoundMocks[bank].E}
        />
      </div>
      <div className="row">
        <KeyIndividual
          character="A"
          playSound={playSound}
          url={SoundMocks[bank].a}
          text={SoundMocks[bank].A}
        />
        <KeyIndividual
          character="S"
          playSound={playSound}
          url={SoundMocks[bank].s}
          text={SoundMocks[bank].S}
        />
        <KeyIndividual
          character="D"
          playSound={playSound}
          url={SoundMocks[bank].d}
          text={SoundMocks[bank].D}
        />
      </div>
      <div className="row">
        <KeyIndividual
          character="Z"
          playSound={playSound}
          url={SoundMocks[bank].z}
          text={SoundMocks[bank].Z}
        />
        <KeyIndividual
          character="X"
          playSound={playSound}
          url={SoundMocks[bank].x}
          text={SoundMocks[bank].X}
        />
        <KeyIndividual
          character="C"
          playSound={playSound}
          url={SoundMocks[bank].c}
          text={SoundMocks[bank].C}
        />
      </div>
    </div>
  );
};

export default Keyboard;
