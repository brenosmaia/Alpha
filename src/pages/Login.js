import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // let response = await login(
      //   emailRef.current.value,
      //   passwordRef.current.value
      // );
      // if (response.code === "auth/wrong-password") {
      //   throw "Email e senha não conferem";
      // }
      // if(response.body.isAdm){
      //   history.push("/homeadm");
      // }
      // else{
      //   history.push("/home");
      // }
      history.push("/home");
    } catch (e) {
      e == "Email e senha não conferem"
        ? setError(e)
        : setError("Falha ao logar");
    }

    setLoading(false);
  }
  function initializeBoard(){
    localStorage.setItem("dataBoard",
      JSON.stringify({
        lanes: [
          {
            id: "liberado",
            title: "Liberado",
            label: "2/2",
            cards: [
              {
                id: "Card1",
                title: "704",
                description: "Pedido",
                label: "30 mins",
              },
              {
                id: "Card2",
                title: "127",
                description: "Pedido",
                label: "60 mins",
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
                title: "368",
                description: "Pedido",
                label: "30 mins",
              },
              {
                id: "Card4",
                title: "052",
                description: "Pedido",
                label: "50 mins",
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
                title: "631",
                description: "Pedido",
                label: "30 mins",
              },
              {
                id: "Card6",
                title: "172",
                description: "Pedido",
                label: "20 mins",
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
                title: "742",
                description: "Pedido",
                label: "30 mins",
              },
              {
                id: "Card8",
                title: "654",
                description: "Pedido",
                label: "5 mins",
                metadata: { sha: "be312a1" },
              },
            ],
          },
        ],
      })
    );
  }
  

  useEffect(() => {
    console.log(currentUser);
    initializeBoard()
  },[]);

  return (
    <>
      <div
        className="w-100"
        style={{
          position: "relative",
          marginTop: "25vh",
          maxWidth: "400px",
          alignSelf: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Card
          style={{
            display: "block",
          }}
        >
          <Card.Body>
            <h2 className="text-center mb-4">Entrar</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  placeholder="insira seu e-mail"
                  type="email"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  placeholder="insira sua senha"
                  type="password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button
                  disabled={loading}
                  style={{ margin: "10px" }}
                  className="w-40 btn-lg"
                  type="submit"
                >
                  Entrar
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
