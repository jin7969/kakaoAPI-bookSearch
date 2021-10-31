import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/theme";
import BookApp from "./components/BookApp";
import DetailPage from "./components/DetailPage";
import LoginPage from "./components/LoginPage";

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
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/main">
            <BookApp themeToggler={themeToggler} />
          </Route>
          <Route path="/detail">
            <DetailPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
