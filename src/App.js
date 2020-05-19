import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import socketIOClient from 'socket.io-client';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import SocketContext from './components/SocketContext.js';
import GameContext from './components/GameContext.js';
import Team1Context from './components/Team1Context.js';
import Team2Context from './components/Team2Context.js';
import LifeBar from './components/LifeBar.js';
import Center from './components/Center.js';
import victory from './img/victory.gif';

export default function App() {
	const [socket, setSocket] = useState(null);
	const [gameSettings, setGameSettings] = useState(null);
	const [team1, setTeam1] = useState(null);
	const [team2, setTeam2] = useState(null);
	const [isReady, setIsReady] = useState(false);
	const [youtubeOff, setYoutubeOff] = useState(true);

	useEffect(() => {
		let idLive = window.location.pathname.split('/')[1];
		//console.log(window.location);

		let url = 'https://localhost:21266?idLive=' + idLive;
		if (window.location.hostname.includes('mrguinas')) {
			url = 'https://multistreamer.xyz:21266?idLive=' + idLive;
		}
		console.log(url);
		const socket = socketIOClient(url);
		setSocket(socket);
		socket.on('gameSettings', (gameSettings) => {
			setYoutubeOff(false);
			console.log(gameSettings);
			setGameSettings(gameSettings);
			setIsReady(true);
			//socket.emit("nextBattle");
		});
		socket.on('youtubeOff', () => {
			setYoutubeOff(true);
			setIsReady(false);
		});
		socket.on('team1', (team) => {
			setTeam1(team);
		});
		socket.on('team2', (team) => {
			setTeam2(team);
		});
	}, []);
	function notWorking() {
		if (youtubeOff) {
			return 'Uso indevido';
		} else {
			return (
				<Spinner animation="border" variant="dark" style={{ width: '8rem', height: '8rem' }}>
					<span className="sr-only">Loading...</span>
				</Spinner>
			);
		}
	}
	function winner() {
		return 'O ' + this.state.gameSettings.winner + ' VENCEU';
	}

	if (isReady && !youtubeOff) {
		if (gameSettings.winner) {
			return (
				<div className="App">
					<GameContext.Provider value={gameSettings}>
						<Team1Context.Provider value={team1}>
							<Team2Context.Provider value={team2}>
								<SocketContext.Provider value={socket}>
									<LifeBar gameSettings={gameSettings} />
									<br />
									<br />
									<Container fluid>
										<Row className="justify-content-md-center">
											<Col>
												<img src={victory} width="600vw" alt="VS" />
											</Col>
										</Row>
										<br />
										<Row className="justify-content-md-center">
											<Col>
												<h1>
													<b>{winner()}</b>
												</h1>
											</Col>
										</Row>
									</Container>
								</SocketContext.Provider>
							</Team2Context.Provider>
						</Team1Context.Provider>
					</GameContext.Provider>
				</div>
			);
		} else {
			return (
				<div className="App">
					<GameContext.Provider value={gameSettings}>
						<Team1Context.Provider value={team1}>
							<Team2Context.Provider value={team2}>
								<SocketContext.Provider value={socket}>
									<LifeBar gameSettings={gameSettings} />
									<Container fluid className="h-100">
										<Row className="justify-content-md-center">
											<Col></Col>
										</Row>
										<br />
										<br />
										<Row className="justify-content-md-center">
											<Col>
												<Center />
											</Col>
										</Row>
									</Container>
								</SocketContext.Provider>
							</Team2Context.Provider>
						</Team1Context.Provider>
					</GameContext.Provider>
				</div>
			);
		}
	} else {
		return (
			<Container fluid className="align-middle h-100">
				<Row className="justify-content-md-center align-middle h-100">
					<Col className="text-center align-middle h-100">
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						{notWorking()}
					</Col>
				</Row>
			</Container>
		);
	}
}
