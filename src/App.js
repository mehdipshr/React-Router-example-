
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './pages/About';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Contact from './pages/Contact';



import {BrowserRouter, Routes , Route } from 'react-router-dom'
  
function App() {
  return (

    <BrowserRouter>
      <Header/>
      
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/About/:username/:id/:address" element={<About/>} />
            <Route exact path="/Signup" element={<Signup/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>

          </Routes>       
          <div id='Footer'>
            <Body/>
            <Footer/>
          </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
