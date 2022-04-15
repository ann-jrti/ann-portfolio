import { useState } from 'react';
import { WhistleContext } from './whistle-context';

export default function WhistleContextProvider({ children }) {
  const [whistle, setWhistle] = useState(false);
  console.log(whistle);

  return (
    <WhistleContext.Provider value={[whistle, setWhistle]}>
      {children}
    </WhistleContext.Provider>
  );
}
