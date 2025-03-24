import React from "react";
import { useState } from "react";


export default function App() {


  const [number, setNumber] = useState(0);

  const onNumber = (event) => {
    setNumber(parseInt(event.target.value));
  }



  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${number * 10}%`;

    // 2- Compute color (optional)
    const colors = [
      "none", // none color
      "#FF3B3B",  // 10% - Vivid Red
      "#FF6B3B",  // 20% - Reddish Orange
      "#FF913B",  // 30% - Deep Orange
      "#FFB13B",  // 40% - Golden Orange
      "#FFD43B",  // 50% - Rich Gold
      "#C4E13B",  // 60% - Yellow-Green
      "#92D13B",  // 70% - Fresh Lime
      "#5FC13B",  // 80% - Soft Green
      "#2DB33B",  // 90% - Medium Green
      "#1FAE4B",  // 100% - Deep Mint Green
    ];

    let scoreColor = colors[number];

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={onNumber}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
