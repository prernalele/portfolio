import { useState } from "react";
import Project from "./components/Project";
import profilePic from "./assets/zionNationalPark.jpg";
import PlatePal from "./assets/PlatePal.png";
import adviceGenerator from "./assets/adviceGenerator.png";
import WhereInTheWorld from "./assets/WhereInTheWorld.png";
import NewsletterSignup from "./assets/NewsletterSignup.png";
import "./App.css";

function App() {
  const projectsCollection = [
    {
      key: 1,
      title: "PlatePal",
      image: PlatePal,
      link: "https://platepal2.netlify.app/",
      githubLink: "https://github.com/chingu-voyages/V53-tier2-team-25",
    },
    {
      key: 2,
      title: "Advice generator",
      image: adviceGenerator,
      link: "https://prernalele.github.io/adviceGenerator/",
      githubLink: "https://github.com/prernalele/adviceGenerator",
    },
    {
      key: 3,
      title: "Where in the world?",
      image: WhereInTheWorld,
      link: "https://prernalele.github.io/countries-api-main/",
      githubLink: "https://github.com/prernalele/countries-api-main",
    },
    {
      key: 4,
      title: "Newsletter sign up",
      image: NewsletterSignup,
      link: "https://prernalele.github.io/code-challenge-newsletter-sign-up/",
      githubLink:
        "https://github.com/prernalele/code-challenge-newsletter-sign-up",
    },
    // {
    //   key: 5,
    //   title: "Grid Lights Game",
    //   image: NewsletterSignup,
    //   link: "https://prernalele.github.io/countries-api-main/",
    // },
  ];

  return (
    <main className=" max-h-full max-w-full flex flex-col gap-6 font-mono text-opacity-90 justify-center">
      <section className="text-4xl lg:text-2xl font-extrabold">
        Prerna Lele
      </section>
      <section className="flex flex-col gap-2">
        <h3 className="text-3xl lg:text-xl font-bold">About Me</h3>
        <p className="text-sm">
          Welcome to my portfolio! I am Prerna Lele, a Frontend developer with 4
          years of relevant experience and a decade of overall industry
          experience. I love turning Figma designs to user friendly, responsive
          interactive screens for users. I have also been a Quality Assurance
          Professional and has led quality efforts in my previous experiences
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <h3 className="text-3xl lg:text-xl font-bold">Projects</h3>
        <div className="flex flex-col lg:flex-row gap-10  lg:flex-wrap justify-center items-center">
          {projectsCollection.map((project) => {
            const { key, title, image, link, githubLink } = project;
            return (
              <Project
                key={key}
                title={title}
                image={image}
                link={link}
                githubLink={githubLink}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
