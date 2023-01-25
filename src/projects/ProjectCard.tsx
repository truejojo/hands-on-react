import { Project } from "./Project";
import styled from "styled-components";
import { displayGrid, bgcShadow, DefaultButton } from "./layout.styled";

const formatDescription = (description: string) =>
  description.substring(0, 60) + "...";

interface ProjectCardProps {
  project: Project;
  handleEdit: (Project: Project) => void;
}

const ProjectCard = ({ project, handleEdit }: ProjectCardProps) => {
  const handleEditClick = (projectBeingEdited: Project) => handleEdit(project);

  return (
    <Card>
      <img className="img" src={project.imageUrl} alt={project.name} />
      <section>
        <h3 className="title">
          <strong>{project.name}</strong>
        </h3>
        <p className="description">{formatDescription(project.description)}</p>
        <p className="budget">Budget: {project.budget.toLocaleString()}</p>
        <DefaultButton onClick={() => handleEditClick(project)}>
          <span></span>
          Edit
        </DefaultButton>
      </section>
    </Card>
  );
};

const Card = styled.div`
  ${displayGrid};
  ${bgcShadow};
  
  section {
    ${displayGrid}
    padding: 0 var(--spacer-1r) var(--spacer-1r);
  }

  button {
    align-self: center;
    margin-right: auto;
  }
`;

export default ProjectCard;
