import './easteregg.styles.scss';
import heyDog from '../../../assets/ann-transparent.png';
import { WhistleButton } from './WhistleButton/WhistleButton';
import styledComponents from 'styled-components';

const Stt = styledComponents.style.div`
 display: none;
`;

export const EasterEgg = () => {
  return (
    <Stt className="hey-dog__container">
      <img className="hey-dog" src={heyDog}></img>
    </Stt>
  );
};
