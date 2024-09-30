import React from 'react';
import styles from './Home.module.css';
import { travelData } from '../../data';
import Library from '../../components/TouristSites/Library';

const Home = () => {
  return (
    <div className={styles.homePage}>
      {travelData.map((place) => (
        <Library
          key={place.id}
          name={place.name}
          location={place.location}
          description={place.description}
          imageUrl={place.imageUrl}
        />
      ))}
    </div>
  );
};

export default Home;
