import React from "react";
import Card from "./Card";
import "../styles/Centerdeck.css";

function Centerdeck(props) {
    return (
      <div className = "centerDeck container row center">
        <Card image = "/assets/images/backs_blue.png" />
      </div>
    );
}

export default Centerdeck;