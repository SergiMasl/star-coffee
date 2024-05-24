import React, { useState } from "react";
import Logo from "../../../../_asses/img/exemple.jpg";
import checkDrink from "./selfServer/checkDrink";
import Americano from "./selfServer/Americano";
import Latte from "./selfServer/Latte";

export default function DrinkItem({ data }) {
  const sizes = [
    { id: "Small", size: 8, class: "notActive" },
    { id: "Medium", size: 16, class: "activeDrink" },
    { id: "Large", size: 20, class: "notActive" },
  ];

  const [milk, setMilk] = useState(data[0].ingrid[0].milk);
  const [shots, setShots] = useState(data[0].ingrid[1].shots);
  const [temperature, setTemperature] = useState(data[0].temperature);

  const defaultData = {
    milk: data[0].ingrid[0].milk,
    shots: data[0].ingrid[1].shots,
    temperature: data[0].temperature,
  };

  const newData = checkDrink(data[0].id);

  const handleChange = (event) => {
    if (event.target.id == "milk") {
      setMilk(event.target.value);
    }
    if (event.target.id == "shots") {
      setShots(event.target.value);
    }
    if (event.target.id == "temperature") {
      setShots(event.target.value);
    }
  };

  return (
    <div className="drinl-item-wrap">
      <div className="dr-it-content">
        <div className="drink-item-content">
          <img src={Logo} />
          <div className="drink-item-content-text">
            <h3>{data[0].id}</h3>
            <p>15 calories</p>
          </div>
        </div>
      </div>

      <div className="drink-item-description">
        <div className="dr-description">
          <h4>Size options</h4>
          <div className="line"></div>
          <ul className="dr-it-line">
            {sizes.map((item) => (
              <li key={item.id}>
                <a>
                  <img src={Logo} className={item.class} />
                  <h5>{item.id}</h5>
                  <p>{item.size} fl oz</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="dr-description">
          <h4>What's included</h4>
          <div className="line"></div>
          {/* <Americano
            newData={newData}
            handleChange={handleChange}
            milk={milk}
            shots={shots}
            defaultData={defaultData}
          /> */}
          <Latte
            newData={newData}
            handleChange={handleChange}
            milk={milk}
            shots={shots}
            defaultData={defaultData}
            temperature={temperature}
          />
        </div>
      </div>
    </div>
  );
}
