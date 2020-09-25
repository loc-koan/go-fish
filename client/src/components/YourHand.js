import React from "react";
import Card from "./Card";
import "../styles/YourHand.css";

function YourHand(props) {
    return (
      <div className = "yourHand container row center">
        {
          props.cards.map((card) => {
            return (<Card key = {card.id} 
                          image = {card.image} 
                          value = {card.value} 
                          text = {card.text}
                          suit = {card.suit}
                    />)
          })
        }
      </div>
    )
}

export default YourHand;