import React, { useContext } from "react";
import GameContext from "./GameContext.js";
import vsImg from "./../img/vs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";

export default function LifeBar() {
  const gameSettings = useContext(GameContext);

  let styleReversed = {
    direction: "rtl"
  };

  function round() {
    if (gameSettings.winner) {
      return "FINAL";
    } else if (gameSettings.round > 0) {
      return "Round " + gameSettings.round;
    } else if (gameSettings.round === 0) {
      return "";
    }
  }
  function roundsWonTeam1() {
    let result = [];
    let qntVictory = 0;
    for (let index = 0; index < gameSettings.team1.roundsWon; index++) {
      result.push(<FontAwesomeIcon icon={faCheckCircle} color="lime" />);
      ++qntVictory;
    }
    for (let index = qntVictory; index < gameSettings.winRounds; index++) {
      result.push(<FontAwesomeIcon icon={faCircleRegular} color="lime" />);
    }
    return result;
  }
  function roundsWonTeam2() {
    let result = [];
    let qntVictory = 0;
    for (let index = 0; index < gameSettings.team2.roundsWon; index++) {
      result.push(<FontAwesomeIcon icon={faCheckCircle} color="lime" />);
      ++qntVictory;
    }
    for (let index = qntVictory; index < gameSettings.winRounds; index++) {
      result.push(<FontAwesomeIcon icon={faCircleRegular} color="lime" />);
    }
    return result;
  }
  if (gameSettings) {
    // console.log("gameSettings", gameSettings.lifeBar);
    return (
      <div>
        <br />
        <Container fluid>
          <Row>
            <Col xs lg="5">
              <ProgressBar
                style={{ height: 30 + "px" }}
                max={gameSettings.team1.MAX_LIFE}
              >
                <ProgressBar
                  variant="danger"
                  max={gameSettings.team1.MAX_LIFE}
                  now={gameSettings.team1.MAX_LIFE - gameSettings.team1.life}
                  key={1}
                />
                <ProgressBar
                  variant="warning"
                  animated
                  max={gameSettings.team1.MAX_LIFE}
                  now={gameSettings.team1.life}
                  key={2}
                />
              </ProgressBar>
            </Col>
            <Col xs lg="2">
              <img src={vsImg} width="45vw" alt="VS" />
            </Col>
            <Col xs lg="5">
              <ProgressBar
                style={{ height: 30 + "px" }}
                max={gameSettings.team2.MAX_LIFE}
              >
                <ProgressBar
                  variant="warning"
                  animated
                  now={gameSettings.team2.life}
                  max={gameSettings.team2.MAX_LIFE}
                  key={1}
                />
                <ProgressBar
                  variant="danger"
                  max={gameSettings.team2.MAX_LIFE}
                  now={gameSettings.team2.MAX_LIFE - gameSettings.team2.life}
                  key={2}
                />
              </ProgressBar>
            </Col>
          </Row>
          <Row>
            <Col xs lg="3">
              <ProgressBar
                style={{ height: 8 + "px" }}
                max={gameSettings.team1.MAX_ENERGY}
              >
                <ProgressBar
                  animated
                  // variant="success"
                  max={gameSettings.team1.MAX_ENERGY}
                  now={gameSettings.team1.status.energy}
                  key={2}
                />
                {/* <ProgressBar
                  max={gameSettings.team1.MAX_ENERGY}
                  variant="danger"
                  now={
                    gameSettings.team1.MAX_ENERGY -
                    gameSettings.team1.status.energy
                  }
                  key={1}
                /> */}
              </ProgressBar>
            </Col>
            <Col xs lg="6"></Col>
            <Col xs lg="3">
              <ProgressBar
                style={{ height: 8 + "px", direction: "rtl" }}
                max={gameSettings.team2.MAX_ENERGY}
              >
                {/* <ProgressBar
                  variant="danger"
                  max={gameSettings.team2.MAX_ENERGY}
                  now={
                    gameSettings.team2.MAX_ENERGY -
                    gameSettings.team2.status.energy
                  }
                  key={2}
                /> */}
                <ProgressBar
                  animated
                  max={gameSettings.team2.MAX_ENERGY}
                  // variant="success"
                  now={gameSettings.team2.status.energy}
                  style={styleReversed}
                  key={1}
                />
              </ProgressBar>
            </Col>
          </Row>
          <Row>
            <Col xs lg="2" className="text-left">
              <h4>{gameSettings.team1.name}</h4>
            </Col>
            <Col xs lg="3" className="text-right">
              {roundsWonTeam1()}
            </Col>
            <Col xs lg="2" className="text-center">
              <h4>{round()}</h4>
            </Col>
            <Col xs lg="3" className="text-left">
              {roundsWonTeam2()}
            </Col>
            <Col xs lg="2" className="text-right">
              <h4>{gameSettings.team2.name}</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return "Alow";
  }
}
