import React from "react";
import { useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="app">
    </div>
  );
}

export default App;
