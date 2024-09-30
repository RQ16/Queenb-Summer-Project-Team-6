import React, { useContext } from 'react';
import styles from './RandomDuck.module.css';
import { DuckContext } from '../../context/DuckContext';
import FirstButton from '../common/FirstButton/FirstButton';


const RandomDuck = () => {
  return (
    <div className={styles.container}>
      {/* Dashboard structure */}
      <div className={styles.dashboard}>
        <h1>Dashboard</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Date</th>
              <th>Description</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td>
                <img
                  src="https://www.akhbarelbalad.net/images/cms-image-000006140.jpg"
                  alt="القدس"
                  className={styles.thumbnail}
                />
              </td>
              <td>القدس</td>
              <td>1/1/1925</td>
              <td>مكان مقدس</td>
              <td>#عباده</td>
              <td>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </td>
            </tr>
            {/* Another row */}
            <tr>
              <td>
                <img
                  src="https://felesteen.news/thumb/w920/uploads/images/2022/09/8adTp.jpg"
                  alt="حيفا"
                  className={styles.thumbnail}
                />
              </td>
              <td>حيفا</td>
              <td>09/09/1956</td>
              <td>مكان جميل جدا</td>
              <td>#سياحه</td>
              <td>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RandomDuck;
