import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from './List/List';
import Search from './Search/Search';
import styled from 'styled-components';

const StyledHomepage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${ props => props.theme.colors.tertiary};
`

const StyledFooter = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: auto;  
  border-top: 5px solid ${props => props.theme.colors.main};
  background-color: ${ props => props.theme.colors.tertiary};  
  padding: 10px 20px;
`

const StyledAuthorTag = styled.h5`
  margin: 0;
  color: ${props => props.theme.colors.main};
  text-align: right;
`

const StyledMainContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  margin-top: auto; 
  padding: 0px 20px;
`

const App: React.FC = () => {
  const test = async () => {
    const res = await fetch('https://www.youtube.com/watch?v=E5kJDWQSBUk')
    console.log(res)
  }
  test()
  return (
    <StyledHomepage>  
      <Routes>
        <Route path='/' element={
          <StyledMainContainer>
            <Search />
            <List />
          </StyledMainContainer>          
        }/>         
      </Routes>
      <StyledFooter>        
        <StyledAuthorTag>Ⓒ Fedor Stryapunin</StyledAuthorTag>
      </StyledFooter>
    </StyledHomepage>
     
);}

export default App;
