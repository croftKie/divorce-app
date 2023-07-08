import { useState } from "react";
import "./css/App.css";
import { getData } from "./utils/fetchData";
import { catFilter } from "./utils/catFilter";
import SearchPage from "./components/SearchPage";
import Coupleinfo from "./Components/Coupleinfo";
import CalendarComp from "./components/CalendarComp";
import ToDo from "./components/Todo";
import FavouriteList from "./components/FavouriteList";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);
  const [fakePageState, setPageState] = useState(1);
  const [currentId, setCurrentId] = useState();

  catFilter();
  return (
    <>
      <Nav />
      {fakePageState === 1 ? (
        <CalendarComp setPageState={setPageState} setCurrentId={setCurrentId} />
      ) : fakePageState === 2 ? (
        <Coupleinfo currentId={currentId} />
      ) : fakePageState === 3 ? (
        <SearchPage currentId={currentId} />
      ) : fakePageState === 4 ? (
        <ToDo currentId={currentId} />
      ) : fakePageState === 5 ? (
        <FavouriteList currentId={currentId} />
      ) : (
        <></>
      )}

      <div>
        <button
          onClick={() => {
            setPageState(2);
          }}
        >
          couples
        </button>
        <button
          onClick={() => {
            setPageState(3);
          }}
        >
          search
        </button>
        <button
          onClick={() => {
            setPageState(4);
          }}
        >
          todo
        </button>
        <button
          onClick={() => {
            setPageState(5);
          }}
        >
          favouritess
        </button>
      </div>
    </>
  );
}

export default App;
