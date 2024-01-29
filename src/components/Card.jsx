import React from "react"


function Card(props) {
    return (
      <div className="card">
         <div className="wrapper">
        <h2>{props.title}</h2>
        <img src={props.imageUrl} alt={props.imageAlt} className="card_img" />
        <h3 className="cardInfo">{props.description}</h3>
      </div>
      </div>
    );
  }
export default Card