import React, { useState, useEffect } from "react";

import Generator from "./Generator";

import "./App.css";

const generator = new Generator();

const App = () => {
  const [val, setVal] = useState();

  useEffect(() => {
    generator.subscribe((x) => {
      setVal(x);
    });

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
