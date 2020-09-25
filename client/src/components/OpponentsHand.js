import React from "react";
import Card from "./Card";
import "../styles/OpponentsHand.css";

function OpponentsHand(props) {
    return (
      <div className = "opponentsHand container row center">
        {
          props.cards.map((card) => {
            return (<Card key = {card.id} 
                          image = "/assets/images/backs_blue.png" 
                          value = {card.value} 
                          text = {card.text}
                          suit = {card.suit}
                    />)
          })
        }
      </div>
    )
}

export default OpponentsHand;