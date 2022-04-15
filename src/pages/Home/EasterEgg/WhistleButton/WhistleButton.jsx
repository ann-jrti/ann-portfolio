import { WhistleContext } from '../../../../context/whistle-context';
import { useContext, useEffect } from 'react';

export const WhistleButton = () => {
  const [whistle, setWhistle] = useContext(WhistleContext);
  console.log(whistle);
  const dog = document.getElementById('hey-dog');

  const handleClick = () => {
    setWhistle(true);
    console.log(`whistle ${whistle} from button`);
    console.log(whistle);
    console.log(dog);

    // dog.classList.add('hey-dog__animation'); // start animation
  };

  return <button onClick={handleClick}>Whistle!</button>;
};
