import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { turnChange } from "../redux/modules/currentSlice";


function Button(props) {
  const [buttonContent, setButtonContent] = useState("");
  const dispatch = useDispatch();
  const turn = useSelector((state) => state.current.currentTurn)

  const clicked = () => {
    if (turn) {
      setButtonContent("O");
    } else {
      setButtonContent("X");
    }
    dispatch(turnChange(!turn))

  };

  return <StyledButton onClick={clicked}>{buttonContent}</StyledButton>;
}

export default Button;

export const StyledButton = styled.button`
  height: 10vh;
  width: 10vw;
`;
