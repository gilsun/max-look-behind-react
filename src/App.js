import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const handleShowToggle = () => {
    setShowParagraph(!showParagraph);
  };
  console.log("app is running");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p> I'm Gilsun</p>}
      <Button onClick={handleShowToggle}>Show my Name toggle </Button>
    </div>
  );
}

export default App;
