import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Pie } from 'react-chartjs-2';



export const LineChart = () => {
  return (
    <div className='container'>
        <div className="row g-3 d-flex justify-content-center align-items-center my-5">
            <div className="col-lg-8 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <Bar data={{
                    labels: ["A", "B", "C"],
                    datasets: [ 
                        {
                            label: "Revenue",
                            data: [200,300,500],
                        },
                        {
                            label: "Loss",
                            data: [30,90,50],
                            backgroundColor: "pink"
                        }
                    ]
                }}></Bar>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <Pie data={{
                    labels: ["Jan", "Feb", "Mra"],
                    datasets: [ 
                        {
                            label: "Revenue",
                            data: [200,300,500],
                        },
                        {
                            label: "Loss",
                            data: [30,90,50],
                            backgroundColor: "pink"
                        }
                    ]
                }}></Pie>
            </div>
        </div>
        
    </div>
  )
}
