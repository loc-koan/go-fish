import React, { useState, useEffect } from "react";
import Background from "./Background";
import OpponentsHand from "./OpponentsHand";
import Centerdeck from "./Centerdeck";
import YourHand from "./YourHand";
import data from "./data.json";

function Game() {
  const [computer, setComputer] = useState("");
  const [player, setPlayer] = useState("");
  const [pile, setPile] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [computerHand, setComputerHand] = useState([]);
  const [finishedShuffling, setfinishedShuffling] = useState(false);
  const [chosenCard, setChosenCard] = useState("");
  const [humanTurn, setHumanTurn] = useState(true);
  const [humanPairPoint, setHumanPairPoint] = useState();
  const [computerPairPoint, setComputerPairPoint] = useState();
  const [discardPile, setDiscardPile] = useState([]);

  /* initial shuffling */ 
  useEffect(() => {
    const shuffled = shuffleData(data);
    setPile(shuffled);
    setfinishedShuffling(true);
  },[]);

  function shuffleData (data) {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  /* initial deal to player1 */ 
  useEffect(() => {
    if (finishedShuffling) {
      setPlayer(playerHandIntial);
      // console.log(player);
    }
  },[finishedShuffling]);

  function playerHandIntial () {
    let hand = [];
    // console.log(pile);
    for (var i = 0; i < 5; i++) {
      hand.push(pile.shift());
    }
    setPlayerHand(hand);
  };

  /* initial deal to computer */ 
  useEffect(() => {
    if (finishedShuffling) {
      setComputer(computerHandIntial);
      // console.log(computer);
    }
  },[finishedShuffling]);

  function computerHandIntial () {
    let hand = [];
    // console.log(pile);
    for (var i = 0; i < 5; i++) {
      hand.push(pile.shift());
    }
    setComputerHand(hand);
  };

// console.log(player); /* undefined */ 
// console.log(computer); /* undefined */ 

// console.log(playerHand);
// console.log(computerHand);

// console.log(setPlayerHand); /* endless loop */ 
// console.log(setComputerHand); /* endless loop */

  function orderCards () {
    playerHand.sort((a, b) => (a.value > b.value) ? 1 : -1);
    computerHand.sort((a, b) => (a.value > b.value) ? 1 : -1);
  };

  console.log(orderCards(playerHand));
  console.log(orderCards(computerHand));

  function removePairs () {
    if(humanTurn) {
      const pair = playerHand.filter(card => card.value === chosenCard.value);
      if(pair.length > 0) {
        const remainingDeck = playerHand.filter(card => card.value !== chosenCard.value);
        setPlayerHand(remainingDeck);
        setHumanPairPoint(pair);
        setHumanTurn(false);
      } else {
        // go fish
        deckAdditionPlayer(playerHand);
        setHumanTurn(false);
      }
    }
  }

  function deckAdditionPlayer () { /* after go fish, pushes new card into player hand */ 
    setPlayerHand([...playerHand, pile.shift()]);
  };

  function deckAdditionComputer () { /* after go fish, pushes new card into computer hand */ 
    setComputerHand([...computerHand, pile.shift()]);
  };

  function playerRequest (event) { /* player picks card, asks computer for it */ 
    const card = event.target.value;
    setChosenCard(card);
  };

  function computerRequest () { /* computer picks random card, asks player for it */ 
    // onClick
    // removePairs ()
  };

  function calculateWinner () { /* determines winner */ 

  };

  return (
    <div>
      <Background />
      <OpponentsHand cards={computerHand}/>
      <Centerdeck cards={pile}/>
      <YourHand cards={playerHand}/> 
    </div>
  );

}

export default Game;
