import React, { Component, useState, useEffect } from "react";
import { Form, Button, Card, Alert, ListGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";

export default function Produtos() {
    const [userData, setUserData] = useState({});
    const history = useHistory();
    
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
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

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#f00";
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
        },
    };
    
    return (
        <>
         <Navbar
            expand="lg"
            variant="light"
            bg="light"
            style={{ paddingLeft: "30px" }}
        >  <div style={{ display: "flex" }}>
            <Navbar.Brand onClick={(e) => navigateToHome(e)}>Alpha</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link onClick={e => navigateToHome(e)}>Criar pedidos</Nav.Link>
            <Nav.Link onClick={e => navigateToProducts(e)}>Criar produtos</Nav.Link>
            <Nav.Link onClick={e => navigateToGraph(e)}>Vizualizar gráficos</Nav.Link>
          </Nav>
            </div>
        </Navbar>
        <Button
            onClick={openModal}
            style={{
              backgroundColor: "rgb(253 253 253 / 69%)",
            }}
          > Criar Produto </Button>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <form>
                <label></label>
                <input/>
                <input/>
            </form>
        </Modal>
    </>
    );
}