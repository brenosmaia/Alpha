import React, { Component, useState, useEffect } from "react";
import { Form, Button, Card, Alert, ListGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import Board from "react-trello";
import Modal from "react-modal";
import CloseButton from "react-bootstrap/CloseButton";

export default function Orders() {
  const [userData, setUserData] = useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const history = useHistory();

  const navigateToHome = (event) => {
    history.push("/home");
  };

  const navigateToOrders = (event) => {
    history.push("/orders");
  };

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
            <Nav.Link onClick={(e) => navigateToOrders(e)}>
              Criar pedidos
            </Nav.Link>
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
              <Form.Check type="checkbox" label="item 1" />
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
              <Form.Check type="checkbox" label="item 2" />
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
              <Form.Check type="checkbox" label="item 3" />
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
              <Form.Check type="checkbox" label="item 4" />
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
              <Form.Check type="checkbox" label="item 5" />
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
              <Form.Check type="checkbox" label="item 6" />
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
              <Form.Check type="checkbox" label="item 7" />
              <Form.Control size="sm" type="text" style={{ width: "50px" }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="comments.ControlTextarea1">
              <Form.Label>Observações</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: "100px" }} >
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
