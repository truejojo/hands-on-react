import ProjectsPage from "./projects/ProjectsPage";
import styled from "styled-components";

const Container = styled.div`
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
`;

const App = () => {
  return (
    <Container>
      <ProjectsPage />
    </Container>
  );
}

export default App;
