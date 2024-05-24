import React from "react";

export default function Americano({
  newData,
  handleChange,
  milk,
  shots,
  defaultData,
}) {
  return (
    <>
      <ul className="dr-it-line"></ul>

      <select id="milk" value={milk} onChange={handleChange}>
        {newData[0].water.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input id="shots" value={shots} onChange={handleChange} type="number" />
      <p>{shots}</p>
    </>
  );
}
