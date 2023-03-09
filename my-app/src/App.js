import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // router setting
import Detail from "./routes/Detail"; // router setting
import Home from "./routes/Home"; // router setting

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;