import React, { useState, useEffect } from 'react';
import Table from './Table.js';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Styles = styled.div`
	padding: 1rem;

	table {
		border-spacing: 0;
		border: 0px;
		width: 200px;

		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}

		th,
		td {
			text-align:right
			margin: 0;
			padding: 0.5rem;
			border-bottom: 0px;
			border-right: 0px;

			:last-child {
				border-right: 0;
			}
		}
	}
`;

export default function ListPlayers(props) {
	const [players, setPlayers] = useState([]);
	useEffect(() => {
		let result = [];
		console.log(props);
		if (props.team) {
			props.team.forEach(element => {
				result.push({ name: element.name });
			});
		}
		console.log(result);
		setPlayers(result);
	}, [props, props.team]);

	return (
		<Container>
			<Row>
				<Col>
					<Styles>
						<Table
							columns={[
								{ Header: 'Nome', accessor: 'name', id: 'name' },
							]}
							data={players}
						/>
					</Styles>
				</Col>
			</Row>
		</Container>
	);
}
