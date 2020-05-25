import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListPlayers(props) {
	const [players, setPlayers] = useState([]);
	useEffect(() => {
		let result = "";
		if (props.team) {
			props.team.forEach(element => {
				if (result.length > 0) {
				result = `${result}, ${element.name}`;
				} else {
					result = `${element.name}`;
				}
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
