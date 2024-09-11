import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSackDollar } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { FaComments } from "react-icons/fa6";



import './../Comp/Home.css'
import { LineChart } from './LineChart';
import { PieChart } from 'react-bootstrap-icons';


export const Home = () => {
  return (
    <>
    
        <div className="container">
            <div className="row g-3 my-4">
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                <div className="card py-4 px-2 rounded-2 border-0">
                    <div className="crd-body d-flex justify-content-evenly justify-content-center align-items-center">
                        <div className="crd-icon">
                            <FaSackDollar style={{color:'lightgreen'}} size={80} />
                        </div>
                        <div className="crd-detl">
                            <h6 className='fw-bolder'>Sales</h6>
                            <h2 className='fw-bolder'>234</h2>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                <div className="card py-4 px-2 rounded-2 border-0">
                    <div className="crd-body d-flex justify-content-evenly justify-content-center align-items-center">
                        <div className="crd-icon">
                            <MdDeliveryDining className='' style={{color:'blueviolet'}} size={80} />
                        </div>
                        <div className="crd-detl">
                            <h6 className='fw-bolder'>delivery</h6>
                            <h2 className='fw-bolder'>240</h2>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                <div className="card py-4 px-2 rounded-2 border-0">
                    <div className="crd-body d-flex justify-content-evenly justify-content-center align-items-center">
                        <div className="crd-icon">
                            <IoMdAnalytics className='' style={{color:'orangered'}} size={80} />
                        </div>
                        <div className="crd-detl">
                            <h6 className='fw-bolder'>Increase</h6>
                            <h2 className='fw-bolder'>65%</h2>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                <div className="card py-4 px-2 rounded-2 border-0">
                    <div className="crd-body d-flex justify-content-evenly justify-content-center align-items-center">
                        <div className="crd-icon">
                            <FaComments className='' style={{color:'darkgoldenrod'}} size={80} />
                        </div>
                        <div className="crd-detl">
                            <h6 className='fw-bolder'>Comments</h6>
                            <h2 className='fw-bolder'>12</h2>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="container">
                <div className="">
                    <LineChart/>
                </div>
        </div>
    
    </>
  )
}
