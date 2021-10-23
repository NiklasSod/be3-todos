import Register from "./components/Register";
import TodoPage from "./components/TodoPage";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

function App() {
  return (
    <div className="App">
      <header>
      <h1 className="App-header">Todo List!</h1>
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
