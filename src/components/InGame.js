import React, { useContext, useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalWinner from "./ModalWinner.js";
import StartRound from "./StartRound.js";
import StartEnterGame from "./StartEnterGame.js";
import Powers from "./Powers.js";
import Status from "./Status.js";
import koImg from "./../img/ko.png";
// import koAudio from "./../mp3/ko.mp3";
import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
// import NameCloud from "./NameCloud.js";
import ListPlayersText from "./ListPlayersText.js";
import GameContext from "./GameContext.js";
import SocketContext from "./SocketContext.js";
import Team1Context from "./Team1Context.js";
import Team2Context from "./Team2Context.js";

export default function InGame() {
  let played = useRef();
  const socket = useContext(SocketContext);
  const gameSettings = useContext(GameContext);
  const [startButtonShow, setStartButtonShow] = useState(false);
  const [winner, setWinner] = useState(false);
  const [inKo, setInKo] = useState(false);
  const team1 = useContext(Team1Context);
  const team2 = useContext(Team2Context);

  var koAudio = new Audio("./mp3/ko.mp3");
  played.current = false;
  socket.on("result", team => {
    setWinner(team);
  });

  useEffect(() => {
    setStartButtonShow(false);
    if (
      gameSettings.round > 0 &&
      !gameSettings.battle.isPlay &&
      !played.current
    ) {
      // console.log(
      //   gameSettings.round,
      //   gameSettings.battle.isPlay,
      //   played.current
      // );
      played.current = true;
      setInKo(true);
      setTimeout(() => {
        koAudio.volume = 0.5;
        koAudio.play();
        // console.log("Q");
      }, 1500);
    } else {
      played.current = false;
    }
    // eslint-disable-next-line
  }, [gameSettings.round, gameSettings.battle.isPlay]);
  function showKO() {
    if (gameSettings.round > 0) {
      setTimeout(() => {
        setStartButtonShow(true);
        setInKo(false);
      }, 5000);
      return (
        <>
          <Animated
            animationIn="zoomInUp"
            animationInDuration={3000}
            isVisible={true}
          >
            <img src={koImg} width="100%" alt="KO" />
            <br />
            <br />
            <h1 className="display-2">{winner.name}</h1>
          </Animated>
          <br />
          <br />
          <br />
          <br />
          {startButtonShow ? <StartRound /> : ""}
        </>
      );
    } else {
      return (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <StartRound />
        </>
      );
    }
  }
  if (gameSettings.battle.isPlay) {
    return (
      <div>
        <Container fluid className="h-100">
          <Row className="justify-content-md-center">
            <Col xs lg="1" className="text-center align-middle">
              <Powers
                powers={gameSettings.team1.powers}
                battle={gameSettings.battle}
              />
            </Col>
            <Col xs lg="5" className="text-center align-middle">
              <Status team={gameSettings.team1} battle={gameSettings.battle} />
            </Col>
            <Col xs lg="5" className="text-center align-middle">
              <Status team={gameSettings.team2} battle={gameSettings.battle} />
            </Col>
            <Col xs lg="1" className="text-center align-middle">
              <Powers
                powers={gameSettings.team2.powers}
                battle={gameSettings.battle}
              />
            </Col>
          </Row>
        </Container>
        <ModalWinner gameSettings={gameSettings} />
      </div>
    );
  } else if (!gameSettings.teamsChoosed) {
    return (
      <div>
        <Container fluid className="h-100">
          <Row className="justify-content-md-center h-100">
            <Col xs lg="5" className="text-center align-middle">
              <ListPlayersText team={team1} />
            </Col>
            <Col xs lg="2" className="text-center align-middle">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <StartEnterGame />
            </Col>
            <Col xs lg="5" className="text-center align-middle">
              <ListPlayersText team={team2} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container fluid className="h-100">
          <Row className="justify-content-md-center h-100">
            <Col xs lg="5" className="text-center align-middle">
              {!inKo && <ListPlayersText team={team1} />}
            </Col>
            <Col xs lg="2" className="text-center align-middle">
              {showKO()}
            </Col>
            <Col xs lg="5" className="text-center align-middle">
              {!inKo && <ListPlayersText team={team2} />}
            </Col>
          </Row>
        </Container>
        <ModalWinner gameSettings={gameSettings} />
      </div>
    );
  }
}
