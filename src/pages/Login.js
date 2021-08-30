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
      history.push("/home");
    } catch (e) {
      e == "Email e senha não conferem"
        ? setError(e)
        : setError("Falha ao logar");
    }

    setLoading(false);
  }

  useEffect(() => {
    console.log(currentUser);
  });

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
            backgroundColor: "red",
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
