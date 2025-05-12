import React, { useState } from "react";
import "../../styles/index.css";

export default function TrafficLight() {
  // Estado que marca qué luz está encendida
  const [color, setColor] = useState("red");

  const lights = ["red", "yellow", "green"];

  return (
    <div className="traffic-wrapper">
      <div id="trafficTop"></div>
      <div id="container">
        {lights.map(c => (
          <div
            key={c}
            className={`light ${c} ${color === c ? "active" : ""}`}
            onClick={() => setColor(c)}
          />
        ))}
      </div>
    </div>
  );
}
