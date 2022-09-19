import React from "react";
import { useSelector } from "react-redux";
import Chart from "../../components/Chart";
import { buildChart } from "../../helpers/chartHelpers";

const ProductChart = () => {
  const sales = useSelector((state) => state.product.sales);

  const chartData = sales && sales.length && buildChart(sales);

  return (
    <>
      <div className="card-header border-0 py-3">
        <h5 className="fw-light">Retail Sales</h5>
      </div>
      <div className="text-uppercase mb-3" style={{ height: "18rem" }}>
        {chartData && (
          <Chart data={chartData.data} options={chartData.options} />
        )}
      </div>
    </>
  );
};

export default ProductChart;
