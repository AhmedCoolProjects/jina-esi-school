import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBottomBarNavC from "./app/components/TopBottomBarNavC";
import DashboardP from "./app/pages/DashboardP";
import LoginP from "./app/pages/LoginP";
import AboutP from "./app/pages/AboutP";
import "./base.css";
import { selectUser } from "./features/userSlice";
import ChatRoomP from "./app/pages/ChatRoomP";
import RoomP from "./app/pages/RoomP";
import ProfileP from "./app/pages/ProfileP";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {true ? (
        <Router>
          <TopBottomBarNavC />
          <Switch>
            <Route exact path="/">
              <DashboardP />
            </Route>
            <Route path="/about">
              <AboutP />
            </Route>
            <Route path="/chatRoom">
              <ChatRoomP />
            </Route>
            <Route path="/room">
              <RoomP />
            </Route>
            <Route path="/profile">
              <ProfileP />
            </Route>
          </Switch>
        </Router>
      ) : (
        <LoginP />
      )}
    </div>
  );
}

export default App;
