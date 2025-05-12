// src/js/components/Home.jsx
import React from "react";
import TrafficLight from "./TrafficLight";  // asegúrate de la ruta

export default function Home() {
  return (
    <div>
      <h1>Bienvenido al semáforo React</h1>
      <TrafficLight />
    </div>
  );
}
