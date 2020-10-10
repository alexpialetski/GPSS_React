import React, { useState, useEffect } from "react";

import constants from "./constants";
import Generator from "./Generator";
import TaskDistributor from "./TaskDistributor";
import { getExponentialValue, getGaussValue } from "./utils";

import "./App.css";

const generator = new Generator();

const App = () => {
  const [val, setVal] = useState();

  useEffect(() => {
    generator.subscribe((x) => {
      setVal(x);
    });
    // comp1.subscribe((v) => console.log(`observerA: ${v}`));
    // comp2.subscribe((v) => console.log(`observerB: ${v}`));
    // const subscription = taskGenerator$.subscribe((x) => {
    //   setVal(x);
    // });

    return () => {
      generator.unsubscribeAll();
    };
  }, []);

  return <div>{val}</div>;
};

export default App;
