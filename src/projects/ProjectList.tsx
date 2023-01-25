import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import styled from "styled-components";
import { displayGrid } from "./layout.styled";

interface ProjectListProps {
  projects: Project[];
  handleSave: (project: Project) => void;
}

const ProjectList = ({ projects, handleSave }: ProjectListProps) => {
  const [projectBeingEdit, setProjectBeingEdit] = useState({});

  const handleEdit = (project: Project) => setProjectBeingEdit(project);

  const handleCancelEditing = () => setProjectBeingEdit({});

  return (
    <ProjectsWrapper>
      {projects.map((project) => (
        <ProjectWrapper key={project.id}>
          {project === projectBeingEdit ? (
            <ProjectForm handleCancelEditing={handleCancelEditing} handleSave={handleSave} project={project} />
          ) : (
            <ProjectCard project={project} handleEdit={handleEdit} />
          )}
        </ProjectWrapper>
      ))}
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  --gap: 2rem;

  ${displayGrid}
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ProjectWrapper = styled.div`
  --gap: 1.5rem;

  ${displayGrid}
`;

export default ProjectList;
