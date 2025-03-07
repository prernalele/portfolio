import { useState } from "react";
import Project from "./components/Project";
import "./App.css";

function App() {
  return (
    <main className="bg-red-200 h-screen m-0 p-0">
      <section className="text-xl font-mono font-extrabold">
        Prerna Lele
      </section>
      <section>
        <h3>About Me</h3>
        <p>
          I am a Frontend developer with 4 years of relevant experience and a
          decade of overall industry experience. I love turning Figma designs to
          user friendly , responsive interactive screens for users.
        </p>
      </section>
      <section className="text-lg">
        Projects
        <div className="flex flex-row gap-12 justify-center">
          <Project title="Add to cart" />
          <Project title="PlatePal" />
        </div>
      </section>
    </main>
  );
}

export default App;
