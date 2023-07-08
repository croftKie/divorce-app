import { useState } from "react";
import "./App.css";
import { getData } from "./utils/fetchData";

function App() {
  const [count, setCount] = useState(0);
  getData();
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
