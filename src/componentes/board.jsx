import React, { useState } from "react";

const Board = (props) => {
  let weapon1 = props.activePlayer.playerOne.weapon;
  let weapon2 = props.activePlayer.playerTwo.weapon;
  let player = props.activePlayer.active;
  let picksOne = props.activePlayer.playerOne.picks;
  let picksTwo = props.activePlayer.playerTwo.picks;

  let playerOneName = props.activePlayer.playerOne.name;
  let playerTwoName = props.activePlayer.playerTwo.name;
  const [playerName, setPlayerName] = useState(playerOneName);

  let choose = (e) => {
    if (e.target.innerHTML === "") {
      e.target.innerHTML = player === "X" ? "X" : player === "O" ? "O" : "";
    } else {
      alert("Pick another spot");
    }
  };

  let changePlayer = (e) => {
    if (player === "X") {
      props.setActivePlayer((prevState) => {
        return { ...prevState, active: "O" };
      });
      setPlayerName(playerTwoName);
    } else if (player === "O") {
      props.setActivePlayer((prevState) => {
        return { ...prevState, active: "X" };
      });
      setPlayerName(playerOneName);
    }
  };

  const picked = (e) => {
    if (player === weapon1) {
      props.activePlayer.playerOne.picks.push(e.target.id);
    } else if (player === weapon2) {
      props.activePlayer.playerTwo.picks.push(e.target.id);
    }
  };

  const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [9, 5, 1],
    [7, 5, 3],
  ];

  let getWinner = () => {
    for (let i = 0; i < winningConditions.length; i++) {
      let winIf = winningConditions[i];
      let playerPicks =
        player === weapon1 ? picksOne : player === weapon2 ? picksTwo : "";
      if (
        playerPicks.includes(winIf[0].toString()) &&
        playerPicks.includes(winIf[1].toString()) &&
        playerPicks.includes(winIf[2].toString())
      ) {
        props.setActivePlayer((prevState) => {
          return { ...prevState, isWinner: true, active: player };
        });
        break;
      } else {
        if (
          props.activePlayer.isWinner === false &&
          picksOne[4] !== "" &&
          picksOne[4] !== undefined
        ) {
          props.setActivePlayer((prevState) => {
            return { ...prevState, isTied: true };
          });
        } else {
          continue;
        }
      }
    }
  };

  let playAgain = () => {
    let cuadros = Array.from(document.querySelectorAll(".cuadro"));
    cuadros.map((el) => {
      el.innerHTML = "";
    });

    props.setActivePlayer({
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

    console.log(cuadros);
  };

  return (
    <div className={!props.isChoosed ? "d-none" : ""}>
      <h2 className="text-center text-light">
        {props.activePlayer.isWinner === false &&
        props.activePlayer.isTied === false
          ? `It's ${player} turn`
          : props.activePlayer.isWinner === true
          ? `${player} wins!`
          : props.activePlayer.isTied === true
          ? "It's a tie"
          : ""}
      </h2>
      <div className="d-flex justify-content-center mb-3 mt-0">
        <button className="btn btn-success mx-auto" onClick={playAgain}>
          Play again
        </button>
      </div>
      <div className={"board d-flex flex-wrap"}>
        <div
          id="1"
          className="cuadro border-top-0 border-left-0"
          onClick={(e) => {
            if (
              props.activePlayer.isWinner === false &&
              props.activePlayer.isTied === false
            ) {
              choose(e);
              changePlayer(e);
              picked(e);
              getWinner();
            }
          }}
        ></div>
        <div
          id="2"
          className="cuadro border-top-0"
          onClick={(e) => {
            if (
              props.activePlayer.isWinner === false &&
              props.activePlayer.isTied === false
            ) {
              choose(e);
              changePlayer(e);
              picked(e);
              getWinner();
            }
          }}
        ></div>
        <div
          id="3"
          className="cuadro border-right-0 border-top-0"
          onClick={(e) => {
            if (
              props.activePlayer.isWinner === false &&
              props.activePlayer.isTied === false
            ) {
              choose(e);
              changePlayer(e);
              picked(e);
              getWinner();
            }
          }}
        ></div>
        <div
          id="4"
          className="cuadro border-left-0"
          onClick={(e) => {
            if (
              props.activePlayer.isWinner === false &&
              props.activePlayer.isTied === false
            ) {
              choose(e);
              changePlayer(e);
              picked(e);
              getWinner();
            }
          }}
        ></div>
        <div
          id="5"
          className="cuadro "
          onClick={(e) => {
            if (
              props.activePlayer.isWinner === false &&
              props.activePlayer.isTied === false
            ) {
              choose(e);
              changePlayer(e);
              picked(e);
              getWinner();
            }
          }}
        ></div>
        <div
          id="6"
          className="cuadro border-right-0"
          onClick={(e) => {
            if (
              props.activePlayer.isWinner === false &&
              props.activePlayer.isTied === false
            ) {
              choose(e);
              changePlayer(e);
              picked(e);
              getWinner();
            }
          }}
        ></div>
        <div
          id="7"
          className="cuadro border-left-0 border-bottom-0"
          onClick={(e) => {
            if (
              props.activePlayer.isWinner === false &&
              props.activePlayer.isTied === false
            ) {
              choose(e);
              changePlayer(e);
              picked(e);
              getWinner();
            }
          }}
        ></div>
        <div
          id="8"
          className="cuadro border-bottom-0"
          onClick={(e) => {
            if (
              props.activePlayer.isWinner === false &&
              props.activePlayer.isTied === false
            ) {
              choose(e);
              changePlayer(e);
              picked(e);
              getWinner();
            }
          }}
        ></div>
        <div
          id="9"
          className="cuadro border-bottom-0 border-right-0"
          onClick={(e) => {
            if (
              props.activePlayer.isWinner === false &&
              props.activePlayer.isTied === false
            ) {
              choose(e);
              changePlayer(e);
              picked(e);
              getWinner();
            }
          }}
        ></div>
      </div>
    </div>
  );
};

export default Board;
