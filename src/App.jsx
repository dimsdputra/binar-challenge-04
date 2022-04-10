import React from 'react'
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cari from './pages/Cari';
import Detail from './pages/Detail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='cari' element={<Cari/>}/>
        <Route path='cari/detail' element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
