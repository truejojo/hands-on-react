import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import styled from "styled-components";

interface ProjectListProps {
  projects: Project[];
}

const ProjectsWrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ProjectWrapper = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ProjectsWrapper>
      {projects.map((project) => (
        <ProjectWrapper key={project.id}>
          <ProjectCard project={project} />
          <ProjectForm />
        </ProjectWrapper>
      ))}
    </ProjectsWrapper>
  );
};

export default ProjectList;
