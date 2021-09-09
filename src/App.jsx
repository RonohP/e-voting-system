import { Fragment } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PageNotFound from "./pages/PageNotFound";
import ThankYou from "./pages/ThankYou";
import ForgotPassword from "./components/NotificationCards/ForgotPassword";

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
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Router>
      <div>
        <ForgotPassword />
      </div>
    </Fragment>
  );
}

export default App;
