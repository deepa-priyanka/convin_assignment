import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import VAPlayer from './components/VAPlayer';
// import Education from './components/Education';
// import Entertainment from './components/Entertainment';
import Add from './components/Add';
import Edit from './components/edit';
import History from './components/History';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element= {<VAPlayer />} />
        <Route path="/add" element={<Add />} />
        {/* <Route path="/history" element={<History />} /> */}
        <Route path="/edit/:name" element={<Edit />} />
      {/* <Entertainment /> */}
      {/* <Education /> */}
      
      
      </Routes>
     </BrowserRouter>
  );
}

export default App;
