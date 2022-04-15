import './home.styles.scss';
import { Menu } from './Sinopsis/Sinopsis';
import { Name } from './Name/Name';
import { Nav } from './Nav/Nav';

export const Home = () => {
  return (
    <main className="home">
      <Nav></Nav>
      <Name></Name>
      <Menu></Menu>
    </main>
  );
};
