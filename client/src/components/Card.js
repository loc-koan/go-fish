import React from "react";

function Card(props) {
  return (
    <div className="col s2">
      <button><img src={props.image}></img></button>
    </div>
  )
}

export default Card;
