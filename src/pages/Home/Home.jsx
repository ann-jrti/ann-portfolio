import './home.styles.scss';
import { Menu } from './Sinopsis/Sinopsis';
import { Name } from './Name/Name';
import { Nav } from './Nav/Nav';
import { Projects } from './Projects/Projects';
import { WhistleButton } from './EasterEgg/WhistleButton/WhistleButton';

export const Home = () => {
  return (
    <main className="home">
      <Nav></Nav>
      <WhistleButton></WhistleButton>
      <Projects></Projects>
      <Name></Name>
      <Menu></Menu>
    </main>
  );
};
