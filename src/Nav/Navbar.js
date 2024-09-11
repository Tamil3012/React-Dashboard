
import { NavLink, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Nav/Navbar.css'
import { IoHome } from "react-icons/io5";
import { TbCardsFilled } from "react-icons/tb";
import { SiGoogleanalytics } from "react-icons/si";

import { LuLogOut } from "react-icons/lu";
import { LuCodepen } from "react-icons/lu";
import { useState } from 'react';


export const Navbar = () => {

const [active, setActive] = useState(1);
  return (
    <div className=''>

      
          <div className='bg-dark'>
              <div className='container side-dashboard d-flex flex-column justify-content-between'>
                
                <div>
                {/* className={active ===1 ? "active py-3 d-flex justify-content-center align-items-center" : "py-3 d-flex justify-content-center align-items-center" }  onClick={e => setActive} */}

                      <li className='nav-item'>
                          <Link to='/' className='top-logo d-flex'>
                            <div className='menu-logo'>
                                <LuCodepen className='side-icons mx-3'/> 
                            </div>
                            
                            <div className='menu-tittle'>
                                <h4 className="nav-links text-white fw-bolder menu-name my-auto">Coder's</h4>
                            </div>
                          </Link>
                        </li>

                  <hr className='text-white my-2'></hr>

                  <div className='d-flex flex-column'>

                      
                        <li className='nav-item'>
                          <Link to='/' className={active ===1 ? 'active sidebarlink d-flex':'sidebarlink d-flex'} onClick={e => setActive(1)}>
                            <div className='menu-logo'>
                                <IoHome className='side-icons mx-3'/> 
                            </div>
                            
                            <div className='menu-tittle my-auto'>
                                <h6 className="nav-links text-white fw-bolder menu-name my-auto">Home</h6>
                            </div>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link to='/cards'  className={active === 2 ? 'active sidebarlink d-flex':'sidebarlink d-flex'} onClick={e => setActive(2)}>
                          <div className='menu-logo'>
                              <TbCardsFilled className='side-icons mx-3'/>
                          </div>
                          <div className='menu-tittle my-auto'>
                              <h6 className="nav-links text-white fw-bolder menu-name my-auto">Cards</h6>
                          </div>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link to='/statistics'  className={active === 3 ? 'active sidebarlink d-flex':'sidebarlink d-flex'} onClick={e => setActive(3)}>
                          <div className='menu-logo'>
                              <SiGoogleanalytics className='side-icons mx-3'/>
                          </div>
                          <div className='menu-tittle my-auto'>
                              <h6 className="nav-links text-white fw-bolder menu-name my-auto">Statistics</h6>
                          </div>
                          </Link>
                        </li>
                      

                  </div>

                </div>

                

                <div>
                <hr className='text-white'></hr>
                    <li className='nav-item'>
                            <Link className='sidebarlink d-flex'>
                              <div className='menu-logo'>
                                  <LuLogOut className='side-icons mx-3'/> 
                              </div>
                              
                              <div className='menu-tittle'>
                                  <h6 className="nav-links text-white fw-bolder menu-name my-auto my-auto">Sign Out</h6>
                              </div>
                            </Link>
                    </li>

                </div>
                
              </div>
          </div>

    </div>
  )
}
