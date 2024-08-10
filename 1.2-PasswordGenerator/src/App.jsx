import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLen] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*(){}[]~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <div className="w-full border max-w-md rounded-lg mx-auto my-9 p-2 h-auto bg-gray-900">
      <h2 className="text-3xl text-center mb-2 text-white">
        Password Generator
      </h2>
      <input
        type="text"
        value={password}
        placeholder="Password"
        readOnly
        className="text-white rounded-md w-72 bg-slate-700"
        ref={passwordRef}
      />
      <button
        onClick={copyToClipboard}
        className="bg-blue-600 text-white rounded-sm"
      >
        Copy
      </button>
      <br />
      <div className="mt-5">
        <input
          type="range"
          min={8}
          max={100}
          className="cursor-pointer"
          value={length}
          onChange={(e) => setLen(parseInt(e.target.value))}
        />
        <label className="text-yellow-500 mr-2"> Length: {length}</label>
        <input
          type="checkbox"
          checked={numAllow}
          onChange={() => setNumAllow((prev) => !prev)}
          className="text-white"
        />
        <label className="text-white m-2">Number</label>
        <input
          type="checkbox"
          checked={charAllow}
          onChange={() => setCharAllow((prev) => !prev)}
          className="text-white"
        />
        <label className="text-white m-2">Character</label>
      </div>
    </div>
  );
}

export default App;
