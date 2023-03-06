import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Temperature Chart',
            style: {
                fontSize:  '40px',
                fontWeight:  'bold',
              },
        },
    },
    // scales: {
    //     xAxes: [{
    //         barThickness: 2,  // number (pixels) or 'flex'
    //         maxBarThickness: 2 // number (pixels)
    //     }]
    // }
};
const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
export const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: [14, 13, 13, 16, 20, 19, 22, 24, 25, 26, 25, 27, 26, 26, 25, 25, 23, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#688397',
      },
   
    ],
  };
function Chart() {
    return(
        <div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default Chart;
