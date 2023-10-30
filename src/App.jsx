
import './App.css'
import { Route, Routes } from 'react-router-dom';


import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacto from './pages/Contact';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyecto" element={<Projects />} />
      <Route path="/contacto" element={<Contacto/>} />
      </Routes>
    </div>
  )
}

export default App
