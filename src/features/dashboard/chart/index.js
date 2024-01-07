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
  };

  const labels = averageData?.map((item) => item.time.substring(11, 16));
  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: averageData?.map((item) => item?.temp),
        backgroundColor: "#ce0b0b",
      },
    ],
  };

  const data2 = {
    labels,
    datasets: [
      {
        label: "Humidity",
        data: averageData?.map((item) => item?.humid),
        backgroundColor: "#050e73",
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
    <div className="d-flex justify-content-center w-100">
      <div className="w-50 h-100 me-3">
        <Bar data={data} options={options} />
      </div>
      <div className="w-50 h-100 ms-3">
        <Bar  data={data2} options={options2} />
      </div>
    </div>
  );
}

export default Chart;
