import React from 'react'
import styled from 'styled-components'
export default function Header() {
  return (
    <Head>
      <Logo>Soo<span>Gram.</span></Logo>
      <List>
        <li>Home</li>
        <li>About</li>
        <li>Search</li>
        <li>Services</li>
      </List>
      <Menu>
        <i class="fas fa-user"></i>
        <i class="far fa-comment-dots"></i>
      </Menu>
    </Head>
  )
}
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 4.5em;
  top: 0;
  background-color: white;
`
const Logo=styled.div`
  padding-left: 3em;
  font-size: 1.7rem;
  span {
    color: #6b55f9;
  }

`

const List=styled.ul`
  display: flex;
  list-style: none;
  li {
    font-size: 1.1em;
    margin:0 2.2em;
    cursor: pointer;
    color: #222222;
  } 
  li:hover {
    transform:scale(1.1);
    color: black;
  }
`

const Menu=styled.div`
  padding-right: 1em;
  color: #585858;
  i {
    margin-right: 1em;
    font-size: 1.4em;
  }

`