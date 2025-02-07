import React, { useEffect, useState } from "react";
import "../styles/Bubbles.css";
import Login from "./Login";
import Register from "./Register";

const Bubbles = () => {
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const moveHandler = (event) => {
      const interactive = document.querySelector(".interactive");
      if (interactive) {
        interactive.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    document.addEventListener("mousemove", moveHandler);

    return () => document.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div>
      <div className="text-container">
        {showLogin ? (
          <Login toggleForm={() => setShowLogin(false)} />
        ) : (
          <Register toggleForm={() => setShowLogin(true)} />
        )}
      </div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </div>
  );
};

export default Bubbles;
