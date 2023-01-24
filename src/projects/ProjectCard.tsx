import { Project } from "./Project";
import styled from "styled-components";

const formatDescription = (description: string) =>
  description.substring(0, 60) + "...";

interface ProjectCardProps {
  project: Project;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid pink;
  
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem 1rem;
  }

  button {
    align-self: center;
    margin-right: auto;
  }
`;

const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleEditClick = (projectBeingEdited: Project) =>
    console.log(projectBeingEdited);

  return (
    <Card>
      <img className="img" src={project.imageUrl} alt={project.name} />
      <section>
        <h3 className="title">
          <strong>{project.name}</strong>
        </h3>
        <p className="description">{formatDescription(project.description)}</p>
        <p className="budget">Budget: {project.budget.toLocaleString()}</p>
        <button className="btn" onClick={() => handleEditClick(project)}>
          <span></span>
          Edit
        </button>
      </section>
    </Card>
  );
};

export default ProjectCard;
