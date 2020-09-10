import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import AuthService from "./services/auth.service";

import Login from "./components/UserAuth/Login";
import Signup from "./components/UserAuth/Signup";
import Home from "./components/HomePage/Home";
import Profile from "./components/UserAuth/Profile";
import BoardUser from "./components/Header/BoardUser";
import BoardModerator from "./components/Header/BoardModerator";
import BoardAdmin from "./components/Header/BoardAdmin";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "./components/Header/Navigation";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      dispatch({ type: "SET_USERNAME", username: user });
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, [dispatch]);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <Router>
      <Navigation
        logOut={logOut}
        showAdminBoard={showAdminBoard}
        showModeratorBoard={showModeratorBoard}
        currentUser={currentUser}
      />
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route
            path="/user"
            component={localStorage.getItem("user") !== null ? BoardUser : Home}
          />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
