import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid pink;
`;

const ProjectForm = () => {
  return (
    <Form>
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="enter name" />

      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="enter description" />

      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter budget" />

      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" />

      <div className="input-group">
        <button className="btn">Save</button>
        <span />
        <button type="button" className="btn">
          cancel
        </button>
      </div>
    </Form>
  );
};

export default ProjectForm;
