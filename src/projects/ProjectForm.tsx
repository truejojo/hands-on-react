import { useState } from "react";
import styled from "styled-components";
import { Project } from "./Project";
import { displayGrid, bgcShadow, displayFlex, SaveButton, DangerButton } from "./layout.styled";

interface ProjectFormProps {
  project: Project;
  handleCancelEditing: () => void;
  handleSave: (project: Project) => void;
}

const ProjectForm = ({
  handleCancelEditing,
  handleSave,
  project: initialProject,
}: ProjectFormProps) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid()) return;
    handleSave(project);
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;

    let updatedValue = type === "checkbox" ? checked : value;

    if (type === "number") {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;
    setProject((project) => {
      updatedProject = new Project({ ...project, ...change });
      return updatedProject;
    });

    setErrors(() => validate(updatedProject));
  };

  const validate = (project: Project) => {
    let errors: any = { name: "", description: "", budget: "" };
    if (project.name.length === 0) {
      errors.name = "Name is required";
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = "Name needs to be at least 3 characters.";
    }
    if (project.description.length === 0) {
      errors.description = "Description is required.";
    }
    if (project.budget === 0) {
      errors.budget = "Budget must be more than $0.";
    }
    return errors;
  };

  const isValid = () => {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={project.name}
        onChange={handleChange}
      />
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}

      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={project.description}
        onChange={handleChange}
      />
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}

      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        value={project.budget}
        onChange={handleChange}
      />
      {errors.budget.length > 0 && (
        <div className="card error">
          <p>{errors.budget}</p>
        </div>
      )}

      <label htmlFor="isActive">Active?</label>
      <input
        type="checkbox"
        name="isActive"
        checked={project.isActive}
        onChange={handleChange}
      />

      <BtnGroup>
        <SaveButton>Save</SaveButton>
        <DangerButton type="button" onClick={handleCancelEditing}>
          cancel
        </DangerButton>
      </BtnGroup>
    </Form>
  );
};

const Form = styled.form`
  ${displayGrid};
  ${bgcShadow};
  padding: var(--spacer-1r);
`;

const BtnGroup = styled.div`
  --gap: .5rem;
  ${displayFlex};
`;

export default ProjectForm;
