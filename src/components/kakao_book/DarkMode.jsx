import React from "react";
import styled from "styled-components";

export default function DarkMode({ themeToggler }) {
  return (
    <Switch>
      <Input id="toggleBtn" type="checkbox" onClick={() => themeToggler()} />
      <Slider></Slider>
    </Switch>
  );
}

const Switch = styled.label`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #2196f3;
  }
  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: #ccc;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: white;
    transition: 0.4s;
  }
`;
