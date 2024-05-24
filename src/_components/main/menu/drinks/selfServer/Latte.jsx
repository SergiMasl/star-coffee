import React from "react";

export default function Latte({
  newData,
  handleChange,
  milk,
  shots,
  defaultData,
  temperature,
}) {
  return (
    <>
      <ul className="dr-it-line"></ul>

      <div className="default-wrap">
        <p className="default-lable">Milk</p>
        <select
          id="temperature"
          value={temperature}
          onChange={handleChange}
          className="default-selectore"
        >
          {newData[1].temperature.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="default-wrap">
        <p className="default-lable">Milk</p>

        <select
          id="milk"
          value={milk}
          onChange={handleChange}
          className="default-selectore"
        >
          {newData[0].milk.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="default-wrap">
        <p className="default-lable">Espresso shots</p>
        <input
          id="shots"
          value={shots}
          onChange={handleChange}
          type="number"
          className="default-selectore"
        />
      </div>
    </>
  );
}
