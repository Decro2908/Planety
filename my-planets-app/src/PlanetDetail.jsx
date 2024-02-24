// PlanetDetail.js
import React, { useState, useEffect } from 'react';
import styles from './PlanetDetail.module.css';

const PlanetDetail = ({ planetId }) => {
  const [planetInfo, setPlanetInfo] = useState(null);

  useEffect(() => {
    // Simulace načítání dat po vybrání planety
    const fetchPlanetInfo = async () => {
      // Zde byste mohli provést volání API nebo načíst data z jiného zdroje
      // Pro účely ukázky, používáme jednoduchý objekt s informacemi
      const data = await fetch(`https://api.example.com/planets/${planetId}`);
      const planetData = await data.json();
      setPlanetInfo(planetData);
    };

    fetchPlanetInfo();
  }, [planetId]);

  if (!planetInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.planetDetail}>
      <h2>{planetInfo.name}</h2>
      <p>{planetInfo.description}</p>
      <p>{planetInfo.funFact}</p>
    </div>
  );
};

export default PlanetDetail;
