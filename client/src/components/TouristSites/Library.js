
import React from 'react';
import styles from './Library.module.css';

const Library = ({ name, location, description, imageUrl }) => (
  <div className={styles.touristSite}>
    <img src={imageUrl} alt={name} className={styles.image} />
    <h2 className={styles.name}>{name}</h2>
    <h3 className={styles.location}>{location}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

export default Library;