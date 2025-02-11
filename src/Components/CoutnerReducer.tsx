import React, { useReducer } from "react";

const initialCount = { count: 0 };

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };

    case "reset":
      return initialCount;

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
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default CoutnerReducer;
