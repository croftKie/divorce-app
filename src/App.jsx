import { useState } from "react";
import "./App.css";
import { getData } from "./utils/fetchData";
import { catFilter } from "./utils/catFilter";
import SearchPage from "./components/SearchPage";
import Coupleinfo from "./Components/Coupleinfo";
import CalendarComp from "./components/CalendarComp";

function App() {
  const [count, setCount] = useState(0);
  catFilter();
  return <CalendarComp />;
}

export default App;
