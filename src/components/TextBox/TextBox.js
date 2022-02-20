import { useState } from "react";

export default function TextBox({ getWeatherData }) {
  const [cityName, setCityName] = useState("");

  const processCity = (e) => {
    if (e.code === "Enter") {
      getWeatherData(cityName);
    }
  };

  const updateText = (e) => {
    setCityName(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        style={{
          width: "30%",
          border: "none",
          textAlign: "center",
          padding: "1rem",
          borderRadius: "1rem",
        }}
        placeholder="Enter city name"
        value={cityName}
        onChange={updateText}
        onKeyUp={processCity}
      ></input>
    </>
  );
}
