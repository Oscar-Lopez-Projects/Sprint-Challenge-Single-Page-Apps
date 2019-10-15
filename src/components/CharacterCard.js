import React from "react";
import styled from "styled-components";

const WrapperDiv= styled.div`
  width: 50%;
  height: 30%;
  margin-left: 22%;
  padding: 3%;
  `;

  

const CharacterCard = (props) => {
  const characterData = props.characterData;

  return (
  <>
      {characterData.map(character => {
        return (
          <WrapperDiv className="cards">
            <div>
            <img src={character.image} alt ="character"/>
            </div>
                    <h1>Name:{character.name}</h1>
                    <h2>Status: {character.status}</h2>
                    <h2>Species: {character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
        
          </WrapperDiv>
        );
       })};
    
    </>
  );
}
export default CharacterCard;