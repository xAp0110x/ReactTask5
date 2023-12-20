import React from "react";
import PropTypes from "prop-types";
import "../Dice.css";

const Dice = ({ onRoll, image }) => {
  const handleClick = () => {
    onRoll();
  };

  return (
    <div className="dice-container">
      <div className="dice" onClick={handleClick}>
        <img src={image} alt="dice" />
      </div>
    </div>
  );
};

Dice.propTypes = {
  onRoll: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Dice;
