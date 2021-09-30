import "./App.css";
import Users from "./components/Users";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/users/">
            <Users />
          </Route>

          <Route path="/">
            <p>Hello! First page!</p>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
