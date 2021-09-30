import logo from "./logo.svg";
import "./App.css";
import About from "./Component/About";
import Shop from "./Component/Shop";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Ref from "./Component/Ref";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}

      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/ref" component={Ref} />
        </Switch>
      </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
