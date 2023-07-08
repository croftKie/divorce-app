import { useState } from "react";
import "./App.css";
import { getData } from "./utils/fetchData";
import { catFilter } from "./utils/catFilter";
import SearchPage from "./components/SearchPage";
import Coupleinfo from "./Components/Coupleinfo";
import CalendarComp from "./components/CalendarComp";
import { Route, Routes, Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  catFilter();
  return (
    <>
      {/* <div className="navcontainerbox">
        <nav>
          <ul><li>
          <Link to="/" CalendarComp />
            </li></ul>
     
      <Coupleinfo />
      </nav>
      </div>
      <Routes>
      <Route exact path="/" element={<CalendarComp />}></Route>
        <Route exact path="/about" element={<Coupleinfo />}></Route>
        <Route exact path="/listings" element={<ToDoList/>}></Route>
      </Routes>
    </> */}
  );
}

export default App;
