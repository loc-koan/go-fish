import React from "react";

function Card(props) {
    return (
      <div className = "card">
        <img src={props.img}></img>
      </div>
    )
}

export default Card;
