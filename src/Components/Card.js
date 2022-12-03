import './Card.css';
import React, { useState, useEffect } from "react";

function CardArea(props) {

  const [selectedArray, setSelectedArray] = useState([]);
  let [selectedCard, setSelectedCard] = useState("");

  useEffect(() => {
    console.log("updated");
    console.log(selectedCard);

    if (selectedArray.includes(selectedCard) || selectedCard === "") {
      console.log("repeated")
    } else {
      setSelectedArray(selectedArray.concat(selectedCard))
      console.log(selectedArray);
    }
  }, [selectedCard]) 

  const selectCard = (e) => {
    setSelectedCard(selectedCard = e.target.textContent);
  }

  return (
    props.characters.map(item => {
      return (
        <div className="card" onClick={selectCard}>{item}</div>
      )
    })
  );
}

export default CardArea;
