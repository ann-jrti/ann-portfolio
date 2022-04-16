import './about.styles.scss';
import { Name } from '../Home/Name/Name';
import { Sinopsis } from '../Home/Sinopsis/Sinopsis';
import { Description } from './Description/Description';
import { HeaderAbout } from './HeaderAbout/HeaderAbout';
import { Skills } from './Skills/Skills';

export const About = () => {
  return (
    <main className="mainn">
      <HeaderAbout></HeaderAbout>
      <section className="about__section info">
        <Description></Description>
      </section>
      <section className="about__section tech">
        <Skills></Skills>
      </section>
    </main>
  );
};
