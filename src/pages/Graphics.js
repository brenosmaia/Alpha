import React, { Component, useState, useEffect } from "react";
import { Form, Button, Card, Alert, ListGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";

export default function Graphics() {
  const [userData, setUserData] = useState({});
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
            <Nav.Link onClick={e => navigateToHome(e)}>Criar pedidos</Nav.Link>
            <Nav.Link onClick={e => navigateToProducts(e)}>Criar produtos</Nav.Link>
            <Nav.Link onClick={e => navigateToGraph(e)}>Vizualizar gráficos</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div
        style={{
          width: "1910px",
          height: "950px",
          marginLeft: "-400px",
        }}
      >
        <Card
          className="align-item-center"
          style={{
            position: "absolute",
            marginTop: "100px",
            backgroundColor: "rgb(253 253 253 / 69%)",
            marginLeft: "850px",
          }}
        >
          <Card.Body className="text-left">Bem vindo aos gráficos Alpha!</Card.Body>
        </Card>
      </div>
    </>
  );
}
