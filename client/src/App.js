import "./App.css";
import Register from "./components/Register";
import TodoPage from "./components/TodoPage";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/todoPage/">
            <TodoPage />
          </Route>

          <Route path="/register/">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
