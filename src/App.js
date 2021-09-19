import './App.css';
import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./services/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import HomeAdm from "./pages/HomeAdm";
import Graphics from "./pages/Graphics"
import Home from "./pages/Home"
import Produtos from "./pages/Produtos"
import Orders from "./pages/Orders"


function App() {
  return (
    <Container className="bg-dark text-black" style={{ minHeight: "100vh", width:"100%" }}>
      <Router>
        <AuthProvider>
          <Switch>
            {/* <PrivateRoute exact path="/" component={Home} /> */}
            <Route exact path="/" component={Login} />
            <Route path="/homeadm" component={HomeAdm} />
            <Route path="/graphics" component={Graphics} />   
            <Route path="/home" component={Home} />   
            <Route path="/produtos" component={Produtos} />   
            <Route path="/orders" component={Orders} />   
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;