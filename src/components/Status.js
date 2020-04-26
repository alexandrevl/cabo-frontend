import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";

export default function Status(props) {
  const [visible, setVisible] = useState(true);
  const [battleId, setBattleId] = useState(true);
  const [timeAnimation] = useState(20000);

  useEffect(() => {
    if (battleId !== props.battle.id) {
      setVisible(true);
      setBattleId(props.battle.id);
    }
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }, [battleId, props.battle.id]);

  if (props.battle.isPlay) {
    return (
      <div>
        <Container fuild>
          <Row>
            <Col>
              <Animated
                animationOut="zoomOut"
                animationOutDuration={timeAnimation}
                isVisible={visible}
              >
                <h1>H: + {props.team.status.hitPoints}</h1>
              </Animated>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <Animated
                animationOut="zoomOut"
                animationOutDuration={timeAnimation}
                isVisible={visible}
              >
                <h1>A: + {props.team.powers.attack.value}</h1>
              </Animated>
            </Col>
          </Row> */}
          {/* <Row>
            <Col>
              <Animated
                animationOut="zoomOut"
                animationOutDuration={timeAnimation}
                isVisible={visible}
              >
                <h1>E: + {props.team.powers.energy.value}</h1>
              </Animated>
            </Col>
          </Row> */}
          <Row>
            <Col>
              <Animated
                animationOut="zoomOut"
                animationOutDuration={timeAnimation}
                isVisible={visible}
              >
                <h1>D: + {Math.floor(props.team.powers.defense.value / 2)}</h1>
              </Animated>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <Animated
                animationOut="zoomOut"
                animationOutDuration={timeAnimation}
                isVisible={visible}
              >
                <h1>SE: + {props.team.status.energy}</h1>
              </Animated> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return <div></div>;
  }
}
