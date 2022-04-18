import './name.styles.scss';
import { Dog } from '../Dog/Dog';

export const Name = () => {
  return (
    <div className="home__author-container">
      <Dog></Dog>
      <h1 className="home__author andrea">Andrea</h1>
      <h1 className="home__author maso">Masó</h1>
    </div>
  );
};
