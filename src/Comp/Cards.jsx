
import Topbar from '../Nav/Topbar'
import './../Comp/Cards.css'
import { HiSquaresPlus } from "react-icons/hi2";
import { HiPaperAirplane } from "react-icons/hi2";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { AiOutlineDatabase } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
import { MdOutlineTimer } from "react-icons/md";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { MdOutlineCampaign } from "react-icons/md";
import { SiGooglecampaignmanager360 } from "react-icons/si";



import one from './../Image/one.png'
import two from './../Image/two.png'
import three from './../Image/three.png'
import four from './../Image/four.png'
import five from './../Image/five.png'
import six from './../Image/six.png'
import seven from './../Image/seven.png'




export const Cards = () => {
  return (
    <>
    <div className='container'>
        <div className="row g-3 my-3 d-flex justify-content-center align-items-center">
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                  <div className="card border-0 rounded-3 p-2" style={{backgroundColor:'#5696c9'}}>
                      <div className="crd-body">
                          <div className="crd-logo d-flex justify-content-end">
                              <HiSquaresPlus className='top-logo' size={70} style={{color:'#d1eafd'}} />
                          </div>
                          <div className="crd-text">
                              <h4 className='fw-bolder text-white'>Dashboard</h4>
                              <p className='fw-bolder text-white'>my dashboard and my <br/> locking and </p>
                          </div>
                          <div className="last-end d-flex justify-content-between align-items-center">

                              <HiPaperAirplane className='text-white'/>
                              <img className='img-fluid' src={one} />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                  <div className="card border-0 rounded-3 p-2" style={{backgroundColor:'#c177ce'}}>
                      <div className="crd-body">
                          <div className="crd-logo d-flex justify-content-end">
                              <AiOutlineDatabase className='top-logo' size={70} style={{color:'#66396e'}}/>
                          </div>
                          <div className="crd-text">
                              <h4 className='fw-bolder text-white'>Datasets</h4>
                              <p className='fw-bolder text-white'>my dashboard and my <br/> locking and </p>
                          </div>
                          <div className="last-end d-flex justify-content-between align-items-center">

                              <HiPaperAirplane className='text-white'/>
                              <img className='img-fluid' src={two} />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                  <div className="card border-0 rounded-3 p-2" style={{backgroundColor:'#ffc2d8'}}>
                      <div className="crd-body">
                          <div className="crd-logo d-flex justify-content-end">
                              <HiUsers className='top-logo' size={70} style={{color:'#ff81ae'}}/>
                          </div>
                          <div className="crd-text">
                              <h4 className='fw-bolder text-white'>User</h4>
                              <p className='fw-bolder text-white'>my dashboard and my <br/> locking and </p>
                          </div>
                          <div className="last-end d-flex justify-content-between align-items-center">

                              <HiPaperAirplane className='text-white'/>
                              <img className='img-fluid' src={three} />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                  <div className="card border-0 rounded-3 p-2" style={{backgroundColor:'#ffc100'}}>
                      <div className="crd-body">
                          <div className="crd-logo d-flex justify-content-end">
                              <MdOutlineTimer className='top-logo' size={70} style={{color:'#fbebb3'}}/>
                          </div>
                          <div className="crd-text">
                              <h4 className='fw-bolder text-white'>Real-Time</h4>
                              <p className='fw-bolder text-white'>my dashboard and my <br/> locking and </p>
                          </div>
                          <div className="last-end d-flex justify-content-between align-items-center">

                              <HiPaperAirplane className='text-white'/>
                              <img className='img-fluid' src={four} />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                  <div className="card border-0 rounded-3 p-2" style={{backgroundColor:'#287334'}}>
                      <div className="crd-body">
                          <div className="crd-logo d-flex justify-content-end">
                              <LiaMoneyBillWaveAltSolid className='top-logo' size={70} style={{color:'#71d080'}}/>
                          </div>
                          <div className="crd-text">
                              <h4 className='fw-bolder text-white'>Billing</h4>
                              <p className='fw-bolder text-white'>my dashboard and my <br/> locking and </p>
                          </div>
                          <div className="last-end d-flex justify-content-between align-items-center">

                              <HiPaperAirplane className='text-white'/>
                              <img className='img-fluid' src={five} />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                  <div className="card border-0 rounded-3 p-2" style={{backgroundColor:'#ff5e5e'}}>
                      <div className="crd-body">
                          <div className="crd-logo d-flex justify-content-end">
                              <MdOutlineCampaign className='top-logo' size={70} style={{color:'#b34242'}}/>
                          </div>
                          <div className="crd-text">
                              <h4 className='fw-bolder text-white'>Campaign</h4>
                              <p className='fw-bolder text-white'>my dashboard and my <br/> locking and </p>
                          </div>
                          <div className="last-end d-flex justify-content-between align-items-center">

                              <HiPaperAirplane className='text-white'/>
                              <img className='img-fluid' src={six} />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                  <div className="card border-0 rounded-3 p-2" style={{backgroundColor:'#ff8600'}}>
                      <div className="crd-body">
                          <div className="crd-logo d-flex justify-content-end">
                              <SiGooglecampaignmanager360 className='top-logo' size={70} style={{color:'#ffdbb3'}}/>
                          </div>
                          <div className="crd-text">
                              <h4 className='fw-bolder text-white'>Link</h4>
                              <p className='fw-bolder text-white'>my dashboard and my <br/> locking and </p>
                          </div>
                          <div className="last-end d-flex justify-content-between align-items-center">

                              <HiPaperAirplane className='text-white'/>
                              <img className='img-fluid' src={seven} />
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </div>

    </>
  )
}
 