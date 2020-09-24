import React from "react";

function Card(props) {
  return (
    <div className="col s2">
      <buton><img src={props.image}></img></buton>
    </div>
  )
}

export default Card;
