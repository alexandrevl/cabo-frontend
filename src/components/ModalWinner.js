import React, { useEffect, useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import SocketContext from "./SocketContext";
// import GameContext from "./GameContext.js";
import trophy from "./../img/trophy.gif";

export default function ModalWinner() {
  // const gameSettings = useContext(GameContext);
  const socket = useContext(SocketContext);
  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    socket.on("endGame", team => {
      console.log("EndGame", team);
      setWinner(team.name);
      open();
    });
  });

  function close() {
    setShowModal(false);
  }

  function open() {
    setShowModal(true);
  }

  return (
    <div>
      <Modal
        show={showModal}
        onHide={close}
        animation={false}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="text-center">Time Vencedor</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src={trophy} width="400vw" alt="VS" />
            <br />
            <h1>{winner}</h1>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="success">Próxima Rodada</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
