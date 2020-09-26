import React from "react";

function Card(props) {
  return (
    <div className="col s2"  >
      <button value={props.value}
        onClick={(event) => props.playerRequest(props.card)}>
        <img src={props.image} />
      </button>
      
    </div>
  )
}

export default Card;
