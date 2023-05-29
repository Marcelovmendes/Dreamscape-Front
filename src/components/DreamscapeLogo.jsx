import React from "react";
import styled from "styled-components";
import {Link}from "react-router-dom";

export default function DreamscapeLogo() {
    
    return (
      
      <StyledLink to ="/">
      <DreamscapeText>
        Dreamscape
      </DreamscapeText>
      </StyledLink>
    )
}

const DreamscapeText = styled.div`
display: flex;
align-items: center;
background-color:  #1A8CD8;
font-family: 'Roboto', sans-serif;
 font-weight: 500;
 font-size: 35px;
 width: 100%;
 height: 80px;
 box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
 text-decoration: none;
 cursor: pointer;
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;