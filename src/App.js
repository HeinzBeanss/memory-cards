import './App.css';
import CardArea from "./Components/Card"

import { avian, burstinatrix, bubbleman, bladege, rampartblaster, airneos, clayman, flamewingman, flareneos, magmaneos, necroshade, neos, sparkman, stratos, tempest, thundergiant, wildedge, wildheart } from "../src/Components/images"

// import avian from "../src/assets/avian.png"

import React, { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([
    {title: "Elemental Hero Avian", artwork: avian,},
    {title: "Elemental Hero Burstinatrix", artwork: burstinatrix,},
    {title: "Elemental Hero Bubbleman", artwork: bubbleman,},
    {title: "Elemental Hero Bladedge", artwork: bladege,},
    {title: "Elemental Hero Rampart Blaster", artwork: rampartblaster,},
    {title: "Elemental Hero Air Neos", artwork: airneos,},
    {title: "Elemental Hero Clayman", artwork: clayman,},
    {title: "Elemental Hero Flame Wingman", artwork: flamewingman,},
    {title: "Elemental Hero Flare Neos", artwork: flareneos,},
    {title: "Elemental Hero Magma Neos", artwork: magmaneos,},
    {title: "Elemental Hero Necroshade", artwork: necroshade,},
    {title: "Elemental Hero Neos", artwork: neos,},
    {title: "Elemental Hero Sparkman", artwork: sparkman,},
    {title: "Elemental Hero Stratos", artwork: stratos,},
    {title: "Elemental Hero Tempest", artwork: tempest,},
    {title: "Elemental Hero Thunder Giant", artwork: thundergiant,},
    {title: "Elemental Hero Wildedge", artwork: wildedge,},
    {title: "Elemental Hero Wildheart", artwork: wildheart,},
  ])

  useEffect(() => {
    console.log("this is the APP.JS UPDATING")      
  })

  return (
    <div className="App">
      <div className='title'>MEMORY CARDS!</div>

      <div className='cards'>
        <CardArea characters={characters}/>
      </div>
      
      <div className='score'>Current Score: 0</div>
    </div>
  );
}

export default App;
