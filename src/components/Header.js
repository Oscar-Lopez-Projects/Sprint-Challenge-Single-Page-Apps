import React from "react";
import styled from "styled-components"

const WrapperDiv = styled.div `
width: 100%;
`;

export default function Header() {
  return (
    <WrapperDiv className = "header-ds">
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    </WrapperDiv>
  );
}