import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [series, setSeries] = useState([
    {
      name: "series1",
      data: [
        // Har bir oydagi boshlang'ich ma'lumotlar ro'yxatini o'zgartiring
        60, 58, 62, 60, 59, 61, 60, 62, 60, 59, 60, 61,
      ],
    },
  ]);

  // 2023 yilning har bir oyining nomlarini ro'yxatini yaratish
  const categories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false, // Toolbar elementlarini o'chirish
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      show: false, // Chap tomondagi raqamlarni yashirish
    },
    grid: {
      show: false, // Fon chiziqlarini olib tashlash
    },
    tooltip: {
      x: {
        formatter: function (
          value,
          { series, seriesIndex, dataPointIndex, w },
        ) {
          return `13 ${categories[dataPointIndex]}`;
        },
      },
    },
    fill: {
      colors: ["#FFFFFF"], // Chiziq rangini o'zgartirish
      type: "solid",
    },
  });

  return (
    <div style={{ position: "relative" }}>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="mb-10"
          style={{
            width: 10,
            height: 10,
            backgroundColor: "#563AFF", // Suyox rang
            borderRadius: "50%",
            marginRight: 8,
          }}
        ></div>
        <h1 className="font-bold mb-10 text-[#67648A]">Current Period</h1>
      </div>
    </div>
  );
};

export default ApexChart;
