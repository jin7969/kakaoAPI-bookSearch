import React from "react";
import styled from "styled-components";

export default function SideBar(props) {
  return (
    <>
      <Input type="checkbox" id="menuicon" />
      <Label htmlFor="menuicon">
        <span></span>
        <span></span>
        <span></span>
      </Label>
      <Side>
        <h3>좋아요❤️</h3>
        <List>
          {props.selected.map((item) => (
            <Li key={item.id}>{item.title}</Li>
          ))}
        </List>
        <span>합계 : {props.totalPrice}원</span>
      </Side>
    </>
  );
}
const List = styled.ul`
  margin: 0.8em;
  padding: 0.8em 0.5em 0.8em 1.3em;
  height: 82%;
  background-color: #fff;
`;

const Li = styled.li`
  margin-bottom: 0.5em;
`;

const Side = styled.div`
  width: 230px;
  height: 60%;
  position: fixed;
  top: 0;
  right: -230px;
  margin-top: 10px;
  border-radius: 12px;
  background-color: #bbbbbb;
  z-index: 1;
  transition: all 350ms;
  h3 {
    text-align: center;
  }
  span {
    position: absolute;
    left: 1.2em;
    bottom: 1.5em;
    font-weight: 600;
  }
`;

const Input = styled.input`
  display: none;
  &:checked + label {
    position: fixed;
    right: 245px;
    transition: all 0.3s;
  }
  &:checked + label + div {
    right: 3px;
  }
  &:checked + label span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  &:checked + label span:nth-child(2) {
    opacity: 0;
  }
  &:checked + label span:nth-child(3) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
`;

const Label = styled.label`
  display: block;
  width: 35px;
  height: 25px;
  position: absolute;
  margin-top: 20px;
  top: 8px;
  right: 30px;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 30px;
    background-color: ${(props) => props.theme.fontColor};
    transition: all 0.35s;
  }
  span:nth-child(1) {
    top: 0;
  }
  span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }
  span:nth-child(3) {
    bottom: 0;
  }
`;
