    import React from "react";
    import styled from "styled-components";
    import DreamscapeLogo from "../components/DreamscapeLogo";
    import Slider from "rc-slider"

    export default function FlightsPage() {
        
        return (
            <>
            <DreamscapeLogo/>
            <PageContainer>
            <SideBar>
                <FilterMaxPrice>
                    <Slider
                    min={0}
                    max={10000000}
                        />
                </FilterMaxPrice>
                <FilterMinPrice></FilterMinPrice>
                </SideBar>
            <CenterContainer>
                <CenterText>Passagens para CIDADE</CenterText>
                <FlightsContainer>
                    <Flights></Flights>
                    <Flights></Flights>
                    <Flights></Flights>
                    <Flights></Flights>
                    <Flights></Flights>
                    <Flights></Flights>
                    <Flights></Flights>

                </FlightsContainer>
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
    `
    const FlightsContainer = styled.div`
    background-color: orange;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    display: flex;

    `
    const CenterContainer = styled.div`
    background-color: green;
    display:flex;
    flex-direction: column;
    width: 100%;
    `
    const CenterText = styled.h1`
    background-color: aliceblue;
    color :Blue;

    `
    const SideBar = styled.div`
    background-color: red;
    width: 300px;
    `
    const Flights = styled.div`
    background-color  :gray ;
    width: 250px;
    height: 250px;
    margin:10px;
    `
    const FilterMaxPrice = styled.div`
    background-color: ghostwhite;
    width: 200px;
    height: 50px;
    margin-top: 70px;
    margin-left: 20px;
    `
    const FilterMinPrice = styled.div`
    background-color: ghostwhite;
    margin-top: 20px;
    margin-left: 20px;
    width: 200px;
    height: 50px;

    `