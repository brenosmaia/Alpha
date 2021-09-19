import React, { Component, useState, useEffect } from "react";
import { Form, Button, Card, Alert, ListGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import Board from "react-trello";
import Modal from "react-modal";
import CloseButton from "react-bootstrap/CloseButton";

export default function Home() {
  const [userData, setUserData] = useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const history = useHistory();

  const navigateToHome = (event) => {
    history.push("/home");
  };

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  const data = {
    lanes: [
      {
        id: "liberado",
        title: "Liberado",
        label: "2/2",
        cards: [
          {
            id: "Card1",
            title: "Write Blog",
            description: "Can AI make memes",
            label: "30 mins",
          },
          {
            id: "Card2",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
        ],
      },
      {
        id: "preparo",
        title: "Em Preparo",
        label: "2/2",
        cards: [
          {
            id: "Card3",
            title: "Write Blog",
            description: "Can AI make memes",
            label: "30 mins",
          },
          {
            id: "Card4",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
        ],
      },
      {
        id: "atendido",
        title: "Atendido Totalmente",
        label: "2/2",
        cards: [
          {
            id: "Card5",
            title: "Write Blog",
            description: "Can AI make memes",
            label: "30 mins",
          },
          {
            id: "Card6",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
        ],
      },
      {
        id: "finalizado",
        title: "Finalizado",
        label: "2/2",
        cards: [
          {
            id: "Card7",
            title: "Write Blog",
            description: "Can AI make memes",
            label: "30 mins",
          },
          {
            id: "Card8",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
        ],
      },
    ],
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#343a40",
      color: "white",
      display: "flex",
      width: "700px",
      flexDirection: "column",
    },
  };

  return (
    <>
      <Navbar
        expand="lg"
        variant="light"
        bg="light"
        style={{ paddingLeft: "30px" }}
      >
        <div style={{ display: "flex" }}>
          <Navbar.Brand onClick={(e) => navigateToHome(e)}>Alpha</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={(e) => navigateToHome(e)}>
              Visualizar pedidos
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className="container">
        <div
          className="container"
          style={{
            position: "absolute",
            marginTop: "40px",
            width: "100%",

            marginLeft: "-20px",
          }}
        >
          <Board
            data={data}
            onCardClick={openModal}
            style={{
              backgroundColor: "rgb(253 253 253 / 69%)",
            }}
          />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>Pedido X</h2>
          <CloseButton variant="white" onClick={closeModal}></CloseButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>2 coxinhas</div>
          <div>1 coquinha</div>
          <div>1 pizza de 2 dias</div>
          <div>1 canja pra viajem</div>
          <div>1 sobremesa</div>
          {/* <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form> */}
        </div>
      </Modal>
    </>
  );
}
