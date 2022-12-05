import './Card.css';

// import avian from "../assets/avian.png"
import React, { useState, useEffect } from "react";

function CardArea(props) {

    let [score, setScore] = useState(0);
    useEffect(() => {
      const scoreElement = document.querySelector(".score");
      scoreElement.textContent = "Current Score: " + score;
    }, [score]);
  
  // let [selectedCard, setSelectedCard] = useState("");

  let [selectedArray, setSelectedArray] = useState([]);

  useEffect(() => {

    if (selectedArray.length === 0) {
    } else {
      const lastCard = selectedArray.pop();
      if (selectedArray.includes(lastCard)) {  
        setScore(score = 0);
        setSelectedArray(selectedArray = []);
      }   else {
          selectedArray = selectedArray.concat(lastCard);
    }
  }

    return () => {
      props.characters.sort(() => Math.random() - 0.5)
    };
  }, [selectedArray]) 

  const addCard = (e) => {
    setSelectedArray(selectedArray.concat(e.target.id));
    setScore(score + 1);
    }


  return (
    props.characters.map((item, i) => {
      return (
        <div className="card cardtitle" id={item.title} key={i} onClick={addCard}> 
        <div id={item.title}>{item.title}</div>
        <img id={item.title} src={item.artwork} alt={item.artwork}></img>
        
        </div>
      )
    })
  );
}

export default CardArea;

