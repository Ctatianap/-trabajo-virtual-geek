import React from "react";

const Configuration = ({
  changePower,
  power,
  changeBank,
  bank,
  volumen,
  changeVolumen,
  text,
  changeText,
}) => {
  const bankClasstoUse = bank === "Piano" ? "inner" : "inner2";
  const powerClasstoUse = power === "Off" ? "inner" : "inner2";

  return (
    <div id="display" className="col-lg-4 col-12">
      <div className="selector" onClick={changePower}>
        <div className={powerClasstoUse}></div>
      </div>
      <p className="text-center">Power</p>
      <div id="changeText" className="changeText text-center">
        {text}
      </div>
      <input
        id="input"
        type="range"
        step="0.01"
        min="0"
        max="1"
        value={volumen}
        onChange={(e) => changeVolumen(e.target.value)}
      />
      <div className="selector" onClick={changeBank}>
        <div className={bankClasstoUse}></div>
      </div>
      <p className="text-center">Bank</p>
    </div>
  );
};

export default Configuration;
