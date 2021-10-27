import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BookApp from './components/kakao_book/BookApp'
import DetailPage from './components/kakao_book/DetailPage'
import { lightTheme, darkTheme, GlobalStyles } from "./components/kakao_book/theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Switch>
          <Route path='/' exact>
            <BookApp themeToggler={themeToggler} />
          </Route>

          <Route path='/detail'>
            <DetailPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export default App
