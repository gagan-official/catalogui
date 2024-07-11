import { useState } from "react";
import Chart from "react-apexcharts";

const AreaChart = ({ timeFrame }) => {
  const [bg, setbg] = useState("bg-[--themeColor]");
  const chartHeight = 350;
  const crosshairs = {
    show: true,
    width: 1,
    position: "back",
    stroke: {
      color: "#b6b6b6",
      width: 1,
      dashArray: 5,
    },
  };
  const data = {
    "1d": [
      { x: new Date("2023-07-01T00:00:00").getTime(), y: 30000, volume: 11500 },
      { x: new Date("2023-07-01T01:00:00").getTime(), y: 40000, volume: 12000 },
      { x: new Date("2023-07-01T02:00:00").getTime(), y: 35000, volume: 12500 },
      { x: new Date("2023-07-01T03:00:00").getTime(), y: 50000, volume: 13000 },
      { x: new Date("2023-07-01T04:00:00").getTime(), y: 49000, volume: 13500 },
      { x: new Date("2023-07-01T05:00:00").getTime(), y: 60000, volume: 14000 },
      { x: new Date("2023-07-01T06:00:00").getTime(), y: 70000, volume: 14500 },
    ],
    "3d": [
      { x: new Date("2023-07-01T00:00:00").getTime(), y: 20000, volume: 11000 },
      { x: new Date("2023-07-02T00:00:00").getTime(), y: 30000, volume: 11060 },
      { x: new Date("2023-07-03T00:00:00").getTime(), y: 25000, volume: 11020 },
      { x: new Date("2023-07-04T00:00:00").getTime(), y: 35000, volume: 1660 },
      { x: new Date("2023-07-05T00:00:00").getTime(), y: 45000, volume: 11180 },
    ],
    "1w": [
      { x: new Date("2023-07-01").getTime(), y: 45000, volume: 11060 },
      { x: new Date("2023-07-02").getTime(), y: 52000, volume: 11020 },
      { x: new Date("2023-07-03").getTime(), y: 48000, volume: 1660 },
      { x: new Date("2023-07-04").getTime(), y: 55000, volume: 11180 },
      { x: new Date("2023-07-05").getTime(), y: 50000, volume: 11120 },
      { x: new Date("2023-07-06").getTime(), y: 60000, volume: 11200 },
      { x: new Date("2023-07-07").getTime(), y: 65000, volume: 11140 },
    ],
    "1m": [
      { x: new Date("2023-06-01").getTime(), y: 62000, volume: 1620 },
      { x: new Date("2023-06-02").getTime(), y: 64000, volume: 1640 },
      { x: new Date("2023-06-03").getTime(), y: 60000, volume: 1600 },
      { x: new Date("2023-06-04").getTime(), y: 74000, volume: 1740 },
      { x: new Date("2023-06-05").getTime(), y: 68000, volume: 1680 },
      { x: new Date("2023-06-06").getTime(), y: 70000, volume: 1700 },
      { x: new Date("2023-06-07").getTime(), y: 76000, volume: 1760 },
      { x: new Date("2023-06-08").getTime(), y: 84000, volume: 1840 },
      { x: new Date("2023-06-09").getTime(), y: 72000, volume: 1720 },
      { x: new Date("2023-06-10").getTime(), y: 88000, volume: 1880 },
      { x: new Date("2023-06-11").getTime(), y: 80000, volume: 1800 },
      { x: new Date("2023-06-12").getTime(), y: 86000, volume: 1860 },
      { x: new Date("2023-06-13").getTime(), y: 78000, volume: 1780 },
      { x: new Date("2023-06-14").getTime(), y: 92000, volume: 1920 },
      { x: new Date("2023-06-15").getTime(), y: 94000, volume: 1940 },
      { x: new Date("2023-06-16").getTime(), y: 82000, volume: 1820 },
      { x: new Date("2023-06-17").getTime(), y: 108000, volume: 11080 },
      { x: new Date("2023-06-18").getTime(), y: 96000, volume: 1960 },
      { x: new Date("2023-06-19").getTime(), y: 98000, volume: 1980 },
      { x: new Date("2023-06-20").getTime(), y: 90000, volume: 1900 },
      { x: new Date("2023-06-21").getTime(), y: 104000, volume: 11040 },
      { x: new Date("2023-06-22").getTime(), y: 100000, volume: 11000 },
      { x: new Date("2023-06-23").getTime(), y: 106000, volume: 11060 },
      { x: new Date("2023-06-24").getTime(), y: 102000, volume: 11020 },
      { x: new Date("2023-06-25").getTime(), y: 66000, volume: 1660 },
      { x: new Date("2023-06-26").getTime(), y: 118000, volume: 11180 },
      { x: new Date("2023-06-27").getTime(), y: 112000, volume: 11120 },
      { x: new Date("2023-06-28").getTime(), y: 120000, volume: 11200 },
      { x: new Date("2023-06-29").getTime(), y: 114000, volume: 11140 },
      { x: new Date("2023-06-30").getTime(), y: 110000, volume: 11100 },
      { x: new Date("2023-07-01").getTime(), y: 116000, volume: 11160 },
    ],
    "6m": [
      { x: new Date("2023-01-01").getTime(), y: 120000, volume: 12000 },
      { x: new Date("2023-02-01").getTime(), y: 135000, volume: 13500 },
      { x: new Date("2023-03-01").getTime(), y: 115000, volume: 11500 },
      { x: new Date("2023-04-01").getTime(), y: 130000, volume: 13000 },
      { x: new Date("2023-05-01").getTime(), y: 110000, volume: 11000 },
      { x: new Date("2023-06-01").getTime(), y: 125000, volume: 12500 },
    ],
    "1y": [
      { x: new Date("2023-01-01").getTime(), y: 195000, volume: 19500 },
      { x: new Date("2023-02-01").getTime(), y: 185000, volume: 18500 },
      { x: new Date("2023-03-01").getTime(), y: 195000, volume: 19500 },
      { x: new Date("2023-04-01").getTime(), y: 190000, volume: 19000 },
      { x: new Date("2023-05-01").getTime(), y: 210000, volume: 21000 },
      { x: new Date("2023-06-01").getTime(), y: 200000, volume: 20000 },
      { x: new Date("2023-07-01").getTime(), y: 230000, volume: 23000 },
      { x: new Date("2023-08-01").getTime(), y: 180000, volume: 18000 },
      { x: new Date("2023-09-01").getTime(), y: 250000, volume: 25000 },
      { x: new Date("2023-10-01").getTime(), y: 240000, volume: 24000 },
      { x: new Date("2023-11-01").getTime(), y: 200000, volume: 20000 },
      { x: new Date("2023-12-01").getTime(), y: 220000, volume: 22000 },
    ],
    max: [
      { x: new Date("2023-01-01").getTime(), y: 300000, volume: 11500 },
      { x: new Date("2023-01-02").getTime(), y: 310000, volume: 11500 },
    ],
  };

  const options = {
    chart: {
      stacked: true,
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
      fontFamily: "CircularStd",
      events: {
        dataPointMouseEnter: function () {
          setbg("bg-[--darkThemeColor]");
        },
        dataPointMouseLeave: function () {
          setbg("bg-[--themeColor]");
        },
      },
    },
    colors: ["#4B40EE", "#000"],
    stroke: {
      width: [2, 0],
      curve: "straight",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: "10%",
        colors: {
          backgroundBarColors: ["#000"],
          backgroundBarOpacity: 0,
        },
      },
    },
    fill: {
      type: ["gradient", "solid"],
      colors: ["#4B40EE", "#000"],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.3,
        stops: [0, 90],
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
        // style: {
        //   colors: "#9aa0ac",
        //   fontSize: "12px",
        // },
      },
      tooltip: {
        style: {
          fontSize: "1rem",
        },
      },
      crosshairs: crosshairs,
    },
    yaxis: {
      tooltip: {
        enabled: true,
        style: {
          fontSize: "1.2rem",
        },
      },
      labels: {
        show: false,
        // style: {
        //   colors: "#9aa0ac",
        //   fontSize: "12px",
        // },
      },
      crosshairs: crosshairs,
    },
    // {
    //   opposite: true,
    //   // tooltip: {
    //   //   enabled: true,
    //   //   style: {
    //   //     fontSize: "1.2rem",
    //   //   },
    //   // },
    //   labels: {
    //     show: false,
    //     // style: {
    //     //   colors: "#9aa0ac",
    //     //   fontSize: "12px",
    //     // },
    //   },
    //   // crosshairs: crosshairs,
    // },

    tooltip: {
      theme: "dark",
      x: {
        show: false,
        // format: "dd MMM yyyy",
      },
      y: {
        formatter: function (value) {
          return value + " USD";
        },
      },
      cssCLass: bg,
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        return (
          `<div class='arrow_box ${bg} py-1 px-3 text-base'><span>` +
          series[seriesIndex][dataPointIndex].toLocaleString() +
          "</span></div>"
        );
      },
      marker: {
        show: false,
      },
      fixed: {
        enabled: true,
        position: "topRight",
        offsetX: 3,
        offsetY: chartHeight / 2 - 16,
      },
      fillSeriesColor: true,
    },
    grid: {
      borderColor: "#E2E4E7",
      //   clipMarkers: false,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  const series = [
    {
      name: "Price",
      type: "area",
      data: data[timeFrame].map((item) => ({ x: item.x, y: item.y })),
    },
    {
      name: "Volume",
      type: "column",
      data: data[timeFrame].map((item) => ({ x: item.x, y: item.volume })),
    },
  ];

  return (
    <Chart options={options} series={series} type="area" height={chartHeight} />
  );
};

export default AreaChart;
