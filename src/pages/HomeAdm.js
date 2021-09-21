import React, { Component, useState, useEffect } from "react";
import { Form, Button, Card, Alert, ListGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import Board from "react-trello";
import Modal from "react-modal";
import CloseButton from "react-bootstrap/CloseButton";

export default function HomeAdm() {
  const [userData, setUserData] = useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const history = useHistory();

  const navigateToHome = (event) =>{
    history.push("/homeadm");
  }
  const navigateToGraph = (event) =>{
    history.push("/graphics");
  }
  const navigateToProducts = (event) =>{
    history.push("/produtos");
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
  function sendPedido(e) {
    console.log(e);
    let id = Math.round(Math.random() * 1000);
    let card = {
      id,
      title: id,
      description: "Pedido",
      label: "30 mins",
    };

    let board = JSON.parse(localStorage.getItem("dataBoard"));
    board.lanes[0].cards.push(card);
    localStorage.setItem("dataBoard", JSON.stringify(board));
  }

  return (
    <>
      <Navbar
        expand="lg"
        variant="light"
        bg="light"
        style={{ paddingLeft: "30px" }}
      >
        <div style={{ display: "flex" }}>
          <Navbar.Brand onClick={e => navigateToHome(e)}>Alpha</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={e => navigateToHome(e)}>Pedidos</Nav.Link>
            <Nav.Link onClick={e => navigateToProducts(e)}>Produtos</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className="container">
        <div
          className="container"
          style={{
            borderRadius: "5px",
            padding: "20px",
            position: "absolute",
            marginTop: "40px",
            width: "100%",
            backgroundColor: "#ccc",
            height: "900px",
            marginLeft: "-20px",
          }}
        >
          <h2>Criar Pedido</h2>
          <Form>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                maxWidth: "920px",
              }}
            >
              <div>Produtos</div>
              <div>Quantidade</div>
            </div>
            <Form.Group

              className="mb-3"
              controlId="formBasicCheckbox"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                maxWidth: "900px",
              }}
            >
              <Form.Check
                type="checkbox"
                label="Refrigerante, Coca-Cola"
                value="Refrigerante, Coca-Cola"
              />
              <Form.Control size="sm" type="text" style={{ width: "50px" }} />
            </Form.Group>
            <Form.Group

              className="mb-3"
              controlId="formBasicCheckbox"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                maxWidth: "900px",
              }}
            >
              <Form.Check type="checkbox" label="Hamburger, X-burger" />
              <Form.Control size="sm" type="text" style={{ width: "50px" }} />
            </Form.Group>
            <Form.Group

              className="mb-3"
              controlId="formBasicCheckbox"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                maxWidth: "900px",
              }}
            >
              <Form.Check type="checkbox" label="Sanduíche, Atum" />
              <Form.Control size="sm" type="text" style={{ width: "50px" }} />
            </Form.Group>
            <Form.Group

              className="mb-3"
              controlId="formBasicCheckbox"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                maxWidth: "900px",
              }}
            >
              <Form.Check type="checkbox" label="Suco, Uva" />
              <Form.Control size="sm" type="text" style={{ width: "50px" }} />
            </Form.Group>
            <Form.Group

              className="mb-3"
              controlId="formBasicCheckbox"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                maxWidth: "900px",
              }}
            >
              <Form.Check type="checkbox" label="Salgado" />
              <Form.Control size="sm" type="text" style={{ width: "50px" }} />
            </Form.Group>
            <Form.Group

              className="mb-3"
              controlId="formBasicCheckbox"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                maxWidth: "900px",
              }}
            >
              <Form.Check type="checkbox" label="Batada Frita" />
              <Form.Control size="sm" type="text" style={{ width: "50px" }} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                maxWidth: "900px",
              }}
            >
              <Form.Check type="checkbox" label="Caldo de Cana" />
              <Form.Control size="sm" type="text" style={{ width: "50px" }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="comments.ControlTextarea1">
              <Form.Label>Observações</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button
              onClick={(e) => sendPedido(e)}
              variant="primary"
              type="submit"
              style={{ width: "100px" }}
            >
              Criar
            </Button>
          </Form>
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
          <h2>Pedido X criado com sucesso</h2>
        </div>
      </Modal>
    </>
  );
}
