import './App.css';
import { Home } from './Comp/Home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Cards } from './Comp/Cards';
import { Navbar } from './Nav/Navbar';
import { Statistics } from './Comp/Statistics';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Nav/Topbar';
import { useState } from 'react';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <div className='d-flex'>
              <div className="w-auto position-fixed">
                  <Navbar/>
              </div>
              <div className="invisible">
                  <Navbar/>
              </div>
              <div className='col overflow-auto'>
              <Topbar/> 
                <div className='main-con'>
                    <Routes>
                          <Route path='/' element={<Home/>} />
                          <Route path='/cards' element={<Cards/>} />
                          <Route path='/statistics' element={<Statistics/>} />
                      </Routes>
                </div>
                  
              </div>
        </div>
        
          
      </BrowserRouter>
    </div>
  );
}

export default App;
