import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart2 = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [23, 75], // Series qiymatlarini kerakli qiymatga o'zgartiring
    options: {
      chart: {
        type: "donut",
        events: {
          mounted: function (chartContext, config) {
            const svg = chartContext.el.querySelector("svg");
            const centerText = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "text",
            );
            centerText.setAttribute("x", svg.clientWidth / 2);
            centerText.setAttribute("y", svg.clientHeight / 2);
            centerText.setAttribute("text-anchor", "middle");
            centerText.setAttribute("dominant-baseline", "middle");
            centerText.setAttribute("font-size", "14px");
            centerText.setAttribute("font-weight", "bold");
            centerText.setAttribute("fill", "#FF7049");
            centerText.textContent = "GOLANG";
            svg.appendChild(centerText);
          },
        },
      },
      colors: ["#F7F8FB", "#FB6E48"], // Ranglarni bu yerda moslang
      dataLabels: {
        enabled: false, // Foizlarni olib tashlash
      },
      tooltip: {
        enabled: false, // Tooltipni o'chirish
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
            },
          },
        },
      },
      legend: {
        show: false, // Legendni yashirish
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 180,
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
      />
    </div>
  );
};

export default PieChart2;
