import { useState } from "react";
import "./App.css";
import { getData } from "./utils/fetchData";
import { catFilter } from "./utils/catFilter";
import SearchPage from "./components/SearchPage";

function App() {
  const [count, setCount] = useState(0);
  catFilter();
  return <SearchPage />;
}

export default App;
