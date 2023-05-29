import React,{useState} from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import AccomodationPage from './pages/AccommodationPage';
export default function App() {
  const [selectedCity, setSelectedCity] = useState('');
  const handleCitySelection = (cityName) => {
    setSelectedCity(cityName);
  };
  return (
    <>
    <PagesContainer/>
<BrowserRouter>
<Routes>
<Route  path="/" element={<HomePage handleCitySelection={handleCitySelection}/> }/>
<Route path="/flights" element={<FlightsPage selectedCity={selectedCity}/>}/>
<Route path= "/accomodations" Component={AccomodationPage} />
</Routes>
</BrowserRouter>
    </>
  );
}

const PagesContainer = styled.main`

background-color: #F9F6F7;
max-height: 100vh;
`