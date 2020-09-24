import React from "react";
import Card from "./Card";
import "../styles/Centerdeck.css";

function Centerdeck(props) {
    return (
      <div className="container">
      <div className = "centerDeck row center">
        <Card image = "/assets/images/backs_blue.png" />
      </div>
      </div>
    );
}

export default Centerdeck;