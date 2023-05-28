import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
export default function App() {
  return (
    <>
    <PagesContainer/>
<BrowserRouter>
<Routes>
<Route  path="/" Component={HomePage}/>
<Route path="/flights" Component={FlightsPage}/>
</Routes>
</BrowserRouter>
    </>
  );
}

const PagesContainer = styled.main`

background-color: #F9F6F7;
max-height: 100vh;
`