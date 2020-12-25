import React from "react";
import { useStateValue } from "./state/StateProvider";
import { actionTypes } from "./state/reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useStateValue();
  console.log(state);

  const incrementHandler = () => {
    dispatch({
      Type: actionTypes.INCREMENT,
      count: 1,
    });
  };

  return (
    <div className="App">
      <button onClick={incrementHandler}>Add +</button>
      <h2>{state.count}</h2>
    </div>
  );
}

export default App;
