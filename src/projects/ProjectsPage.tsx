import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";

const ProjectsPage = () => {
  return (
    <>
      <header>
        <h1>Projects</h1>
      </header>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
};

export default ProjectsPage;
