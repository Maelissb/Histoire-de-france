import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Homepage from './pages/homepage';
import France from './pages/france';
import Roispage from './pages/roispage';
import Roitest from './pages/roistest'

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Rois" element={<Roispage />}/>
        <Route path="/France" element={<France />}/>
        <Route path="/Roitest" element={<Roitest />}/>
      </Routes>
    </>
  );
}

export default App;
