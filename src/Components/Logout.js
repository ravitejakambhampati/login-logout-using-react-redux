import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

const Logout = () => {
  const user = useSelector(selectUser);
  const dipstach = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dipstach(logout());
  };

  return (
    <div>
      <h1> Welcome {user.name}</h1>
      <button className="logout-btn" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
