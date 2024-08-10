import { useState, useContext } from "react";
import userContext from "../context/useContext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        value={password}
        onChange={(event) => setpassword(event.target.value)}
        type="text"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Login;
