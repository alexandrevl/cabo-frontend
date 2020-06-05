import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import imgAttack1 from "./../img/CaboAtaquePragas.png";
import imgAttack2 from "./../img/CaboAtaqueVermes.png";
import imgDefense1 from "./../img/CaboDefesaVermes.png";
import imgDefense2 from "./../img/CaboDefesaPragas.png";

export default function Status(props) {
  const [visible, setVisible] = useState(false);
  const [battleId, setBattleId] = useState(true);
  const [attack, setAttack] = useState();
  const [defense, setDefense] = useState();
  const [animeIn, setAnimeIn] = useState("flip");
  // const [faSettings, setFaSettings] = useState({
  // 	attack: { icon: faFireAlt, color: 'red' },
  // 	defense: { icon: faShieldAlt, color: 'blue' },
  // });
  const [timeAnimation] = useState(30000);
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

  useEffect(() => {
    if (battleId !== props.battle.id) {
      setVisible(true);
      setBattleId(props.battle.id);
      if (props.team.id === 1) {
        setAttack(<img src={imgAttack2} width="450vw" alt="Ataque" />);
        setDefense(<img src={imgDefense2} width="450vw" alt="Defesa" />);
      } else {
        setAttack(<img src={imgAttack1} width="450vw" alt="Ataque" />);
        setDefense(<img src={imgDefense1} width="450vw" alt="Defesa" />);
      }
      let animeInDomain = [
        "zoomInDown",
        "zoomInUp",
        "backInDown",
        "backInUp",
        "flip",
        "jackInTheBox"
      ];
      setAnimeIn(animeInDomain[getRandomInt(0, animeInDomain.length - 1)]);
      // let sizeAttack = '5x';
      // let sizeDefense = '3x';
      // if (props.team.status.defense && props.team.status.hitPoints < props.team.status.defense.value / 2) {
      // 	sizeAttack = '3x';
      // 	sizeDefense = '5x';
      // }
      // if (props.team.id === 1) {
      // 	setFaSettings({
      // 		attack: { icon: faFireAlt, color: 'red', size: sizeAttack },
      // 		defense: { icon: faShieldAlt, color: 'blue', size: sizeDefense },
      // 	});
      // } else {
      // 	setFaSettings({
      // 		attack: { icon: faFire, color: 'red', size: sizeAttack },
      // 		defense: { icon: faShieldAlt, color: 'green', size: sizeDefense },
      // 	});
      // }
    }
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, [battleId, props]);

  if (props.battle.isPlay) {
    return (
      <div>
        <Container fuild>
          <Row>
            <Col>
              <Animated
                animationOut="zoomOut"
                animationIn={animeIn}
                animationInDuration={800}
                animationOutDuration={timeAnimation}
                isVisible={visible}
              >
                <h1>
                  {attack}
                  <br />
                  {props.team.status.hitPoints}
                </h1>
              </Animated>
            </Col>
          </Row>
          <Row>
            <Col>
              <Animated
                animationOut="zoomOut"
                animationIn={animeIn}
                animationInDuration={800}
                animationOutDuration={timeAnimation}
                isVisible={visible}
              >
                <h1>
                  {defense}
                  <br />
                  {Math.floor(props.team.powers.defense.value / 2)}
                </h1>
              </Animated>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return <div></div>;
  }
}
