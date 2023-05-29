  import styled from "styled-components";
  import React, { useState,useEffect } from "react";
  import DreamscapeLogo from "../components/DreamscapeLogo";
  import axios from "axios";
 
  export default function HomePage({handleCitySelection}) {
    const [searchTerm,setSearchTerm] = useState("");
    console.log(searchTerm);
    const [cities,setCities] = useState([]);  
    
    useEffect(() => {
      if (searchTerm) {
        searchCities();
      }
    }, [searchTerm]);
  

  const searchCities = async()=>{
  try{
    const res = await axios.get(`https://dreamscape-api.onrender.com/search?searchTerm=${searchTerm}`);

    handleCitySelection(res.data)
    setCities(res.data)
  }catch (err){
    console.log(err);
  }
  }

  const handleDropDownArrowClick = async ()=>{
    
    try{ const res = await axios.get(`https://dreamscape-api.onrender.com/`)
    setCities(res.data)
    }catch(err){
   console.log(err)
    }
  }
      return (
          <div>
              <DreamscapeLogo />
              <HomeContainer>
        <SearchContainer>
        <GetCitiesBar>
              <input type="text" placeholder="Busque por cidades ..."
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              />
              <DropdownArrow onClick={handleDropDownArrowClick}>Search</DropdownArrow>
              { cities && cities.length>0 &&(
              <CityList>
                {cities.map((city)=>(
                  <div key={city.id}>{city.name}</div>
                ))}
              </CityList>
              )}
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
    border-radius: 5px;
    margin-bottom: 50px;
    input{
      border: none;
      width: 500px;
      outline: none;
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
  background-color: #1A8CD8;
  display: flex;
  align-items: center;
  width: 300px;
  height: 300px;
  color: white;
  padding: 20px;
  border-radius: 15%;
  margin-left: 20px;
  font-weight:300 ;
  font-size:20px ;
  font-family: 'Roboto',sans-serif;

  `
  const CityList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1;
  border: 1px solid gray;
  padding: 10px;
`;