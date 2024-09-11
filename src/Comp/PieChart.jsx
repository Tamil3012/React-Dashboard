import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from 'react-chartjs-2';



export const PieChart = () => {
  return (
    <div className='bg-white border border-secondary'>
        <Doughnut data={{
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
        }}></Doughnut>
    </div>
  )
}
