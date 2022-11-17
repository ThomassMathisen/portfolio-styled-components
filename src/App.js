import styled, { css } from "styled-components";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
      </Container>
    </>
  );
}

export default App;
