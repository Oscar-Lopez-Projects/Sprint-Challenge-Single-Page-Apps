import React from "react";
import styled from "styled-components"


const WrapperDiv= styled.div`
margin-left:30%;
`;

export default function WelcomePage() {
  return (
   
    <section className="welcome-page">

      <header>
        <h1>Welcome to the ultimate fan site!</h1>
      
     <WrapperDiv className = "welcome-ds">
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
    </WrapperDiv>
      </header>
    </section>
  );
}