import { Fragment } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound";
import ThankYou from "./pages/ThankYou";
import Terms from "./components/Terms/Terms";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import ForgotPassword from "./pages/ForgotPassword";
import MessageSent from "./pages/MessageSent";
import Candidate from "./components/Candidate/Candidate";
import Main from "./pages/Main/Main";
import AxiosProvider from "./api/ApiContext/AxiosContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProvideAuth } from "./utils/hooks/useAuth";
import { PrivateRoute } from "./components/PrivateRoute/ProtectedRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <ProvideAuth>
      <AxiosProvider>
        <QueryClientProvider client={queryClient}>
          <Fragment>
            <Router>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/thanks" component={ThankYou} />
                <Route exact path="/faq" component={FAQ} />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/terms" component={Terms} />
                <Route
                  exact
                  path="/forgotPassword"
                  component={ForgotPassword}
                />
                <Route exact path="/messageSent" component={MessageSent} />
                <Route exact path="/candidate" component={Candidate} />
                <PrivateRoute component={Main} />
                <Route exact path="*" component={PageNotFound} />
              </Switch>
            </Router>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </Fragment>
        </QueryClientProvider>
      </AxiosProvider>
    </ProvideAuth>
  );
}

export default App;
