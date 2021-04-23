import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login";
import Signup from "../Signup";
import SubmitLog from "../SubmitLog/SubmitLog";
import HomePage from "../HomePage/HomePage";
import Logs from "../LogsPage/LogsPage";
import "./App.css";
import TokenService from "../services/token-service";
import UserContext from "../UserContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(TokenService.hasAuthToken());
  const [username, setUsername] = useState("");

  const handleLogout = () => {
    console.log("handle logout clicked");
    TokenService.clearAuthToken();
    setLoggedIn(TokenService.hasAuthToken());
  };

  const userInfo = {
    username,
    setUsername,
  };
  console.log("has auth token", TokenService.hasAuthToken());
  return (
    <div className="wrapper">
      <UserContext.Provider value={userInfo}>
        <div className="header">
          <Nav loggedIn={loggedIn} handleLogout={handleLogout} />
          <Header />
        </div>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/login"
            render={(props) => <Login {...props} handleLogin={setLoggedIn} />}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/submit-log" component={SubmitLog} />
          <Route path="/logs" component={Logs} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
