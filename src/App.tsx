import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const FAN_PRICE = 50;
  const LIGHT_PRICE = 12;
  const [fanNum, setFanNum] = useState<number>(0);
  const [lightNum, setLightNum] = useState<number>(0);
  const [totalInstall, setTotalInstall] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalUP, setTotalUP] = useState<number>(0);

  const [fanInputValue, setFanInputValue] = useState<string>("");
  const [lightInputValue, setLightInputValue] = useState<string>("");

  const calcInstall = (fanNum: number, lightNum: number) => {
    const totalInstall = fanNum * FAN_PRICE + lightNum * LIGHT_PRICE;
    setTotalInstall(totalInstall);
  };

  const handleFanChange = (event: any) => {
    setFanNum(Number(event.target.value));
  };

  const handleLightChange = (event: any) => {
    setLightNum(Number(event.target.value));
  };

  useEffect(() => {
    calcInstall(fanNum, lightNum);
  }, [fanNum, lightNum]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Floorplan calculator</h1>

        <label>No. of fans</label>
        <input type="number" onChange={handleFanChange} value={fanNum}></input>
        <br />
        <label>No. of lights</label>
        <input
          type="number"
          onChange={handleLightChange}
          value={lightNum}
        ></input>

        <h5>Total installation: {`$${totalInstall}`}</h5>
      </header>
    </div>
  );
}

export default App;
