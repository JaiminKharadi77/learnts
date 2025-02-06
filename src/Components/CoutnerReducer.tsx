import React, { useReducer } from "react";

const initialCount = { count: 0 };

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
}

function CoutnerReducer() {
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      Count:{state.count}
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Add
      </button>
      <br />
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Remove
      </button>
    </div>
  );
}

export default CoutnerReducer;
