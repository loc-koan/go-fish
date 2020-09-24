import React, { useState, useEffect } from "react";
// import Background from "./components/Background";
// import OpponentsHand from "./components/OpponentsHand";
// import Centerdeck from "./components/Centerdeck";
// import YourHand from "./components/YourHand";
import data from "./data.json";

function Game() {
  const [computer, setComputer] = useState("");
  const [player, setPlayer] = useState("");
  const [pile, setPile] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [computerHand, setComputerHand] = useState([]);
  const [finishedShuffling, setfinishedShuffling] = useState(false);
  
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
      console.log(player);
    }
  },[finishedShuffling]);

  function playerHandIntial () {
    let hand = [];
    console.log(pile);
    for (var i = 0; i < 5; i++) {
      hand.push(pile.shift());
    }
    setPlayerHand(hand);
  };

  /* initial deal to computer */ 
  useEffect(() => {
    if (finishedShuffling) {
      setComputer(computerHandIntial);
      console.log(player);
    }
  },[finishedShuffling]);

  function computerHandIntial () {
    let hand = [];
    console.log(pile);
    for (var i = 0; i < 5; i++) {
      hand.push(pile.shift());
    }
    setComputerHand(hand);
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
return (<h1>test</h1>);

}

export default Game;
