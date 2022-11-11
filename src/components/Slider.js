import React from "react";
import styled from "styled-components";
import { fonts, colors } from "../utils/theme";

const Container = styled.div`
  margin-left: 100px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledSlider = styled.input`
  //   -webkit-appearance: none;
  //   appearance: none;
  height: 25px;
  background: ${colors.grey};
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  width: 500px;
  &:hover {
    opacity: 1;
  }
`;

const Value = styled.div`
  ${fonts.input};
`;

const Slider = ({ value, sliderMove }) => {
  return (
    <Container>
      <StyledSlider type="range" min="1" max="10" value={value} onChange={(e) => sliderMove(e)}></StyledSlider>
      <Value>Value = {value}</Value>
    </Container>
  );
};

export default Slider;
