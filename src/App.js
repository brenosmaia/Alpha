import './App.css';
import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./services/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    <Container className="bg-dark text-black" style={{ minHeight: "100vh" }}>
      <Router>
        <AuthProvider>
          <Switch>
            {/* <PrivateRoute exact path="/" component={Home} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />   
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;