import styled from "styled-components";
import React from "react";
import DreamscapeLogo from "../components/DreamscapeLogo";

export default function HomePage() {
    return (
        <div>
            <DreamscapeLogo />
            <HomeContainer>
      <SearchContainer>
      <GetCitiesBar>
            <input type="text" placeholder="Busque por cidades ..."/>
            <DropdownArrow>Search</DropdownArrow>
        </GetCitiesBar>
      </SearchContainer>
      <ContainerBox>
        <BoxTutorial>1. Escolha a cidade que deseja visitar.</BoxTutorial>
        <BoxTutorial>2. Veja as passagens disponiveis com os preços e datas</BoxTutorial>
        <BoxTutorial>3. Veja os locais onde você pode se hospedar e todo o conforto que eles oferecem!</BoxTutorial>
      </ContainerBox>
      </HomeContainer>
        </div>
    );
}
const HomeContainer = styled.div`
background-color: red;
display : flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 100%;
height: 100vh;
`
const SearchContainer = styled.div`
display: flex;

`
const GetCitiesBar = styled.div`
  display: flex;
  align-items: center;  
  background-color: #f2f2f2;
  padding: 10px;

  input{
    border: none;
    width: 500px;
  }
`;

const DropdownArrow = styled.div`
  font-size: 15px;
  margin-left: 10px;
  cursor: pointer;
`
const ContainerBox = styled.div`
display: flex;
flex-direction: row;
`
const BoxTutorial = styled.div`
background-color: green;
width: 300px;
height: 300px;
margin-left: 20px;
`