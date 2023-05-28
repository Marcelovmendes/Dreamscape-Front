import React from "react";
import styled from "styled-components";
import DreamscapeLogo from "../components/DreamscapeLogo";

export default function FlightsPage() {
    
    return (
        <>
      <DreamscapeLogo/>
        <FlightsContainer>
            <FlightsText>Flights</FlightsText>
        </FlightsContainer>
        </>
    );
}

const FlightsContainer = styled.div`
display: flex;
flex-direction: row;

`
const FlightsText = styled.h1`

`