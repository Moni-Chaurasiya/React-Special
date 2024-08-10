import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/useContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>School College MahaSchool MahaCollege</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
