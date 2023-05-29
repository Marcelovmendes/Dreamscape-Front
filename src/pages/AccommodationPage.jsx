import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DreamscapeLogo from "../components/DreamscapeLogo";
import Slider from "rc-slider";

export default function AccommodationPage() {
  const [accommodations, setAccommodations] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  useEffect(() => {
    getAccommodationByPrice();
  }, []);
  const getAccommodationByPrice = async () => {
    try {
      const res = await axios.get(
        "https://dreamscape-api.onrender.com/accommodations",
        {
          params: {
            minPrice: minPrice,
            maxPrice: maxPrice,
          },
        }
      );
      setAccommodations(res.data);
    } catch (err) {}
  };

  return (
    <>
      <DreamscapeLogo />
      <PageContainer>
        <SideBar>
          <FilterMaxPrice>
            <Slider min={0} max={10000000} />
          </FilterMaxPrice>
          <FilterMinPrice></FilterMinPrice>
        </SideBar>
        <CenterContainer>
          <CenterText>Hospedagens em CIDADE</CenterText>
          <AccommodationsContainer>
            <Accommodation></Accommodation>
          </AccommodationsContainer>
        </CenterContainer>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

const AccommodationsContainer = styled.div`
  background-color: orange;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  display: flex;
`;

const CenterContainer = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CenterText = styled.h1`
  background-color: aliceblue;
  color: blue;
`;

const SideBar = styled.div`
  background-color: red;
  width: 300px;
`;

const Accommodation = styled.div`
  background-color: gray;
  width: 250px;
  height: 250px;
  margin: 10px;
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
