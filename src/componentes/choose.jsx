import React from "react";
const Choose = (props) => {
  let firstPlayer = props.activePlayer.playerOne.name;
  let firstWeapon = props.activePlayer.playerOne.weapon;
  let pickWeapon = (e, id) => {
    let input1 = document.getElementById("playerOne");
    let input2 = document.getElementById("playerTwo");
    props.setActivePlayer((prevState) => {
      if (
        props.activePlayer.playerOne.weapon === "" &&
        props.activePlayer.playerTwo.weapon === ""
      ) {
        return {
          ...prevState,
          playerOne: {
            ...prevState.playerOne,
            weapon: id,
          },
          active: id,
        };
      } else if (
        props.activePlayer.playerOne.weapon !== "" &&
        props.activePlayer.playerOne.weapon !== id &&
        props.activePlayer.playerTwo.weapon === ""
      ) {
        input1.value = "";
        input2.value = "";
        return {
          ...prevState,
          playerTwo: {
            ...prevState.playerTwo,
            weapon: id,
          },
        };
      } else if (
        props.activePlayer.playerOne.weapon !== "" &&
        props.activePlayer.playerOne.weapon === id
      ) {
        alert("Weapon already chosen");
        return { ...prevState };
      } else if (
        props.activePlayer.playerOne.weapon !== "" &&
        props.activePlayer.playerTwo.weapon !== ""
      ) {
        alert("Completa los datos");
        return { ...prevState };
      }
    });
  };
  return (
    <div
      className={"chooseBoard text-center " + (props.isChoosed ? "d-none" : "")}
    >
      <h2 className="text-center py-3">Choose your weapon</h2>
      <input
        id="playerOne"
        placeholder="Player One Name"
        className="mr-3 rounded border-0 pl-1"
        onChange={(e) => {
          let playerName = e.target.value;
          props.setActivePlayer((prevState) => {
            return {
              ...prevState,
              playerOne: { ...prevState.playerOne, name: playerName },
            };
          });
        }}
      ></input>
      <input
        id="playerTwo"
        placeholder="Player Two Name"
        className="rounded border-0 pl-1"
        disabled={firstWeapon === ""}
        onChange={(e) => {
          let playerName = e.target.value;
          props.setActivePlayer((prevState) => {
            return {
              ...prevState,
              playerTwo: { ...prevState.playerTwo, name: playerName },
            };
          });
        }}
      ></input>
      <div className="weapons d-flex justify-content-center mt-4">
        <div
          id="X"
          className="weapon weaponX mr-4 d-flex justify-content-center align-items-center"
          onClick={(e) => {
            let id = e.target.id;
            pickWeapon(e, id);
          }}
        >
          X
        </div>
        <div
          id="O"
          className="weapon weaponO ml-4 d-flex justify-content-center align-items-center"
          onClick={(e) => {
            let id = e.target.id;
            pickWeapon(e, id);
          }}
        >
          O
        </div>
      </div>
    </div>
  );
};

export default Choose;
