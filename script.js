function CreatePlayer(symbol) {
  const playerName = symbol;
  let getPlayerName = () => playerName;

  return { getPlayerName };
}

function Gameboard(player1, player2) {
  let allTiles = new Array(9).fill("");
  let currPlayer = player2;
  let isGameOver = false;

  let updateTile = (event, tileId) => {
    allTiles[Number(tileId)] = currPlayer.getPlayerName();
    event.target.innerHTML = currPlayer.getPlayerName();
  };

  let getAllTiles = () => allTiles;

  let toggleTurn = () => {
    currPlayer = currPlayer == player1 ? player2 : player1;
    document.querySelector(
      ".whoseturn"
    ).innerHTML = `Now Playing: ${currPlayer.getPlayerName()}`;
  };

  let getCurrentPlayer = () => currPlayer;

  let didWin = (tileId) => {
    let winningtiles = [];
    let winnerfound = false;
    let mark = currPlayer.getPlayerName();
    switch (Number(tileId)) {
      case 0:
        console.log(`case ${tileId}`);
        if (allTiles[1] == mark && allTiles[2] == mark) {
          winningtiles.push(String(1));
          winningtiles.push(String(2));
          winningtiles.push(String(0));
          winnerfound = true;
        } else if (allTiles[3] == mark && allTiles[6] == mark) {
          winningtiles.push(String(3));
          winningtiles.push(String(6));
          winningtiles.push(String(0));
          winnerfound = true;
        } else if (allTiles[4] == mark && allTiles[8] == mark) {
          winningtiles.push(String(4));
          winningtiles.push(String(8));
          winningtiles.push(String(0));
          winnerfound = true;
        }
        break;

      case 1:
        console.log(`case ${tileId}`);
        if (allTiles[0] == mark && allTiles[2] == mark) {
          winningtiles.push(String(1));
          winningtiles.push(String(2));
          winningtiles.push(String(0));
          winnerfound = true;
        } else if (allTiles[4] == mark && allTiles[7] == mark) {
          winningtiles.push(String(4));
          winningtiles.push(String(7));
          winningtiles.push(String(1));
          winnerfound = true;
        }
        break;

      case 2:
        if (allTiles[1] == mark && allTiles[0] == mark) {
          winningtiles.push(String(1));
          winningtiles.push(String(2));
          winningtiles.push(String(0));
          winnerfound = true;
        } else if (allTiles[4] == mark && allTiles[6] == mark) {
          winningtiles.push(String(2));
          winningtiles.push(String(6));
          winningtiles.push(String(4));
          winnerfound = true;
        } else if (allTiles[5] == mark && allTiles[8] == mark) {
          winningtiles.push(String(2));
          winningtiles.push(String(8));
          winningtiles.push(String(5));
          winnerfound = true;
        }
        break;

      case 3:
        if (allTiles[0] == mark && allTiles[6] == mark) {
          winningtiles.push(String(3));
          winningtiles.push(String(0));
          winningtiles.push(String(6));
          winnerfound = true;
        } else if (allTiles[4] == mark && allTiles[5] == mark) {
          winningtiles.push(String(3));
          winningtiles.push(String(4));
          winningtiles.push(String(5));
          winnerfound = true;
        }
        break;

      case 4:
        if (allTiles[2] == mark && allTiles[6] == mark) {
          winningtiles.push(String(4));
          winningtiles.push(String(2));
          winningtiles.push(String(6));
          winnerfound = true;
        } else if (allTiles[3] == mark && allTiles[5] == mark) {
          winningtiles.push(String(4));
          winningtiles.push(String(3));
          winningtiles.push(String(5));
          winnerfound = true;
        } else if (allTiles[0] == mark && allTiles[8] == mark) {
          winningtiles.push(String(4));
          winningtiles.push(String(0));
          winningtiles.push(String(8));
          winnerfound = true;
        } else if (allTiles[1] == mark && allTiles[7] == mark) {
          winningtiles.push(String(4));
          winningtiles.push(String(1));
          winningtiles.push(String(7));
          winnerfound = true;
        }
        break;

      case 5:
        if (allTiles[2] == mark && allTiles[8] == mark) {
          winningtiles.push(String(5));
          winningtiles.push(String(2));
          winningtiles.push(String(8));
          winnerfound = true;
        } else if (allTiles[3] == mark && allTiles[4] == mark) {
          winningtiles.push(String(3));
          winningtiles.push(String(4));
          winningtiles.push(String(5));
          winnerfound = true;
        }
        break;

      case 6:
        if (allTiles[0] == mark && allTiles[3] == mark) {
          winningtiles.push(String(0));
          winningtiles.push(String(3));
          winningtiles.push(String(6));
          winnerfound = true;
        } else if (allTiles[2] == mark && allTiles[4] == mark) {
          winningtiles.push(String(6));
          winningtiles.push(String(2));
          winningtiles.push(String(4));
          winnerfound = true;
        } else if (allTiles[7] == mark && allTiles[8] == mark) {
          winningtiles.push(String(6));
          winningtiles.push(String(8));
          winningtiles.push(String(7));
          winnerfound = true;
        }
        break;

      case 7:
        if (allTiles[1] == mark && allTiles[4] == mark) {
          winningtiles.push(String(1));
          winningtiles.push(String(4));
          winningtiles.push(String(7));
          winnerfound = true;
        } else if (allTiles[6] == mark && allTiles[8] == mark) {
          winningtiles.push(String(7));
          winningtiles.push(String(6));
          winningtiles.push(String(8));
          winnerfound = true;
        }
        break;

      case 8:
        console.log(`Case is ${tileId}`);
        if (allTiles[0] == mark && allTiles[4] == mark) {
          winningtiles.push(String(4));
          winningtiles.push(String(8));
          winningtiles.push(String(0));
          winnerfound = true;
        } else if (allTiles[2] == mark && allTiles[5] == mark) {
          winningtiles.push(String(2));
          winningtiles.push(String(5));
          winningtiles.push(String(8));
          winnerfound = true;
        } else if (allTiles[6] == mark && allTiles[7] == mark) {
          winningtiles.push(String(6));
          winningtiles.push(String(8));
          winningtiles.push(String(7));
          winnerfound = true;
        }
        break;

      default:
        return false;
    }
    if (winnerfound == true) {
      winningtiles.forEach((elem) => {
        console.log(`elem Id is ${elem} of type ${typeof elem}`);
        document.getElementById(`${Number(elem)}`).style.backgroundColor =
          "yellow";
      });
      return winnerfound;
    }
  };

  let gameOver = (didWin) => {
    if (didWin) {
      document.querySelector(".whoseturn").style.color = "white";

      setTimeout(() => {
        console.log("Player Won");
        document.querySelector(
          ".gbcontainer"
        ).innerHTML = `<span> ${currPlayer.getPlayerName()} Wins!</span>`;
      }, 1000);
    } else {
      setTimeout(() => {
        document.querySelector(".whoseturn").innerHTML = "";

        console.log("GAME OVER");
        document.querySelector(
          ".gbcontainer"
        ).innerHTML = `<span> Game Over </span> `;
      }, 1000);
    }
  };

  return {
    updateTile,
    getAllTiles,
    toggleTurn,
    getCurrentPlayer,
    didWin,
    gameOver,
  };
}

let game = (() => {
  let player1 = CreatePlayer("X");
  let player2 = CreatePlayer("O");
  let counter = 0;
  // console.log(player1.getPlayerName());
  // console.log(player2.getPlayerName());

  let board = Gameboard(player1, player2);
  board.toggleTurn();
  console.log(board.getCurrentPlayer().getPlayerName());
  board.toggleTurn();
  console.log(board.getAllTiles());

  let allTiles = document.querySelectorAll(".tile");
  allTiles.forEach((aTile) => {
    aTile.addEventListener("click", (evt) => {
      board.updateTile(evt, evt.target.id);
      let gameover = board.didWin(evt.target.id);
      counter++;
      if (gameover) {
        board.gameOver(true);
      } else if (counter == 9) {
        board.gameOver(false);
      } else {
        board.toggleTurn();
      }
    });
  });
})();
