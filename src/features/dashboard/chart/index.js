import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import homeApi from "../../../api/homeApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const [averageData, setAverageData] = useState([]);
  const [label, setLabel] = useState([]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Temperature Chart",
        style: {
          fontSize: "40px",
          fontWeight: "bold",
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

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Humid Chart",
        style: {
          fontSize: "40px",
          fontWeight: "bold",
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

  const labels = averageData?.map((item) => item.time.substring(11, 16));
  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: averageData?.map((item) => item?.temp),
        backgroundColor: "#688397",
      },
    ],
  };

  const data2 = {
    labels,
    datasets: [
      {
        label: "Humidity",
        data: averageData?.map((item) => item?.humid),
        backgroundColor: "#688397",
      },
    ],
  };

  const getAverage = async () => {
    try {
      const res = await homeApi.getAverage();
      setAverageData(res?.data?.data?.averageData);
    } catch (err) {}
  };

  useEffect(() => {
    getAverage();
  }, []);
  return (
    <div>
      <Bar data={data} options={options} />
      <Bar data={data2} options={options2} />
    </div>
  );
}

export default Chart;
