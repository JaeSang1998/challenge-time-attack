import styled from "styled-components";
import Button from "./components/Button";

function App() {
  return (
    <>
      <StyledDivision>
        <Button buttonRow={1} buttonColumn={1} />
        <Button buttonRow={1} buttonColumn={2} />
        <Button buttonRow={1} buttonColumn={3} />
      </StyledDivision>
      <StyledDivision>
        <Button buttonRow={2} buttonColumn={1} />
        <Button buttonRow={2} buttonColumn={2} />
        <Button buttonRow={2} buttonColumn={3} />
      </StyledDivision>
      <StyledDivision>
        <Button buttonRow={3} buttonColumn={1} />
        <Button buttonRow={3} buttonColumn={2} />
        <Button buttonRow={3} buttonColumn={3} />
      </StyledDivision>
    </>
  );
}

export default App;

export const StyledDivision = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
