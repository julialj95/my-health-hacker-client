import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import SubmitLog from "./SubmitLog";
import HomePage from "./HomePage";
import Logs from "./Logs";

function App() {
  return (
    <div>
      <div className="header">
        <Nav />
        <Header />
      </div>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/submit-log" component={SubmitLog} />
        <Route path="/logs" component={Logs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
