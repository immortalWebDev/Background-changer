import React from "react";
import './Buttons.css'

const Buttons = (props) => {
  return (
    <button
      className="button-hover-effect outline-none px-4 py-1 rounded-full shadow-lg"
      style={{ backgroundColor: props.color, color: props.textColor }}
      onClick={props.onClick}
    >
      {props.color.charAt(0).toUpperCase() + props.color.slice(1)} 
    </button>
  );
};

export default Buttons;




