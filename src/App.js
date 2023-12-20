import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dice from "./components/Dice";
import dice1 from "./images/dice.png";
import dice2 from "./images/dice2.png";
import dice3 from "./images/dice3.png";
import dice4 from "./images/dice4.png";
import dice5 from "./images/dice5.png";
import dice6 from "./images/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const App = () => {
  const [diceImage, setDiceImage] = useState(dice1);

  const handleRoll = () => {
    const randomRoll = Math.floor(Math.random() * 6);
    setDiceImage(diceImages[randomRoll]);
  };

  return (
    <div>
      <Dice sides={6} onRoll={handleRoll} image={diceImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
