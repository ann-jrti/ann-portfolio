import './name.styles.scss';
import { EasterEgg } from '../EasterEgg/EasterEgg';

export const Name = () => {
  return (
    <div className="home__author-container">
      <EasterEgg></EasterEgg>
      <h1 className="home__author andrea">Andrea</h1>
      <h1 className="home__author maso">Masó</h1>
    </div>
  );
};
