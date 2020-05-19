import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faFire, faFireAlt } from '@fortawesome/free-solid-svg-icons';

export default function Status(props) {
	const [visible, setVisible] = useState(false);
	const [battleId, setBattleId] = useState(true);
	const [faSettings, setFaSettings] = useState({
		attack: { icon: faFireAlt, color: 'red' },
		defense: { icon: faShieldAlt, color: 'blue' },
	});
	const [timeAnimation] = useState(30000);

	useEffect(() => {
		if (battleId !== props.battle.id) {
			setVisible(true);
			setBattleId(props.battle.id);
		}
		if (props.team.id === 1) {
			setFaSettings({
				attack: { icon: faFireAlt, color: 'red' },
				defense: { icon: faShieldAlt, color: 'blue' },
			});
		} else {
			setFaSettings({
				attack: { icon: faFire, color: 'red' },
				defense: { icon: faShieldAlt, color: 'green' },
			});
		}
		setTimeout(() => {
			setVisible(false);
		}, 3000);
	}, [battleId, props.battle.id, props.team.id]);

	if (props.battle.isPlay) {
		return (
			<div>
				<Container fuild>
					<Row>
						<Col>
							<Animated animationOut="zoomOut" animationOutDuration={timeAnimation} isVisible={visible}>
								<h1>
									<FontAwesomeIcon icon={faSettings.attack.icon} color={faSettings.attack.color} size="5x" />
									<br />
									{props.team.status.hitPoints}
								</h1>
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
							<Animated animationOut="zoomOut" animationOutDuration={timeAnimation} isVisible={visible}>
								<h1>
									<FontAwesomeIcon icon={faSettings.defense.icon} color={faSettings.defense.color} size="3x" />
									<br />
									{Math.floor(props.team.powers.defense.value / 2)}
								</h1>
							</Animated>
						</Col>
					</Row>
					<Row>
						<Col>{/* <Animated
                animationOut="zoomOut"
                animationOutDuration={timeAnimation}
                isVisible={visible}
              >
                <h1>SE: + {props.team.status.energy}</h1>
              </Animated> */}</Col>
					</Row>
				</Container>
			</div>
		);
	} else {
		return <div></div>;
	}
}
