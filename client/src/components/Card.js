import React from "react";

function Card(props) {
    return (
      <div className = "card col">
        <img src={props.image}></img>
      </div>
    )
}

export default Card;
