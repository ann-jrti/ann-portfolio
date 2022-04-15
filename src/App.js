import './scss/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import WhistleContextProvider from './context/whistle-context-provider';

function App() {
  return (
    <BrowserRouter>
      <WhistleContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </WhistleContextProvider>
    </BrowserRouter>
  );
}

export default App;
