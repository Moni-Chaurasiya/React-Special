//React fibre architecture --> https://github.com/acdlite/react-fiber-architecture
import { useState } from "react";
import "./App.css";
import Card from "./component/Card";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(15);

  function addNumber() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // Value will be still increase by 1 on one click because it don't take previous value
  }

  function subtractNumber() {
    setCount((prevCount) => prevCount - 1); //14
    setCount((prevCount) => prevCount - 1); //13
    setCount((prevCount) => prevCount - 1); //12
    // As we have used 3 times setCount value will be [ currentValue - 3] on one click
    // setCount(count - 1);
  }

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>React aur React</h1>

      <h3>Current value: {count}</h3>
      <br />
      <button onClick={addNumber}>Add value</button>
      <button onClick={subtractNumber}>Subtract value</button>

      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/cat.jpeg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I ve seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>

      <Card />
    </div>
  );
}

export default App;
