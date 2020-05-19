import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Emojis from './Emojis';

export default function Powers(props) {
	function url_emoji(emoji) {
		let img = 'img/emojis/' + Emojis[emoji];
		return img;
	}

	if (props.battle.isPlay) {
		return (
			<div>
				<Container fluid>
					<Row>
						<Col>
							<img src={url_emoji(props.powers.attack.displayEmoji)} width="45vw" alt="img1" />
						</Col>
						<Col className="text-center align-middle">
							<h3>Ataque</h3>
						</Col>
					</Row>
					<br />
					<br />
					<Row>
						<Col>
							<img src={url_emoji(props.powers.energy.displayEmoji)} width="45vw" alt="img1" />
						</Col>
						<Col className="text-center align-middle">
							<h3>Mana</h3>
						</Col>
					</Row>
					<br />
					<br />
					<Row>
						<Col className="text-center align-middle">
							<img src={url_emoji(props.powers.defense.displayEmoji)} width="45vw" alt="img1" />
						</Col>
						<Col className="text-center align-middle">
							<h3>Defesa</h3>
						</Col>
					</Row>
				</Container>
			</div>
		);
	} else {
		return <div></div>;
	}
}
