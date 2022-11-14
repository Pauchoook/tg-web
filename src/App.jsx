import React from "react";
import { useEffect } from "react";
const tg = window.Telegram.WebApp;
import './App.css';

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  function onClose() {
    tg.close();
  }

  return (
    <div className="app">
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
