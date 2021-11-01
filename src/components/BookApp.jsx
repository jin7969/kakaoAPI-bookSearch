import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bookSearch } from "./api";
import BookItem from "./BookItem";
import Search from "./Search";
import SideBar from "./SideBar";
import DarkMode from "./DarkMode";
import Header from "./Header";

function BookApp({ themeToggler }) {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelected = (id, title, price) => {
    setSelected((selected) => [...selected, { id, title }]);
    setTotalPrice(totalPrice + price);
  };

  const deleteList = (index, price) => {
    const array = [];
    for (let i = 0; i < selected.length; i++) {
      if (selected[i].id !== index) {
        array.push(selected[i]);
      } else {
        setTotalPrice(totalPrice - price);
      }
    }
    setSelected(array);
  };

  useEffect(() => {
    if (query.length > 0) {
      fetchData(query);
    }
  }, [query]);

  const fetchData = async (query) => {
    const params = {
      query: query,
      sort: "accuracy",
      page: 1,
      size: 8,
    };
    const { data } = await bookSearch(params);
    setBooks(data.documents);
  };

  const handleKeyEnter = () => {
    setQuery(text);
  };

  const onTextUpdate = (e) => {
    setText(e.target.value);
  };

  return (
    <Book query={query}>
      {!query && <Header />}
      {query && <Button onClick={() => setQuery("")}>뒤로가기</Button>}
      {query && <SideBar selected={selected} totalPrice={totalPrice} />}
      {!query && (
        <Main>
          <Title>
            <h1>Type the book you want to find.</h1>
            <h3>Let's search on Kakao API to find the book we want.</h3>
          </Title>
          <Image
            src="https://www.free-css.com/assets/files/free-css-templates/preview/page271/seogram/assets/img/banner_image_1.svg"
            alt=""
          />
          <SearchBar query={query}>
            <Search
              enter={handleKeyEnter}
              onTextUpdate={onTextUpdate}
              text={text}
            />
          </SearchBar>
        </Main>
      )}
      {query &&
        books.map((book, index) => (
          <BookItem
            key={index}
            id={index}
            book={book}
            thumbnail={book.thumbnail}
            title={book.title}
            authors={book.authors}
            contents={book.contents}
            price={book.sale_price}
            handleSelected={handleSelected}
            deleteList={deleteList}
          />
        ))}

      <DarkMode themeToggler={themeToggler} />
    </Book>
  );
}

export default BookApp;

const Book = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.div`
  position: relative;
  display: flex;
  width: 85%;
  height: 100vh;
  background-color: #f6f5fb;
`;

const Title = styled.div`
  padding: 2em;
  margin-top: 5em;
  color: #645f88;
  h1 {
    font-size: 3rem;
  }
  h3 {
    font-size: 1.3em;
  }
`;

const Image = styled.img`
  position: relative;
  top: 5em;
  right: 3em;
  width: 34em;
  height: 28em;
`;
const SearchBar = styled.div`
  position: absolute;
  left: 3em;
  bottom: 13em;
`;

const Button = styled.button`
  position: absolute;
  top: 1em;
  left: 2em;
  padding: 0.8em 1em;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  color: #5c5c5c;
  background-color: #e0dcfc;
`;
