import './nav.styles.scss';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="nav__container">
      <Link to="/about">
        <p className="nav__about">About</p>
      </Link>
      <Link to="/projects">
        <p className="nav__projects">Projects</p>
      </Link>
    </div>
  );
};
