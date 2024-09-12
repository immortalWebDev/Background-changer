import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer/Footer";

function App() {
  const [color, setColor] = useState("olive");
  const [footerColor, setFooterColor] = useState("olive");
  const [footerTextColor, setFooterTextColor] = useState("white");

  const handleButtonClick = (newColor, textColor) => {
    setColor(newColor);
    setFooterColor(newColor); 
    setFooterTextColor(textColor); 
  };

  return (
    <div
      className="w-full h-screen duration-1000"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="mb-4 flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Buttons
            color="white"
            textColor="black"
            onClick={() => handleButtonClick("white", "black")}
          />
          <Buttons
            color="violet"
            textColor="black"
            onClick={() => handleButtonClick("violet", "black")}
          />
          <Buttons
            color="indigo"
            textColor="white"
            onClick={() => handleButtonClick("indigo", "white")}
          />
          <Buttons
            color="blue"
            textColor="white"
            onClick={() => handleButtonClick("blue", "white")}
          />
          <Buttons
            color="green"
            textColor="black"
            onClick={() => handleButtonClick("green", "black")}
          />
          <Buttons
            color="yellow"
            textColor="black"
            onClick={() => handleButtonClick("yellow", "black")}
          />
          <Buttons
            color="orange"
            textColor="black"
            onClick={() => handleButtonClick("orange", "black")}
          />
          <Buttons
            color="red"
            textColor="white"
            onClick={() => handleButtonClick("red", "white")}
          />
          <Buttons
            color="black"
            textColor="white"
            onClick={() => handleButtonClick("black", "white")}
          />
        </div>
      </div>
      <Footer color={footerColor} textColor={footerTextColor} />
    </div>
  );
}

export default App;
