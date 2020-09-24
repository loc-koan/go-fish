import React from "react";

function Card(props) {
  return (
    <div className = "btn">
      <img src={props.image}></img>
    </div>
  )
}

export default Card;
