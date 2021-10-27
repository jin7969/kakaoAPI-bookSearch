import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

function BookItem(props) {
  const history = useHistory();
  const [heart, setHeart] = useState(false);

  const goToDetailPage = () => {
    const book = props.book;
    history.push({
      pathname: "/detail",
      state: { book: book },
    });
  };

  const heartClick = () => {
    if (!heart) {
      setHeart(true);
      props.handleSelected(props.id, props.title, props.price);
    } else {
      setHeart(false);
      props.deleteList(props.id, props.price);
    }
  };

  return (
    <Item>
      <Container onClick={goToDetailPage}>
        <img src={props.thumbnail} alt="" />
        <Content>
          <h3>{props.title}</h3>
          <p>{props.authors}</p>
          <p>{props.contents}</p>
          <div>가격 : {props.price}원</div>
        </Content>
      </Container>
      <Heart onClick={heartClick}>
        {heart ? (
          <i className="fas fa-heart"></i>
        ) : (
          <i className="far fa-heart"></i>
        )}
      </Heart>
    </Item>
  );
}
export default BookItem;

const Item = styled.div`
  position: relative;
  display: flex;
  width: 60%;
  margin: 0.8em;
  background-color: #ffffff;
  &:hover {
    transform: scale(1.01);
    transition: all 0.2s;
  }
`;

const Container = styled.div`
  display: flex;
  img {
    width: 27%;
  }
`;

const Content = styled.div`
  padding: 1.4em;
  width: 75%;
`;

const Heart = styled.div`
  position: absolute;
  right: 0;
  width: 1.8em;
  height: 1.8em;
  text-align: center;
  line-height: 1.8em;
  color: #f81b5d;
  border-radius: 50%;
  font-size: 1.8em;
  &:hover {
    background-color: #ffefef;
  }
`;
