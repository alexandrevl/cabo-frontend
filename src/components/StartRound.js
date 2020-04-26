import React, { useEffect, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import SocketContext from "./SocketContext";
import GameContext from "./GameContext.js";

export default function StartRound() {
  const gameSettings = useContext(GameContext);
  const socket = useContext(SocketContext);
  const [disabled, setDisabled] = useState(false);
  function startRound() {
    socket.emit("nextBattle");
  }
  function showButton() {
    if (!disabled) {
      return (
        <Button
          variant="success"
          size="lg"
          onClick={startRound}
          disabled={disabled}
        >
          Iniciar round {gameSettings.round + 1}
        </Button>
      );
    } else {
      return "";
    }
  }
  useEffect(() => {
    if (gameSettings.gameEnded) {
      setDisabled(true);
    }
  }, [gameSettings.gameEnded]);
  return <div>{showButton()}</div>;
}
