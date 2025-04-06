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
    <div className="flex flex-col w-[80%] lg:w-1/3 gap-y-2 gap-x-2">
      <img src={image} className=" rounded-md" />
      <div className="flex flex-row justify-between">
        <button
          onClick={openGithubRepo}
          className="bg-red-300 hover:bg-red-400 text-black opacity-90 font-bold py-2 px-4 rounded"
        >
          <div className="flex flex-row flex-shrink gap-2  justify-center items-center m-2 lg:mx-0">
            <FontAwesomeIcon
              icon={faGithub}
              className="transition duration-300 ease-in-out"
            />
            <span className="transition duration-300 ease-in-out hidden md:flex lg:flex ">
              Repo
            </span>
          </div>
        </button>
        <button
          onClick={openDemoLink}
          class="bg-red-300 hover:bg-red-400  text-black opacity-90 font-bold py-2 px-4 rounded"
        >
          <div>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span className="hidden md:flex lg:flex"> Demo </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Project;
