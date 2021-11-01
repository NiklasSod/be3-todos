import React from 'react';
import Register from "./components/Register";
import TodoPage from "./components/TodoPage";
import Login from "./components/Login";
import { UserContext } from "./context/userContext";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import LogOutBtn from "./components/LogOutBtn";

function App() {
  const [newUser, setNewUser] = useState(Boolean);
  return (
    <div className="App">
      <header>
        <div className="App-header">
          <h1>Todo List!</h1>
          <LogOutBtn />
        </div>
      </header>
      <div className="container">
        <UserContext.Provider value={{ newUser, setNewUser }}>
          <Switch>
            <Route path="/todoPage" component={TodoPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
