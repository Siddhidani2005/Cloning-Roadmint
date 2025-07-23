import React, { useEffect, useRef } from "react";
import "./Rain.css";

const RainBg = () => {
  const rainRef = useRef();

  useEffect(() => {
    const container = rainRef.current;
    if (!container) return;

    const createDrop = () => {
      const drop = document.createElement("div");
      drop.className = "drop";

      const x = Math.random() * 100; // Random horizontal position
      const delay = Math.random() * 2;
      const duration = 3 + Math.random() * 8; // Slower: 5s to 8s

      drop.style.left = `${x}%`;
      drop.style.animationDelay = `${delay}s`;
      drop.style.animationDuration = `${duration}s`;

      container.appendChild(drop);

      // Remove drop after animation to avoid memory leaks
      setTimeout(() => {
        drop.remove();
      }, (delay + duration) * 1000);
    };

    // Add a new drop every 100ms
    const interval = setInterval(() => {
      createDrop();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <div className="rain" ref={rainRef} />;
};

export default RainBg
