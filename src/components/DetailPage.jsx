import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Header from "./Header";

export default function DetailPage() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Detail>
        <Container>
          <Image>
            <img src={location.state.book.thumbnail} alt="" />
          </Image>
          <Title>
            <h3>제목 : {location.state.book.title}</h3>
            <p>저자 : {location.state.book.authors}</p>
            <p>{location.state.book.datetime}</p>
            <Contents>{location.state.book.contents}</Contents>
            <a href={location.state.book.url}>자세히 알아보기</a>
            <Div>
              <Button back="white" color="#346aff">
                장바구니 담기
              </Button>
              <Button back="#346aff" color="white">
                바로구매 >
              </Button>
            </Div>
            <Point>
              <ul>
                <li>쿠페이 머니 결제 시 1% 적립</li>
                <li>[로켓와우 + 쿠페이 계좌이체] 결제 시 2% 적립</li>
                <li>[로켓와우 + 쿠페이 머니] 결제 시 4% 추가적립</li>
              </ul>
            </Point>
          </Title>
        </Container>
      </Detail>
    </>
  );
}

const Detail = styled.div`
  margin: auto;
  width: 70%;
  height: 100vh;
  padding: 2.5em;
  background-color: #f6f5fb;
`;

const Container = styled.div`
  display: flex;
`;

const Image = styled.div`
  position: relative;
  width: 23em;
  height: 23em;
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
  padding: 1em 3em;
  width: 60%;
`;

const Contents = styled.p`
  margin-top: 1.5em;
`;
const Div = styled.div`
  margin-top: 2em;
`;
const Button = styled.button`
  width: 10em;
  height: 2.4em;
  margin-right: 1.5em;
  font-size: 1.2em;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.back};
  color: ${(props) => props.color};
`;

const Point = styled.div`
  height: 10em;
  margin-top: 2em;
  padding: 1em;
  border: 1px solid #adadad;
  background-color: #fafafa;
  ul {
    list-style: none;
  }
  li {
    line-height: 2em;
  }
`;
