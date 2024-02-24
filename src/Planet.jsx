// Planet.js
import React from 'react';
import styles from './Planet.module.css';

const Planet = ({ name, onClick }) => {
  return (
    <div className={styles.planet} onClick={onClick}>
      {name}
    </div>
  );
};

export default Planet;
