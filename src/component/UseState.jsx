import React from "react";
import { useState } from "react";

const UseState = () => {
  const [counter, setcounter] = useState(0);

  const increase = () => {
    setcounter(counter + 1);
  };
  const decrease = () => {
    setcounter(counter - 1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        minHeight: "100vh",
        overflow: "hidden",
        font: "bold",
      }}
    >
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={increase}
          style={{
            padding: "10px 20px",
            fontSize: "20px",
            borderRadius: "8px",
            border: "none",
            background: "green",
            color: "white",
            cursor: "pointer",
          }}
        >
          ➕
        </button>

        <button
          onClick={decrease}
          style={{
            padding: "10px 20px",
            fontSize: "20px",
            borderRadius: "8px",
            border: "none",
            background: "red",
            color: "white",
            cursor: "pointer",
          }}
        >
          ➖
        </button>
      </div>
    </div>
  );
};

export default UseState;
