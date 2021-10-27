import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { bookSearch } from "./api";
import BookItem from "./BookItem";
import Search from "./Search";
import Login from "./Login";
import SideBar from "./SideBar";
import DarkMode from "./DarkMode";

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
    <Book>
      <SideBar selected={selected} totalPrice={totalPrice} />
      <Header query={query}>
        <Search
          enter={handleKeyEnter}
          onTextUpdate={onTextUpdate}
          text={text}
        />
        <Login />
      </Header>
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
  align-items: center;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-between;
  margin: 1.5em 0;
  ${(props) => {
    if (!props.query) {
      return css`
        height: 90vh;
        align-items: center;
        justify-content: space-around;
      `;
    }
  }}
`;
