// App.js
import React, { useState } from 'react';
import PlanetList from './PlanetList';
import PlanetDetail from './PlanetDetail';
import styles from './App.module.css';

const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planetId) => {
    setSelectedPlanet(planetId);
  };

  return (
    <div className={styles.app}>
      <div className={styles.planetListContainer}>
        <PlanetList onPlanetClick={handlePlanetClick} />
      </div>
      <div className={styles.planetDetailContainer}>
        {selectedPlanet && <PlanetDetail planetId={selectedPlanet} />}
      </div>
    </div>
  );
};

export default App;
