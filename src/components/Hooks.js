import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../actions/templateActions";
import { DivSC, Paper } from "./Styles";

export default function Hooks() {
  // grabbing global state
  const count = useSelector((state) => state.counter);

  // receive dispatch function
  const dispatch = useDispatch();

  return (
    <>
      <h1>Hooks</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment(4))}>Increment by 4</button>

      <br />
      <br />
      <Paper>This is paper.</Paper>
      <DivSC>This is a styled component</DivSC>
    </>
  );
}
