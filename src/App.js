import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import history from "./Utils/history";
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;
