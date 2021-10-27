import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: '#f1f1f1',
  fontColor: '#000'
}

export const darkTheme = {
  body: '#333333',
  fontColor: '#fff'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
  }
`