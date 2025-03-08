import React from "react";

const Project = ({ key, title, image, link }) => {
  return (
    <div className="flex flex-col w-1/3 gap-y-2 ">
      <img src={image} className="rounded-md" />
      <a href={link}>{title} </a>
    </div>
  );
};

export default Project;
