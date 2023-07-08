import { useState } from "react";
import "./App.css";
import { getData } from "./utils/fetchData";
import { catFilter } from "./utils/catFilter";
import SearchPage from "./components/SearchPage";
import Coupleinfo from "./Components/Coupleinfo";
import CalendarComp from "./components/CalendarComp";
import ToDo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);
  const [fakePageState, setFakePageState] = useState(1);
  catFilter();
  return (
    <>
      {fakePageState === 1 ? (
        <CalendarComp />
      ) : fakePageState === 2 ? (
        <Coupleinfo />
      ) : fakePageState === 3 ? (
        <SearchPage />
      ) : fakePageState === 4 ? (
        <ToDo />
      ) : (
        <></>
      )}

      <div>
        <button
          onClick={() => {
            setFakePageState(2);
          }}
        >
          couples
        </button>
        <button
          onClick={() => {
            setFakePageState(3);
          }}
        >
          search
        </button>
        <button
          onClick={() => {
            setFakePageState(4);
          }}
        >
          todo
        </button>
        <button
          onClick={() => {
            setFakePageState(5);
          }}
        >
          favouritess
        </button>
      </div>
    </>
  );
}

export default App;
