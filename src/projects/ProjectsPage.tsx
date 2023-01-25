import { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";
import styled from "styled-components";
import { Container } from "./layout.styled";

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
      <Header>
        <Container>
          <Headline>Projects</Headline>
        </Container>
      </Header>
      <Container>
        <ProjectList projects={projects} handleSave={saveProject} />
      </Container>
    </>
  );
};

const Header = styled.header`
  padding-block: var(--spacer-3r);
  background: var(--clr-primary);
  margin-bottom: var(--spacer-3r);
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--clr-neutral-200);
`;

export default ProjectsPage;
