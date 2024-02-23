import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import AboutAnimate from "./components/AboutAnimate";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";

function App() {
  return (
    <div className="w-full min-h-screen text-zinc-900 dark:text-zinc-100 no-scrollbar overflow-y-auto bg-[#e7e7e7] dark:bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      {/* <AboutAnimate /> */}
      <Eyes />
      <Featured />
    </div>
  );
}

export default App;
