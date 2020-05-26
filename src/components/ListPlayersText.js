import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function getRandomInt(min, max) {
  //console.log(min,max);
  if (Math.ceil(min) === Math.floor(max)) {
    return min;
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default function ListPlayers(props) {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    let result = null;
    let colors = [
      "#1f77b4",
      "#ff7f0e",
      "#2ca02c",
      "#d62728",
      "#9467bd",
      "#8c564b"
    ];
    if (props.team) {
      console.log(props.team);
      result = props.team.map(element => {
        let color = colors[getRandomInt(0, colors.length - 1)];
        let size = 20;
        if (element.isChatSponsor) {
          size = 30;
          color = "yellow";
        }
        return (
          <span style={{ color: color, fontSize: size }}>{element.name}, </span>
        );
      });
    }
    console.log(result);
    setPlayers(result);
  }, [props, props.team]);

  return (
    <Container>
      <Row>
        <Col>
          <b>{players}</b>
        </Col>
      </Row>
    </Container>
  );
}
