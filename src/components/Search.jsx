import React from "react";
import styled from "styled-components";

export default function Search(props) {
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      props.enter();
    }
  };

  const onUpdate = (e) => {
    props.onTextUpdate(e);
  };

  return (
    <div>
      <Input
        type="search"
        placeholder="도서명 검색"
        onKeyDown={onEnter}
        onChange={onUpdate}
        value={props.text}
      />
    </div>
  );
}

const Input = styled.input`
  width: 30vw;
  padding: 0.8em;
  border: none;
  border-radius: 12px;
  outline: 0;
  font-size: 1rem;
  box-shadow: 0 10px 15px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;
