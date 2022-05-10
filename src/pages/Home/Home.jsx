import './home.styles.scss';
import { Sinopsis } from './Sinopsis/Sinopsis';
import { Name } from './Name/Name';
import { Nav } from './Nav/Nav';
import { Projects } from './Projects/Projects';
import { WhistleButton } from './Dog/WhistleButton/WhistleButton';
import { HeyMessage } from './Dog/HeyMessage/HeyMessage';
import { useEffect, useState } from 'react';

export const Home = () => {
  // const [messageAppears, setMessageAppears] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMessageAppears(true);
  //   }, 2400);
  // }, []);

  // setTimeout(() => {
  //   setMessageAppears(false);
  // }, 3800);

  return (
    <main className="home">
      {/* <Nav></Nav> */}
      {/* {messageAppears ? <HeyMessage></HeyMessage> : ''} */}
      {/* <WhistleButton></WhistleButton> */}
      <Projects></Projects>

      <Name></Name>
      <Sinopsis></Sinopsis>
    </main>
  );
};
