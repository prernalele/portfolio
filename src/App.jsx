import { useState } from "react";
import Project from "./components/Project";
import PlatePal from "./assets/PlatePal.png";
import adviceGenerator from "./assets/adviceGenerator.png";
import WhereInTheWorld from "./assets/WhereInTheWorld.png";
import "./App.css";

function App() {
  const projectsCollection = [
    {
      key: 1,
      title: "PlatePal",
      image: PlatePal,
      link: "https://platepal2.netlify.app/",
    },
    {
      key: 2,
      title: "Advice generator",
      image: adviceGenerator,
      link: "https://prernalele.github.io/adviceGenerator/",
    },
    {
      key: 3,
      title: "Where in the world?",
      image: WhereInTheWorld,
      link: "https://prernalele.github.io/countries-api-main/",
    },
  ];
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
          {projectsCollection.map((project) => {
            const { key, title, image, link } = project;
            return (
              <Project key={key} title={title} image={image} link={link} />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
