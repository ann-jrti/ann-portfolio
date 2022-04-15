import './home.styles.scss';
import { Menu } from './Sinopsis/Sinopsis';
import { Name } from './Name/Name';
import { Nav } from './Nav/Nav';
import { Projects } from './Projects/Projects';

export const Home = () => {
  return (
    <main className="home">
      <Nav></Nav>
      <Projects></Projects>
      <Name></Name>
      <Menu></Menu>
    </main>
  );
};
