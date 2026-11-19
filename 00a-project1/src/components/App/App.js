import "./App.scss";
import Input from "../Input/Input";
import { useEffect, useState } from "react";
import Home from "../Home/Home";
import Login from "../Login/Login";

// Custom hook to manage localStorage
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default function App() {
  const creds = ["shahidmz", "Welcome@1"];
  const title = "React Project 1";

  const [loggedIn, setLoggedIn] = useLocalStorage("LoggedIn", false);
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username + ": " + password);

    if (username === creds[0] && password === creds[1]) {
      console.log("Logged in!");
      setShowError(false);
      setLoggedIn(true);

      resetDefaults();
    } else {
      console.log("Wrong credentials!");
      setShowError(true);
    }
  }

  function resetDefaults() {
    setUsername(null);
    setPassword(null);
  }

  function handleLogout() {
    setLoggedIn(false);
  }

  return (
    <div className="App">
      {!loggedIn ? (
        <Login
          title={title}
          showError={showError}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        ></Login>
      ) : (
        <>
          <Home handleLogout={handleLogout}></Home>
        </>
      )}
    </div>
  );
}
