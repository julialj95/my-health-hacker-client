import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
// import Footer from "./Footer";
import Header from "../Header/Header";
import Login from "../Login";
import Signup from "../Signup";
import SubmitLog from "../SubmitLog/SubmitLog";
import HomePage from "../HomePage/HomePage";
import Logs from "../LogsPage/LogsPage";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  changeLoginStatus = (param) => {
    console.log("changeLoginStatus called");
    this.setState({ loggedIn: param });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <Nav loggedIn={this.state.loggedIn} />
          <Header />
        </div>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} handleLogin={this.changeLoginStatus} />
            )}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/submit-log" component={SubmitLog} />
          <Route path="/logs" component={Logs} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
