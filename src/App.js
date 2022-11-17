import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
      </Container>
      <Container>
        <Feature />
      </Container>
    </>
  );
}

export default App;
