import React, { useState } from "react";
import Choose from "./choose";
import Board from "./board";

const Game = () => {
  const [activePlayer, setActivePlayer] = useState({
    active: "",
    isWinner: false,
    isTied: false,
    playerOne: {
      name: "",
      weapon: "",
      picks: [],
    },
    playerTwo: {
      name: "",
      weapon: "",
      picks: [],
    },
  });
  let setter = setActivePlayer;

  let gameState = {
    activePlayer: activePlayer,
    setActivePlayer: setter,
  };

  if (
    activePlayer.playerOne.weapon !== "" &&
    activePlayer.playerTwo.weapon !== "" &&
    activePlayer.playerOne.name !== "" &&
    activePlayer.playerTwo.name !== ""
  ) {
    gameState.isChoosed = true;
  }

  return (
    <>
      <Choose {...gameState} />
      <Board {...gameState} />
    </>
  );
};

export default Game;
