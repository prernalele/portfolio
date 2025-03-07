import React from "react";

const Project = ({ key, title, image, link }) => {
  return (
    <div>
      <img src={image} />
      <div>{title}</div>
      <a href={link}>Project Link </a>
    </div>
  );
};

export default Project;
