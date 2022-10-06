import React, { useState } from "react";
import LoginForm from "./components/login/LoginForm";
import Dashboard from "./components/dashboard/Dashboard";
import UserList from "./components/user/UserList";
import Navbar from "./components/layout/Navbar";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userList, setUserList] = useState([]);

  return (
    <>
      <Routes>
        {!isLoggedIn && (
          <Route
            path="*"
            element={
              <LoginForm
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                user={userList}
                setUser={setUserList}
              />
            }
          />
        )}
        {isLoggedIn && <Route path="/login" element={<Navigate to="/" />} />}
      </Routes>
      <div className="App" id="root">
        {isLoggedIn && (
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user" element={<UserList />} />
            </Routes>
          </Navbar>
        )}
      </div>
    </>
  );
}

export default App;
