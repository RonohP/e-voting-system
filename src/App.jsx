import { Fragment } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import PageNotFound from "./pages/PageNotFound";
import ThankYou from "./pages/ThankYou";
import Terms from "./components/Terms/Terms";
import ForgotPassword from "./pages/ForgotPassword";
import MessageSent from "./pages/MessageSent";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/thanks" component={ThankYou} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/messageSent" component={MessageSent} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
