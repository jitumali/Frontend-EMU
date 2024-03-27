import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import history from "./Utils/history";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import PrivateRoutes from "./PrivateRoutes/privateRoutes";
import Dashboard from "./Screens/Dashboard/Dashboard";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <PrivateRoutes path="/dashbord" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
