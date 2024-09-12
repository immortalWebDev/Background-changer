import React from "react";
import './Footer.css';

const Footer = (props) => {
    return (
        <footer style={{ backgroundColor: props.color, transition: 'background-color 1s'}}>
            <p style={{ color: props.textColor, transition: 'color 1s'}}>
                Created with 💘 by Piyush
            </p>
        </footer>
    );
}

export default Footer;
