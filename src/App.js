import './scss/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import WhistleContextProvider from './context/whistle-context-provider';
import { About } from './pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <WhistleContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </WhistleContextProvider>
    </BrowserRouter>
  );
}

export default App;
