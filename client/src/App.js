import React from 'react';
import Background from "./components/Background";
import OpponentsHand from "./components/OpponentsHand";
import Centerdeck from "./components/Centerdeck";
import YourHand from "./components/YourHand";

function App() {
  return (
    <div>
      <Background />
      <OpponentsHand />
      <Centerdeck />
      <YourHand />
    </div>
  );
}

export default App;
