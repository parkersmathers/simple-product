import moment from "moment";

const getYMax = (arr1, arr2) => {
  const values = arr1.concat(arr2).map((s) => s.y);
  return Math.max(...values) * 2;
};

const getChartView = (chartData1, chartData2, max) => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Retail Sales",
        data: chartData1,
        borderColor: "#46A8F6",
        borderWidth: 2,
        pointRadius: 0,
        hoverBorderColor: "#46A8F6",
        pointBackgroundColor: "#46A8F6",
        pointBorderColor: "#fff",
        pointHoverRadius: 0,
      },
      {
        label: "Retailer Margin",
        data: chartData2,
        borderColor: "#97a4af",
        borderWidth: 2,
        pointRadius: 0,
        hoverBorderColor: "#97a4af",
        pointBackgroundColor: "#97a4af",
        pointBorderColor: "#fff",
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        offset: true,
        alignToPixels: true,
        type: "time",
        time: {
          unit: "month",
          displayFormats: { month: "MMM" },
        },
        grid: {
          display: false,
          color: ["#97a4af", "#fff"],
        },
        ticks: {
          font: { size: 16 },
          color: "#97a4af",
          font: "Open Sans, sans-serif",
          padding: 15,
          labelOffset: 25,
        },
      },
      y: {
        min: -max / 2,
        max: max,
        grid: {
          display: false,
          color: "#e7eaf3",
          drawBorder: false,
          zeroLineColor: "#e7eaf3",
        },
        ticks: {
          display: false,
          padding: 10,
        },
      },
    },
    elements: {
      line: { tension: 0.4 },
    },
    interaction: {
      mode: "nearest",
      intersect: true,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(19, 33, 68, 0.75)",
        padding: 15,
        prefix: "$",
        postfix: "k",
        hasIndicator: true,
        mode: "index",
        intersect: false,
        lineMode: true,
        lineWithLineColor: "rgba(19, 33, 68, 0.075)",
        usePointStyle: true,
        callbacks: {
          title: (context) => {
            return moment(context[0].label).format("MMMM D");
          },
          label: (context) => {
            return ` ${context.dataset.label}: $${context.formattedValue}`;
          },
          labelPointStyle: (context) => {
            return { pointStyle: "circle" };
          },
        },
      },
    },
  };
  return { data, options };
};

export const buildChart = (data) => {
  const chartData1 = data.map((s) => {
    return {
      y: s.retailSales,
      x: s.weekEnding,
    };
  });

  const chartData2 = data.map((s) => {
    return {
      y: s.retailerMargin,
      x: s.weekEnding,
    };
  });

  const max = getYMax(chartData1, chartData2);
  return getChartView(chartData1, chartData2, max);
};
