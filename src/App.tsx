// src/App.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { increment, decrement, incrementByAmount } from "./store/exampleSlice";

function App() {
  const count = useSelector((state: RootState) => state.example.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">SaveItLater</h1>
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="text-2xl">{count}</span>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}

export default App;
