import React from "react";

function ProjectItem({ name, about, technologies }) {

  const techs = technologies.map((techs) => {
    return <span key={techs}>{techs}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techs}
      </div>
    </div>
  );
}

export default ProjectItem;
