import React from "react";
import Form from "./components/Form";
import styled from "styled-components";
import { colors } from "./utils/theme";

const Wrapper = styled.div`
  background: ${colors.backgroundGrey};
  padding: 10vh 10vw;
`;

const App = () => {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
};

export default App;
