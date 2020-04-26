import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import SocketContext from "./SocketContext";
import GameContext from "./GameContext.js";

export default function StartRound() {
  const gameSettings = useContext(GameContext);
  const [textButton, setTextButton] = useState("Coletar jogadores");
  const [variant, setVariant] = useState("info");
  const socket = useContext(SocketContext);

  function handleEnter() {
    if (!gameSettings.gettingPlayers) {
      socket.emit("getPlayers");
      setVariant("danger");
      setTextButton("Parar de coletar jogadores");
    } else {
      socket.emit("stopGetPlayers");
    }
  }
  return (
    <div>
      <Button variant={variant} size="lg" onClick={handleEnter}>
        {textButton}
      </Button>
    </div>
  );
}
