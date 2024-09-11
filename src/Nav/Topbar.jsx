import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';

const Topbar = () => {
  return (
    <div>
        <section className='conntainer-fluid bg-dark py-3 position-sticky'>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="tittle">
                    <h3 className='text-white fw-bolder'>Dashboard</h3>
                </div>
                <div className="icons">
                    <FaCircleUser  className='text-white' size={30}/>
                </div>
            </div>
        </section >
    </div>
  )
}

export default Topbar
