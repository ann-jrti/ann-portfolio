import { WhistleContext } from '../../../../context/whistle-context';
import { useContext } from 'react';

export const WhistleButton = () => {
  const [whistle, setWhistle] = useContext(WhistleContext);

  const handleClick = () => {
    setWhistle(true);
  };

  return <button onClick={handleClick}>Whistle!</button>;
};
