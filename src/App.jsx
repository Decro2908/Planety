// App.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const planetsData = [
  { id: 1, name: 'Merkur', description: 'Merkur je nejbližší planetou k Slunci.', funFact: 'Merkur je nejmenší planetou sluneční soustavy.' },
  { id: 2, name: 'Venuše', description: 'Venuše je nejhorkší planetou ve sluneční soustavě.', funFact: 'Venuše má hustou oblaku kyseliny sírové.' },
  { id: 3, name: 'Země', description: 'Země je jedinou planetou, na které je známa život.', funFact: 'Země má jediný měsíc – Měsíc.' },
  { id: 4, name: 'Mars', description: 'Mars je známý svou rudou barvou.', funFact: 'Mars má nejvyšší sopku sluneční soustavy – Olympus Mons.' },
  { id: 5, name: 'Jupiter', description: 'Jupiter je největší planetou ve sluneční soustavě.', funFact: 'Jupiter má největší počet měsíců – 79.' },
  { id: 6, name: 'Saturn', description: 'Saturn je známý svými kruhy z plynného a prachového materiálu.', funFact: 'Saturn je méně hustý než voda.' },
  { id: 7, name: 'Uran', description: 'Uran je známý svým skloněným rotačním osou.', funFact: 'Uran má 27 známých měsíců.' },
  { id: 8, name: 'Neptun', description: 'Neptun je nejvzdálenější známou planetou od Slunce.', funFact: 'Neptun byl objeven až v roce 1846.' },
];

const PlanetContainer = styled.div`
  cursor: pointer;
  margin: 15px;
  text-align: center;
`;

const PlanetImage = styled.img`
  width: 200px;
  height: 140px;
  border-radius: 50%;
`;

const PlanetName = styled.h3`
  color: #fff;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const InfoTable = styled.table`
  margin-top: 20px;
  color: #fff;
  border-collapse: collapse;
`;

const InfoTableHeader = styled.th`
  padding: 10px;
  border-bottom: 2px solid #fff;
`;

const InfoTableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #fff;
`;

const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [planetInfo, setPlanetInfo] = useState(null);

  useEffect(() => {
    const fetchPlanetInfo = async () => {
      if (selectedPlanet) {
        // Simulace načítání dat po vybrání planety
        const planetData = planetsData.find(planet => planet.id === selectedPlanet);
        setPlanetInfo(planetData);
      }
    };

    fetchPlanetInfo();
  }, [selectedPlanet]);

  const handlePlanetClick = (planetId) => {
    setSelectedPlanet(planetId);
  };

  return (
    <AppContainer>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {planetsData.map(planet => (
          <PlanetContainer key={planet.id} onClick={() => handlePlanetClick(planet.id)}>
            <PlanetImage src={`${planet.name}.png`} alt={planet.name} />
            <PlanetName>{planet.name}</PlanetName>
          </PlanetContainer>
        ))}
      </div>
      {planetInfo && (
        <InfoTable>
          <tbody>
            <tr>
              <InfoTableHeader>Název</InfoTableHeader>
              <InfoTableCell>{planetInfo.name}</InfoTableCell>
            </tr>
            <tr>
              <InfoTableHeader>Popis</InfoTableHeader>
              <InfoTableCell>{planetInfo.description}</InfoTableCell>
            </tr>
            <tr>
              <InfoTableHeader>Zajímavost</InfoTableHeader>
              <InfoTableCell>{planetInfo.funFact}</InfoTableCell>
            </tr>
          </tbody>
        </InfoTable>
      )}
    </AppContainer>
  );
};

export default App;
