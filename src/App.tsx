import "./App.css";
import {
  decrement,
  increment,
  incrementByValue,
} from "./Redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./Redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex w-full justify-center items-center h-screen ">
        <div className=" gap-6  flex border bg-slate-300 p-5 rounded-md ">
          <button
            onClick={() => dispatch(incrementByValue(5))}
            className="px-3 py-2 rounded-md text-xl bg-green-500 text-white">
            Increment By Value 5
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 rounded-md text-xl bg-green-500 text-white">
            Increment
          </button>
          <h1 className="text-3xl">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 rounded-md text-xl bg-green-500 text-white">
            Decreament
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
