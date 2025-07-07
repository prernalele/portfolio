import { useState } from "react";
import Project from "./components/Project";
import profilePic from "./assets/citiesBackground.png";
import PlatePal from "./assets/PlatePal.png";
import adviceGenerator from "./assets/adviceGenerator.png";
import WhereInTheWorld from "./assets/WhereInTheWorld.png";
import NewsletterSignup from "./assets/NewsletterSignup.png";
import addToCart from "./assets/addToCart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import Resume from "./assets/Resume.pdf";
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
      title: "Add to Cart",
      image: addToCart,
      link: "https://prernalele.github.io/add-to-cart/",
      githubLink: "https://github.com/prernalele/add-to-cart",
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
    {
      key: 5,
      title: "Advice generator",
      image: adviceGenerator,
      link: "https://prernalele.github.io/adviceGenerator/",
      githubLink: "https://github.com/prernalele/adviceGenerator",
    },
  ];
  const [emailCopied, setEmailCopied] = useState(false);
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/prerna-lele/");
  };

  async function copyText() {
    try {
      await navigator.clipboard.writeText("prernalele@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.log("failed to copy email", err);
    }
  }

  return (
    <main className=" max-h-full max-w-full flex flex-col gap-6 font-mono text-opacity-90 justify-center">
      <section className="flex flex-col lg:flex-row items-center justify-center gap-y-4">
        <div className="ml-10 size-[50%] lg:size-[40%]">
          <img src={profilePic} className="rounded-md"></img>
        </div>
        <section className="flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-6">
            <h1 className="text-4xl font-extrabold ml-6 ">Prerna Lele</h1>
            <div className="flex flex-row lg:justify-around justify-center ">
              <div className="ml-2 mr-2 p-2 hover:bg-red-400 hover:duration-300 hover:rounded-md  ">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="size-6"
                  onClick={openLinkedIn}
                />
              </div>
              <div
                className="mr-1 hover:bg-red-400 hover:duration-300 hover:rounded-md p-2"
                onClick={copyText}
              >
                <FontAwesomeIcon icon={faEnvelope} className="size-6 mr-2" />
                <span>{emailCopied ? "Email Copied" : "Email"}</span>
              </div>
              <div className="hover:bg-red-400 hover:duration-300 hover:rounded-md p-2">
                <button className=" ">
                  <a href={Resume} download="Prerna Lele Resume">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="pr-2 size-6"
                    />
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>

          <p className="text-sm m-4 p-2 text-justify">
            Welcome to my portfolio! I am Prerna Lele, a Frontend developer with
            4 years of relevant experience and a decade of overall industry
            experience. I love turning Figma designs to user friendly,
            responsive interactive screens for users. I have also been a Quality
            Assurance Professional and has led quality efforts in my previous
            experiences
          </p>
        </section>
      </section>
      <section className="flex flex-col gap-4">
        <h3 className="text-3xl font-semibold">Projects</h3>
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
