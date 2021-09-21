import React, { Component, useState, useEffect } from "react";
import { Form, Button, Card, Alert, ListGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import CloseButton from "react-bootstrap/CloseButton";

export default function Produtos() {
  const [userData, setUserData] = useState({});
  const history = useHistory();

  let subtitle;
  let nome;
  let descricao;
  let preco;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const navigateToHome = (event) => {
    history.push("/homeadm");
  };

  const navigateToGraph = (event) => {
    history.push("/graphics");
  };

  const navigateToProducts = (event) => {
    history.push("/produtos");
  };

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

  const [arrayProdutos, setArrayProdutos] = useState(JSON.parse(localStorage.getItem("arrayProdutos")));
  function xpto() {
    let produto = { nome: nome, descricao: descricao, preco: preco };
    let arrayAux = arrayProdutos;
    arrayAux.push(produto);
    setArrayProdutos(arrayAux);

    localStorage.setItem("arrayProdutos", JSON.stringify(arrayAux));
    closeModal();
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
      >
        {" "}
        <div style={{ display: "flex" }}>
          <Navbar.Brand onClick={(e) => navigateToHome(e)}>Alpha</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={(e) => navigateToHome(e)}>Pedidos</Nav.Link>
            <Nav.Link onClick={(e) => navigateToProducts(e)}>Produtos</Nav.Link>
            <Nav.Link onClick={(e) => navigateToGraph(e)}>Gráficos</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={openModal}
          style={{
            backgroundColor: "rgb(253 253 253 / 69%)",
            marginTop: "5px",
          }}
        >
          {" "}
          Criar Produto{" "}
        </Button>
      </div>
      <div style={{ fontSize: "40px", color: "white" }}>Produtos</div>

<<<<<<< HEAD
      <div className="container">
        <table class="produtosTabela" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>
          <tbody>
            {arrayProdutos && (
              <div>
                {arrayProdutos.map((produto) => {
                  <tr>
                    <td>{produto.nome}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.preco}</td>
                    {console.log(produto)}
                  </tr>;
                })}
              </div>
            )}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2
            style={{ color: "black" }}
            ref={(_subtitle) => (subtitle = _subtitle)}
          >
            Criar produto
          </h2>
          <CloseButton onClick={closeModal}></CloseButton>
=======
        <div className="container">
           
            <table class="produtosTabela" style={{ width: "100%" }}>
                <thead>
                    <tr style={{color: "white",
                                fontFamily: "bald",
                                fontSize: "20px"}}>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Preço</th>
                    </tr>
                </thead>
                <tbody>
                <tr style={{color: "white",
                            fontSize: "15px"}}>
                    <th scope="col">Refrigerante</th>
                    <th scope="col">Coca-cola</th>
                    <th scope="col">R$ 5,50</th>
                </tr>
                <tr style={{color: "white",
                            fontSize: "15px"}}>
                    <th scope="col">Hamburger</th>
                    <th scope="col">X-burguer</th>
                    <th scope="col">R$ 10,00</th>
                </tr>
                <tr style={{color: "white",
                            fontSize: "15px"}}>
                    <th scope="col">Sanduíche</th>
                    <th scope="col">Atum</th>
                    <th scope="col">R$ 7,00</th>
                </tr>
                <tr style={{color: "white",
                            fontSize: "15px"}}>
                    <th scope="col">Suco</th>
                    <th scope="col">Uva</th>
                    <th scope="col">R$ 7,00</th>
                </tr>
                <tr style={{color: "white",
                            fontSize: "15px"}}>
                    <th scope="col">Salgado</th>
                    <th scope="col"></th>
                    <th scope="col">R$ 5,00</th>
                </tr>
                <tr style={{color: "white",
                            fontSize: "15px"}}>
                    <th scope="col">Batata frita</th>
                    <th scope="col"></th>
                    <th scope="col">R$ 5,00</th>
                </tr>
                <tr style={{color: "white",
                            fontSize: "15px"}}>
                    <th scope="col">Caldo de cana</th>
                    <th scope="col"></th>
                    <th scope="col">R$ 4,00</th>
                </tr>
                </tbody>
            </table>
>>>>>>> 68cd6f2371eb585542f9e2211bb2524fdc04f4e9
        </div>
        <form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <label>Nome: </label>
            <input
              onInput={(e) => (nome = e.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <label>Descrição: </label>
            <input
              onInput={(e) => (descricao = e.target.value)}
              value={descricao}
              style={{ marginLeft: "10px" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <label>Preço: </label>
            <input
              onInput={(e) => (preco = e.target.value)}
              value={preco}
              style={{ marginLeft: "10px" }}
            />
          </div>

          <Button style={{ marginTop: "10px" }} onClick={() => xpto()}>
            Salvar produto
          </Button>
        </form>
      </Modal>
    </>
  );
}
