import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faPersonChalkboard,
} from "@fortawesome/free-brands-svg-icons";

const Project = ({ key, title, image, link, github }) => {
  const openGithubRepo = () => {
    window.open(github);
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
          <FontAwesomeIcon icon={faGithub} />
        </button>
        <button
          onClick={openDemoLink}
          class="bg-red-300 hover:bg-red-400  text-black opacity-90 font-bold py-2 px-4 rounded"
        >
          <FontAwesomeIcon icon={faPersonChalkboard} />
        </button>
      </div>
    </div>
  );
};

export default Project;
