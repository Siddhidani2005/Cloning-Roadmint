import React, { useEffect, useState } from "react";
import "./rain.css";

const generateRaindrops = (count, width) =>
  Array.from({ length: count }, () => ({
    left: `${Math.floor(Math.random() * width)}px`,
    delay: `${(Math.random() * 5).toFixed(2)}s`,
    duration: `${(Math.random() * 6 + 4).toFixed(2)}s`,
    id: Math.random().toString(36).substr(2, 9),
  }));

const RainDropEffect = () => {
  const [raindrops, setRaindrops] = useState([]);
  const [screenWidth, setScreenWidth] = useState(1280);

  useEffect(() => {
    const width = window.innerWidth;
    setScreenWidth(width);
    setRaindrops(generateRaindrops(80, width));
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {raindrops.map((drop) => (
        <span
          key={drop.id}
          style={{
            top: "-10%",
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
          }}
          className="raindrop"
        />
      ))}
    </div>
  );
};

export default RainDropEffect;
