import "./App.css";
import react, { useState } from "react";

function App() {
  const [username, value] = useState("username");
  const [password, valuePassword] = useState("password");

  const HandleChange = (e) => {
    value(e.target.value);
  };
  const HandleChangePassword = (e) => {
    valuePassword(e.target.value);
  };
  const HandleClick = () => {
    alert(`${username} ${password}`);
  };
  const HandleReset = () => {
    value("");
    valuePassword("");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input type="text" onChange={HandleChange} value={username} />
      <input type="text" value={password} onChange={HandleChangePassword} />
      <button onClick={HandleClick}>login</button>
      <button onClick={HandleReset}>reset</button>
    </div>
  );
}

export default App;
