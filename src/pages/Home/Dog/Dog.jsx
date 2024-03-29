import './dog.styles.scss';
import heyDog from '../../../assets/ann-transparent.png';
import { WhistleContext } from '../../../context/whistle-context';
import { useContext, useEffect } from 'react';

export const Dog = () => {
  const [whistle, setWhistle] = useContext(WhistleContext);
  useEffect(() => {
    console.log('click');
  }, [whistle]);

  return (
    <>
      <div
        id="hey-dog"
        className={`hey-dog__container hey-dog__animation`}
        // className={`hey-dog__container ${whistle ? 'hey-dog__animation' : ''}`}
      >
        <img className="hey-dog" src={heyDog}></img>
      </div>
    </>
  );
};
