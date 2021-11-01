import React from 'react'
import { KAKAO_AUTH_URL } from "./oauth";
import styled from 'styled-components'
import Header from './Header'

export default function LoginPage() {
  return (
    <Div>
      <Header login={true}/>
      <Login>
        <h1>로그인 하기</h1>
        <List >
          <Item >
            <Button href={KAKAO_AUTH_URL}>
              Kakao - login
            </Button>
          </Item>
          <Item >
            <Button >
              Google - login
            </Button>
          </Item>
        </List>
      </Login>
    </Div>
  )
}
const Div =styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const Login=styled.section`
  width: 30em;
  height: 15em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: White;
  border-radius: 12px;
`
const List =styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0.5rem;
`
const Item =styled.li`
    margin-bottom: 0.8em;
`
const Button =styled.a`
  display: block;
  width: 90%;
  height: 2.5em;
  margin: auto;
  line-height: 2.5em;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 1.3rem;
  color: white;
  text-decoration: none;
  background-color: #bfb6f8;
  transition: none;
  outline: 0;
  :hover{
    background-color: #6b55f9;
  }
`