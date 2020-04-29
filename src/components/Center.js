import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InGame from "./InGame.js";
import GameContext from "./GameContext.js";
// import GameContext from "./GameContext.js";

export default function Answers() {
  // const gameSettings = useContext(GameContext);
  const gameSettings = useContext(GameContext);

  if (gameSettings.idLive.length > 0) {
    return <InGame />;
  } else {
    return "https://cabo.mrguinas.com.br/IDDALIVE";
  }
}
