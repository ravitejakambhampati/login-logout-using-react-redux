import React from "react";
import { useSelector } from "react-redux";
import Login from "./Components/Login";
import { selectUser } from "./features/userSlice";
import Logout from "./Components/Logout";
function App() {
  const user = useSelector(selectUser);
  return <div>{user ? <Logout /> : <Login />}</div>;
}

export default App;
