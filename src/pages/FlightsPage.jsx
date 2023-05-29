import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DreamscapeLogo from "../components/DreamscapeLogo";
import Slider from "rc-slider";
import axios from "axios";

export default function FlightsPage({ selectedCity }) {
  const [flights, setFlights] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  useEffect(() => {
    getFlightsByPrice()
  }, []);

  const getFlightsByPrice = async () => {
    try {
      const res = await axios.get(
        "https://dreamscape-api.onrender.com/flights",
        {
          params: {
            minPrice: minPrice,
            maxPrice: maxPrice,
          },
        }
      );
      console.log(res.data);
      setFlights(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <DreamscapeLogo />
      <PageContainer>
        <SideBar>
          <FilterMaxPrice>
            <Slider
              min={0}
              max={100000}
              value={[minPrice, maxPrice]}
              onChange={(value) => {
                setMaxPrice(value[1]);
                setMinPrice(value[0]);
              }}
            />
          </FilterMaxPrice>
          <FilterMinPrice></FilterMinPrice>
        </SideBar>
        <CenterContainer>
          <CenterText>Passagens para {selectedCity}</CenterText>
          <FlightsContainer>
    
            <Flights> </Flights>
          </FlightsContainer>
        </CenterContainer>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
const FlightsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  display: flex;
`;
const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CenterText = styled.h1`

  color:  #1A8CD8;
`;
const SideBar = styled.div`
  background-color: #E2EAFF;
  width: 300px;
`;
const Flights = styled.div`
  background-color: #f2f2f2;
  width: 250px;
  height: 250px;
  margin: 10px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, .1); 
`;
const FilterMaxPrice = styled.div`
  background-color: ghostwhite;
  width: 200px;
  height: 50px;
  margin-top: 70px;
  margin-left: 20px;
`;
const FilterMinPrice = styled.div`
  background-color: ghostwhite;
  margin-top: 20px;
  margin-left: 20px;
  width: 200px;
  height: 50px;
`;
