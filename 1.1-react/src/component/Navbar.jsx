import { useState } from "react";

function Navbar() {
  const [color, setColor] = useState("white");

  return (
    <div className="h-52" style={{ backgroundColor: color }}>
      <div className="">
        <button onClick={() => setColor("blue")} className="m-2 bg-blue-800">
          Blue
        </button>
        <button onClick={() => setColor("black")} className="m-2 bg-black">
          Black
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="m-2 bg-yellow-600"
        >
          Yellow
        </button>
        <button onClick={() => setColor("gray")} className="m-2 bg-gray-600">
          Grey
        </button>
        <button onClick={() => setColor("red")} className="m-2 bg-red-400">
          Pink
        </button>
      </div>
    </div>
  );
}
export default Navbar;
