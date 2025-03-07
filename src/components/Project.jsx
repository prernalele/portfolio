import React from "react";

const Project = ({ key, title, image, link }) => {
  return (
    <div className="flex flex-col justify-around gap-2">
      <img src={image} />
      <a href={link}>{title} </a>
    </div>
  );
};

export default Project;
