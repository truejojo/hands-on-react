import { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const saveProject = (project: Project) => {
    setProjects((prevProjects) =>
      prevProjects.map((updatedProject: Project) => {
        return updatedProject.id === project.id ? project : updatedProject;
      })
    );
  };

  return (
    <>
      <header>
        <h1>Projects</h1>
      </header>
      <ProjectList projects={projects} handleSave={saveProject} />
    </>
  );
};

export default ProjectsPage;
