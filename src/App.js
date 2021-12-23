import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import ListProduct from "./Components/ListProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={ListProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
