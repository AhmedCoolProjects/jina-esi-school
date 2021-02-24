import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBottomBarNav__ from "./app/components/TopBottomBarNav__";
import Dashboard_ from "./app/pages/Dashboard_";
import Login_ from "./app/pages/Login_";
import About_ from "./app/pages/About_";
import "./base.css";
import { selectUser } from "./features/userSlice";
import ChatRoom_ from "./app/pages/ChatRoom_";
import Room_ from "./app/pages/Room_";
import Profile_ from "./app/pages/Profile_";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {true ? (
        <Router>
          <TopBottomBarNav__ />
          <Switch>
            <Route exact path="/">
              <Dashboard_ />
            </Route>
            <Route path="/about">
              <About_ />
            </Route>
            <Route path="/chatRoom">
              <ChatRoom_ />
            </Route>
            <Route path="/room">
              <Room_ />
            </Route>
            <Route path="/profile">
              <Profile_ />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Login_ />
      )}
    </div>
  );
}

export default App;
