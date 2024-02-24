// PlanetList.js
import React from 'react';
import Planet from './Planet';
import styles from './PlanetList.module.css';

const planetsData = [
  { id: 1, name: 'Mercury' },
  { id: 2, name: 'Venus' },
  { id: 3, name: 'Earth' },
  { id: 4, name: 'Mars' },
  { id: 5, name: 'Jupiter' },
  { id: 6, name: 'Saturn' },
  { id: 7, name: 'Uranus' },
  { id: 8, name: 'Neptune' },
];

const PlanetList = ({ onPlanetClick }) => {
  return (
    <div className={styles.planetList}>
      {planetsData.map(planet => (
        <Planet key={planet.id} name={planet.name} onClick={() => onPlanetClick(planet.id)} />
      ))}
    </div>
  );
};

export default PlanetList;
