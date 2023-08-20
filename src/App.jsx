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
import { eventSelector } from "./store/features/eventSlice";
import { useSelector } from "react-redux";
import shopping from "./assets/shopping.svg";
import event from "./assets/event.svg";

function App() {
  const [count, setCount] = useState(0);
  const [fakePageState, setPageState] = useState(1);
  const [currentId, setCurrentId] = useState();
  const events = useSelector(eventSelector);

  catFilter();
  return (
    <>
      <Nav setPageState={setPageState} />
      {fakePageState === 1 ? (
        <CalendarComp setPageState={setPageState} setCurrentId={setCurrentId} />
      ) : fakePageState === 3 ? (
        <SearchPage currentId={currentId} />
      ) : fakePageState === 4 ? (
        <ToDo currentId={currentId} />
      ) : (
        <></>
      )}

      <div className="bottom-nav">
        <button
          onClick={() => {
            setPageState(4);
          }}
        >
          <p>dates list</p>
          <img src={event} alt="" />
        </button>
        <button
          onClick={() => {
            setPageState(3);
          }}
        >
          <p>gift ideas</p>
          <img src={shopping} alt="" />
        </button>
      </div>
    </>
  );
}

export default App;
