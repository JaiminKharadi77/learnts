import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin} className="bg-red-100 p-2">
        Login
      </button>
      <br />
      <button onClick={handleLogout} className="bg-yellow-50">
        Logout
      </button>
      <div>User is {isLoggedIn? "logged in" : "logged out"}</div>
    </div>
  );
};
