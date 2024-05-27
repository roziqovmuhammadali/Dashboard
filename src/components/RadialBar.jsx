import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [75, 50, 15],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              show: false,
            },
            total: {
              show: false,
              label: "Total",
              formatter: (w) => {
                return 359;
              },
            },
          },
        },
        colors: ["#563AFE", "#FF6F4A", "#1FC996"], // Har bir barning yangi rangi
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={360}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexCharts;
