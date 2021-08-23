import React, { useContext, useState, useEffect } from "react";
var axios = require("axios").default;

const AuthContext = React.createContext();


export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  async function createUser(enrolment, password) {
    let options = {
      method: "POST",
      url: `http://localhost:9980`,
      params: { enrolment: `${enrolment}`, password: `${password}` },
      headers: {},
    };

    await axios
    .request(options)
    .then((response) => {
      setCurrentUser(response.data);
    })
    .catch((error) => {
      alert(error);
    });
  }

  async function login(enrolment, password) {
    let options = {
      method: "GET",
      url: `http://localhost:9980`,
      params: { enrolment: `${enrolment}`, password: `${password}` },
      headers: {},
    };

    await axios
    .request(options)
    .then((response) => {
      setCurrentUser(response.data);
    })
    .catch((error) => {
      alert(error);
    });
  }

  function logout() {
    setCurrentUser(false);
  }

  useEffect(() => {
  }, []);

  const value = {
    currentUser,
    login,
    createUser,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
