import React, { useState, useEffect } from "react";

import Generator from "./entities/Generator";
import Computer from "./entities/Computer";
import CalculatingMachine from "./entities/CalculatingMachine";
import constants from "./constants";

import "./App.css";

const generator = new Generator();
const computer1 = new Computer(constants.entities.computer1);
const computer2 = new Computer(constants.entities.computer2);
const calculatingMachine = new CalculatingMachine([computer1, computer2]);

const App = () => {
  const [val, setVal] = useState();

  useEffect(() => {
    generator.subscribe((task) => {
      console.log(task);
      setVal(task);
      // calculatingMachine.executeTask(task);
    });

    // calculatingMachine.subscribe((val) => console.log(val));

    return () => {
      generator.unsubscribeAll();
    };
  }, []);

  return (
    <div>
      <span>{val}</span>
    </div>
  );
};

export default App;
