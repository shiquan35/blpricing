import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const INSTALL_FAN_PRICE = 50;
  const INSTALL_LIGHT_PRICE = 12;
  const [fanNum, setFanNum] = useState<number>(0);
  const [lightNum, setLightNum] = useState<number>(0);
  const [totalLightsNum, setTotalLightsNum] = useState<number>(0);
  const [totalInstall, setTotalInstall] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalUP, setTotalUP] = useState<number>(0);

  const [fanInputValue, setFanInputValue] = useState<string>("");
  const [lightInputValue, setLightInputValue] = useState<string>("");

  // each lights count
  const [entWalkBathNum, setEntWalkBathNum] = useState<number>(0);
  const [kitchenNum, setKitchenNum] = useState<number>(0);
  const [bedroomNum, setBedroomNum] = useState<number>(0);
  const [balconyNum, setBalconyNum] = useState<number>(0);
  const [diningMasterNum, setDiningMasterNum] = useState<number>(0);
  const [livingNum, setLivingNum] = useState<number>(0);

  const calcInstall = (fanNum: number, lightNum: number) => {
    const totalInstall =
      fanNum * INSTALL_FAN_PRICE + lightNum * INSTALL_LIGHT_PRICE;
    setTotalInstall(totalInstall);
  };

  const calcTotal = (
    totalInstall: number,
    entWalkBathNum: number,
    kitchenNum: number,
    bedroomNum: number,
    balconyNum: number,
    diningMasterNum: number,
    livingNum: number
  ) => {
    const total =
      totalInstall +
      entWalkBathNum * 18 +
      kitchenNum * 28 +
      bedroomNum * 40 +
      balconyNum * 55 +
      diningMasterNum * 69 +
      livingNum * 198;
    setTotalPrice(total);
  };

  const calcUsualTotal = (
    totalInstall: number,
    entWalkBathNum: number,
    kitchenNum: number,
    bedroomNum: number,
    balconyNum: number,
    diningMasterNum: number,
    livingNum: number
  ) => {
    const total =
      totalInstall +
      entWalkBathNum * 25 +
      kitchenNum * 40 +
      bedroomNum * 69 +
      balconyNum * 79 +
      diningMasterNum * 115 +
      livingNum * 218;
    setTotalUP(total);
  };

  const handleEntWalkBath = (event: any) => {
    setEntWalkBathNum(Number(event.target.value));
  };

  const handleKitchen = (event: any) => {
    setKitchenNum(Number(event.target.value));
  };

  const handleBedroom = (event: any) => {
    setBedroomNum(Number(event.target.value));
  };

  const handleBalcony = (event: any) => {
    setBalconyNum(Number(event.target.value));
  };

  const handleDiningMaster = (event: any) => {
    setDiningMasterNum(Number(event.target.value));
  };

  const handleLiving = (event: any) => {
    setLivingNum(Number(event.target.value));
  };

  useEffect(() => {
    setLightNum(
      entWalkBathNum + kitchenNum + bedroomNum + balconyNum + diningMasterNum
    );
  }, [entWalkBathNum, kitchenNum, bedroomNum, balconyNum, diningMasterNum]);

  useEffect(() => {
    setFanNum(livingNum);
  }, [livingNum]);

  useEffect(() => {
    calcInstall(fanNum, lightNum);
    setTotalLightsNum(fanNum + lightNum);
  }, [fanNum, lightNum]);

  useEffect(() => {
    calcTotal(
      totalInstall,
      entWalkBathNum,
      kitchenNum,
      bedroomNum,
      balconyNum,
      diningMasterNum,
      livingNum
    );

    calcUsualTotal(
      totalInstall,
      entWalkBathNum,
      kitchenNum,
      bedroomNum,
      balconyNum,
      diningMasterNum,
      livingNum
    );
  }, [
    totalInstall,
    entWalkBathNum,
    kitchenNum,
    bedroomNum,
    balconyNum,
    diningMasterNum,
    livingNum,
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Floorplan calculator</h1>

        <div className="inputField">
          <label style={{ marginRight: "15px" }}>
            Entrance/ Walkway/ Bathroom:{" "}
          </label>
          <input
            type="number"
            onChange={handleEntWalkBath}
            value={entWalkBathNum}
            style={{ width: "30px" }}
          ></input>
        </div>
        <br />

        <div className="inputField">
          <label style={{ marginRight: "15px" }}>Kitchen: </label>
          <input
            type="number"
            onChange={handleKitchen}
            value={kitchenNum}
            style={{ width: "30px" }}
          ></input>
        </div>
        <br />

        <div className="inputField">
          <label style={{ marginRight: "15px" }}>Bedroom 2/3: </label>
          <input
            type="number"
            onChange={handleBedroom}
            value={bedroomNum}
            style={{ width: "30px" }}
          ></input>
        </div>
        <br />

        <div className="inputField">
          <label style={{ marginRight: "15px" }}>Balcony: </label>
          <input
            type="number"
            onChange={handleBalcony}
            value={balconyNum}
            style={{ width: "30px" }}
          ></input>
        </div>
        <br />

        <div className="inputField">
          <label style={{ marginRight: "15px" }}>Dining/ Master: </label>
          <input
            type="number"
            onChange={handleDiningMaster}
            value={diningMasterNum}
            style={{ width: "30px" }}
          ></input>
        </div>
        <br />

        <div className="inputField">
          <label style={{ marginRight: "15px" }}>Living: </label>
          <input
            type="number"
            onChange={handleLiving}
            value={livingNum}
            style={{ width: "30px" }}
          ></input>
        </div>
        <br />

        <label>Total lighting points: {`${totalLightsNum}`}</label>
        <br />

        <label>Total installation: {`$${totalInstall}`}</label>
        <br />

        <label>Total cost: {`$${totalPrice}`}</label>

        <label>Usual Price: {`$${totalUP}`}</label>
        <br />
      </header>
    </div>
  );
}

export default App;
