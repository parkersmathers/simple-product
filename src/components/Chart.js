import React from "react";
import PropTypes from "prop-types";
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  TimeScale
);

const Chart = ({ data, options }) => {
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

// rudimentary type checking, this will need to be expanded
Chart.propTypes = {
  data: PropTypes.shape({ labels: PropTypes.array, datasets: PropTypes.array }),
  options: PropTypes.object,
};

export default Chart;
