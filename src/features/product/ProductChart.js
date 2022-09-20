import React from "react";
import { useSelector } from "react-redux";
import Chart from "../../components/Chart";
import { buildChart } from "../../helpers/chartHelpers";

const ProductChart = () => {
  const sales = useSelector((state) => state.product.sales);

  // transform sales data into chart data
  const chartData = sales && sales.length && buildChart(sales);

  return chartData ? (
    <>
      <div className="card-header border-0 py-3">
        <h5 className="fw-light">Retail Sales</h5>
      </div>
      <div className="mb-3" style={{ height: "18rem" }}>
        <Chart data={chartData.data} options={chartData.options} />
      </div>
    </>
  ) : null;
};

export default ProductChart;
