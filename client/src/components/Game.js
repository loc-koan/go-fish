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
  const [humanTurn, setHumanTurn] = setState(true);

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

  function removePairs () { /* checks for matches in hand, removes cards and adds to pair pile*/ 
    if (humanTurn) {
      playerHand.forEach(card => {
        if (card.value === chosenCard.value) {
           setPlayerHand(playerHand.filter(card => card.value !== chosenCard.value))
           // add point to pair state
           // remove card using filter
           // draw new card, deckAddition
           // boolean for humanTurn
        } else {}
      }
    }
  };

  function deckAddition () { /* after go fish, pushes new card into hand */ 
    pile.shift();
  };

  function setHumanTurn () {
    humanTurn ? true : false;
    humanTurn: !humanTurn;
  };

  function playerRequest (event) { /* player picks card, asks computer for it */ 
    const card = event.target.value;
    setchosenCard(card);
  };

  function computerRequest () { /* computer picks random card, asks player for it */ 
    
  };

  function calculateWinner () { /* determines winner */ 

  };

//   componentDidMount() {
//     this.setState({ data: this.shuffleData(this.state.data) });
//   }

//   handleCorrectGuess = newData => {
//     const { topScore, score } = this.state;
//     const newScore = score + 1;
//     const newTopScore = Math.max(newScore, topScore);

//     this.setState({
//       data: this.shuffleData(newData),
//       score: newScore,
//       topScore: newTopScore
//     });
//   };

//   handleIncorrectGuess = data => {
//     this.setState({
//       data: this.resetData(data),
//       score: 0
//     });
//   };

//   resetData = data => {
//     const resetData = data.map(item => ({ ...item, clicked: false }));
//     return this.shuffleData(resetData);
//   };

//   handleItemClick = id => {
//     let guessedCorrectly = false;
//     const newData = this.state.data.map(item => {
//       const newItem = { ...item };
//       if (newItem.id === id) {
//         if (!newItem.clicked) {
//           newItem.clicked = true;
//           guessedCorrectly = true;
//         }
//       }
//       return newItem;
//     });
//     guessedCorrectly
//       ? this.handleCorrectGuess(newData)
//       : this.handleIncorrectGuess(newData);
//   };

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
