import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";

function App() {
  return (
    <div className="w-full min-h-screen text-zinc-900 dark:text-zinc-100 no-scrollbar overflow-y-auto dark:bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  );
}

export default App;
