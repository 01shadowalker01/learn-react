import reactLogo from "./assets/react.svg";
import "./App.css";
import MyButton from "./MyButton.js";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>{count}</h1>
      <div className="actions">
        <MyButton text={"Increase"} onClick={increase} />
        <MyButton text={"Decrease"} onClick={decrease} />
      </div>
    </>
  );
}

export default App;
