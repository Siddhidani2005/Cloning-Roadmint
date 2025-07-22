// src/components/Rain.jsx
import React from "react";
import "./Rain.css";

export default function Rain() {
  return (
    <div className="rain-container">
      {Array.from({ length: 100 }).map((_, index) => {
        const randomDuration = 3 + Math.random() * 2; // 0.5s to 2s
        const randomHeight = 20 + Math.random() * 50; // 50px to 150px
        return (
          <div
            key={index}
            className="raindrop"
            style={{
              '--i': index / 100,
              height: `${randomHeight}px`,
              animationDuration: `${randomDuration}s`,
            }}
          />
        );
      })}
    </div>
  );
}
