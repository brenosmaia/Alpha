import React, { Component, useState, useEffect } from "react";
import { Form, Button, Card, Alert, ListGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import Board from "react-trello";
import Modal from "react-modal";

export default function Home() {
  const [userData, setUserData] = useState({});
  const history = useHistory();

  const navigateToHome = (event) => {
    history.push("/home");
  };
  //   const navigateToGraph = (event) =>{
  //     history.push("/graphics");
  //   }

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const data = {
    lanes: [
      {
        id: "lane1",
        title: "Planned Tasks",
        label: "2/2",
        cards: [
          {
            id: "Card1",
            title: "Write Blog",
            description: "Can AI make memes",
            label: "30 mins",
            draggable: false,
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
        id: "lane2",
        title: "Completed",
        label: "0/0",
        cards: [],
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
            {/* <Nav.Link onClick={e => navigateToGraph(e)}>Vizualizar gráficos</Nav.Link> */}
          </Nav>
        </div>
      </Navbar>
      <div
        className="container"
        // style={{
        //   width: "1910px",
        //   height: "950px",
        //   marginLeft: "-400px",
        // }}
      >
        {/* <Card
          className="align-item-center"
          style={{
            position: "absolute",
            marginTop: "100px",
            backgroundColor: "rgb(253 253 253 / 69%)",
            marginLeft: "850px",
          }}
        ></Card> */}
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
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
  );
}
