import React, { Component, useState, useEffect } from "react";
import { Form, Button, Card, Alert, ListGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import Board from "react-trello";
import Modal from "react-modal";
import CloseButton from "react-bootstrap/CloseButton";

export default function Home() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("dataBoard"))
  );
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const history = useHistory();

  const navigateToHome = (event) => {
    history.push("/home");
  };
  const navigateToOrders = (event) => {
    history.push("/orders");
  };
  const navigateToProducts = (event) => {
    history.push("/produtos");
  };


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function changeBoard(e) {
    setData(e);
    localStorage.setItem("dataBoard", JSON.stringify(e));
  }

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
              Pedidos
            </Nav.Link>
            <Nav.Link onClick={(e) => navigateToOrders(e)}>
              Criar pedidos
            </Nav.Link>
            <Nav.Link onClick={(e) => navigateToProducts(e)}>
              Produtos
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
            onDataChange={(e) => changeBoard(e)}
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
          <div>1 Refrigerante, Coca-Cola</div>
          <div>2 Hamburger, X-burger</div>
          <div>1 Salgado</div>
          <div
            style={{
              margin: "20px",
            }}
          >
            Hamburguer sem ovo
          </div>
        </div>
      </Modal>
    </>
  );
}
