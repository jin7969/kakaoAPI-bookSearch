import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

export default function DetailPage() {
  const location = useLocation();

  return (
    <Detail>
      <Container>
        <Image>
          <img src={location.state.book.thumbnail} alt="" />
        </Image>
        <Title>
          <h3>제목 : {location.state.book.title}</h3>
          <p>저자 : {location.state.book.authors}</p>
          <p>{location.state.book.datetime}</p>
        </Title>
      </Container>
      <span>이미지 확대🔼</span>
      <Contents>{location.state.book.contents}</Contents>
      <a href={location.state.book.url}>자세히 알아보기</a>
    </Detail>
  );
}

const Detail = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1000px;
  height: 680px;
  padding: 2em;
  background-color: #fff4cb;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  display: flex;
`;

const Image = styled.div`
  position: relative;
  width: 16em;
  height: 16em;
  border-radius: 8px;
  overflow: hidden;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    transition: transform 0.5s;
  }
  img:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
const Title = styled.div`
  padding: 1em;
`;

const Contents = styled.p`
  margin-top: 1.5em;
`;
