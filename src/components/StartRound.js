import React, { useEffect, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Spinner } from "react-bootstrap";
import SocketContext from "./SocketContext";
import GameContext from "./GameContext.js";

export default function StartRound() {
  const gameSettings = useContext(GameContext);
  const socket = useContext(SocketContext);
  const [disabled, setDisabled] = useState(false);
  const [waiting, setWaiting] = useState(false);
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
      if (waiting) {
        return (
          <>
            <Spinner
              animation="border"
              variant="white"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
            <h3>Configurando sistema</h3>
          </>
        );
      } else {
        return "";
      }
    }
  }
  useEffect(() => {
    if (gameSettings.roundDisabled) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    if (gameSettings.waiting) {
      setWaiting(true);
    } else {
      setWaiting(false);
    }
  }, [gameSettings.roundDisabled, gameSettings.waiting]);
  return <div>{showButton()}</div>;
}
