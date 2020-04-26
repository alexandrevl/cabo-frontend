import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalWinner from "./ModalWinner.js";
import StartRound from "./StartRound.js";
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import SocketContext from "./SocketContext";
import Emojis from "./Emojis";
import GameContext from "./GameContext.js";

export default function Answers() {
  const gameSettings = useContext(GameContext);
  const [socket, setSocket] = useState(null);
  //const [gameSettings, setGameSettings] = useState(null);
  const [playButton, setPlayButton] = useState({
    title: "Pause",
    variant: "outline-warning"
  });

  //   useEffect(() => {

  //   }, [gameSettings]);

  function url_emoji(emoji) {
    let img = "img/emojis/" + Emojis[emoji];
    return img;
  }

  return (
    <div>
      <StartRound gameSettings={gameSettings} />
    </div>
  );
}
