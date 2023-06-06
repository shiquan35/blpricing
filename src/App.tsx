import React, { useState, useEffect } from "react";
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

  // each lights count
  const [entWalkNum, setEntWalkNum] = useState<number>(0);
  const [kitchenBathNum, setKitchenBathNum] = useState<number>(0);
  const [diningNum, setDiningNum] = useState<number>(0);
  const [yardStoreNum, setYardStoreNum] = useState<number>(0);
  const [bedroomNum, setBedroomNum] = useState<number>(0);
  const [balconyNum, setBalconyNum] = useState<number>(0);
  const [masterNum, setMasterNum] = useState<number>(0);
  const [livingNum, setLivingNum] = useState<number>(0);

  const calcInstall = (fanNum: number, lightNum: number) => {
    const totalInstall =
      fanNum * INSTALL_FAN_PRICE + lightNum * INSTALL_LIGHT_PRICE;
    setTotalInstall(totalInstall);
  };

  const calcTotal = (
    totalInstall: number,
    entWalkBathNum: number,
    kitchenBathNum: number,
    bedroomNum: number,
    balconyNum: number,
    masterNum: number,
    livingNum: number,
    diningNum: number,
    yardStoreNum: number
  ) => {
    const total =
      totalInstall +
      entWalkBathNum * 18 +
      kitchenBathNum * 28 +
      bedroomNum * 40 +
      balconyNum * 55 +
      masterNum * 69 +
      livingNum * 198 +
      diningNum * 45 +
      yardStoreNum * 28;
    setTotalPrice(total);
  };

  const calcUsualTotal = (
    totalInstall: number,
    entWalkBathNum: number,
    kitchenBathNum: number,
    bedroomNum: number,
    balconyNum: number,
    diningMasterNum: number,
    livingNum: number,
    diningNum: number,
    yardStoreNum: number
  ) => {
    const total =
      totalInstall +
      entWalkBathNum * 25 +
      kitchenBathNum * 40 +
      bedroomNum * 69 +
      balconyNum * 79 +
      diningMasterNum * 115 +
      livingNum * 218 +
      diningNum * 85 +
      yardStoreNum * 40;
    setTotalUP(total);
  };

  const handleEntWalk = (event: any) => {
    setEntWalkNum(Number(event.target.value));
  };

  const handleDining = (event: any) => {
    setDiningNum(Number(event.target.value));
  };

  const handleYardStore = (event: any) => {
    setYardStoreNum(Number(event.target.value));
  };

  const handleKitchen = (event: any) => {
    setKitchenBathNum(Number(event.target.value));
  };

  const handleBedroom = (event: any) => {
    setBedroomNum(Number(event.target.value));
  };

  const handleBalcony = (event: any) => {
    setBalconyNum(Number(event.target.value));
  };

  const handleMaster = (event: any) => {
    setMasterNum(Number(event.target.value));
  };

  const handleLiving = (event: any) => {
    setLivingNum(Number(event.target.value));
  };

  useEffect(() => {
    setLightNum(
      entWalkNum +
        kitchenBathNum +
        bedroomNum +
        balconyNum +
        masterNum +
        diningNum +
        yardStoreNum
    );
  }, [
    entWalkNum,
    kitchenBathNum,
    bedroomNum,
    balconyNum,
    masterNum,
    diningNum,
    yardStoreNum,
  ]);

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
      entWalkNum,
      kitchenBathNum,
      bedroomNum,
      balconyNum,
      masterNum,
      livingNum,
      diningNum,
      yardStoreNum
    );

    calcUsualTotal(
      totalInstall,
      entWalkNum,
      kitchenBathNum,
      bedroomNum,
      balconyNum,
      masterNum,
      livingNum,
      diningNum,
      yardStoreNum
    );
  }, [
    totalInstall,
    entWalkNum,
    kitchenBathNum,
    bedroomNum,
    balconyNum,
    masterNum,
    livingNum,
    diningNum,
    yardStoreNum,
  ]);

  const handleReset = () => {
    setBalconyNum(0);
    setBedroomNum(0);
    setDiningNum(0);
    setEntWalkNum(0);
    setFanNum(0);
    setKitchenBathNum(0);
    // setLightNum(0);
    setLivingNum(0);
    setMasterNum(0);
    setYardStoreNum(0);
    // setTotalInstall(0);
    // setTotalLightsNum(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="inputField">
          <label style={{ marginRight: "15px" }}>Entrance/ Walkway: </label>
          <input
            type="number"
            onChange={handleEntWalk}
            value={entWalkNum}
            style={{ width: "30px" }}
          ></input>
        </div>
        <br />

        <div className="inputField">
          <label style={{ marginRight: "15px" }}>Dining: </label>
          <input
            type="number"
            onChange={handleDining}
            value={diningNum}
            style={{ width: "30px" }}
          ></input>
        </div>
        <br />

        <div className="inputField">
          <label style={{ marginRight: "15px" }}>Yard/ Store: </label>
          <input
            type="number"
            onChange={handleYardStore}
            value={yardStoreNum}
            style={{ width: "30px" }}
          ></input>
        </div>
        <br />

        <div className="inputField">
          <label style={{ marginRight: "15px" }}>Kitchen/ Bathroom: </label>
          <input
            type="number"
            onChange={handleKitchen}
            value={kitchenBathNum}
            style={{ width: "30px" }}
          ></input>
        </div>
        <br />

        <div className="inputField">
          <label style={{ marginRight: "15px" }}>Bedroom/Study: </label>
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
          <label style={{ marginRight: "15px" }}>Master: </label>
          <input
            type="number"
            onChange={handleMaster}
            value={masterNum}
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
        <button onClick={handleReset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
