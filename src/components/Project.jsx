import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Project = ({ key, title, image, link, githubLink }) => {
  const openGithubRepo = () => {
    window.open(githubLink);
  };
  const openDemoLink = () => {
    window.open(link);
  };
  return (
    <div className="flex flex-col w-1/3 gap-y-2 ">
      <img src={image} className="rounded-md" />
      <div className="flex flex-row justify-around">
        <button
          onClick={openGithubRepo}
          className="bg-red-300 hover:bg-red-400 text-black opacity-90 font-bold py-2 px-4 rounded"
        >
          <div>
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </button>
        <button
          onClick={openDemoLink}
          class="bg-red-300 hover:bg-red-400  text-black opacity-90 font-bold py-2 px-4 rounded"
        >
          <div>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Project;
