import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="w-full h-screen text-zinc-900 dark:text-zinc-100">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
