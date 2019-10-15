import React from 'react';
// import { Tab, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const WrapperDiv = styled.div `
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const Navigation = () => {
  return (
    <WrapperDiv className = "NavWrap">
        <div>
          <Link to ="/">Home</Link>
        </div>
      

        <div>
          <Link to ="/characters">  Characters </Link>
        </div>
    </WrapperDiv>
  )};


 export default Navigation;