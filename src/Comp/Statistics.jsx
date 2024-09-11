import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Pie, Line } from 'react-chartjs-2';

export const Statistics = () => {
  return (
    <div className='container'>
        <div className="row g-3 d-flex justify-content-center align-items-center my-5">
            <div className="col-lg-8 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <Bar data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                    datasets: [ 
                        {
                            label: "Revenue",
                            data: [50,80,30,60,95],
                        },
                        {
                            label: "Loss",
                            data: [10,30,16,33,45],
                        }
                    ]
                }}></Bar>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <Doughnut data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                    datasets: [ 
                        {
                            label: "Revenue",
                            data: [50,80,30,60,95],
                        },
                        {
                            label: "Loss",
                            data: [10,30,16,33,45],
                        }
                    ]
                }}></Doughnut>
            </div>
        </div>
        <div className="row g-3 d-flex justify-content-center align-items-center my-5">
            <div className="col-lg-8 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <Line data={{
                    labels: ["Books", "Games", "Movies", "Mobiles", "Fashion"],
                    datasets: [ 
                        {
                            label: "Profit",
                            data: [30,95,90,78,88],
                        },
                        {
                            label: "Loss",
                            data: [12,33,10,90,60],
                        }
                    ]
                }}></Line>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <Pie data={{
                    labels: ["Books", "Games", "Movies", "Mobiles", "Fashion"],
                    datasets: [ 
                        {
                            label: "Profit",
                            data: [30,95,90,78,88],
                        },
                        {
                            label: "Loss",
                            data: [12,33,10,90,60],
                        }
                    ]
                }}></Pie>
            </div>
        </div>
        
    </div>
  )
}
