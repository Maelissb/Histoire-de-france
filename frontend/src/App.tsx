import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Homepage from './pages/homepage';
import Rois from './pages/rois';
import France from './pages/france';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Rois" element={<Rois />} />
        <Route path="/France" element={<France />}/>
      </Routes>
    </>
  );
}

export default App;
