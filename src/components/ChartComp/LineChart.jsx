import Chart from "react-apexcharts";

const AreaChartWithCrosshairs = ({ timeFrame }) => {
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
      { x: new Date("2023-07-01T00:00:00").getTime(), y: 30000 },
      { x: new Date("2023-07-01T01:00:00").getTime(), y: 40000 },
      { x: new Date("2023-07-01T02:00:00").getTime(), y: 35000 },
      { x: new Date("2023-07-01T03:00:00").getTime(), y: 50000 },
      { x: new Date("2023-07-01T04:00:00").getTime(), y: 49000 },
      { x: new Date("2023-07-01T05:00:00").getTime(), y: 60000 },
      { x: new Date("2023-07-01T06:00:00").getTime(), y: 70000 },
    ],
    "3d": [
      { x: new Date("2023-07-01T00:00:00").getTime(), y: 20000 },
      { x: new Date("2023-07-02T00:00:00").getTime(), y: 30000 },
      { x: new Date("2023-07-03T00:00:00").getTime(), y: 25000 },
      { x: new Date("2023-07-04T00:00:00").getTime(), y: 35000 },
      { x: new Date("2023-07-05T00:00:00").getTime(), y: 45000 },
    ],
    "1w": [
      { x: new Date("2023-07-01").getTime(), y: 45000 },
      { x: new Date("2023-07-02").getTime(), y: 52000 },
      { x: new Date("2023-07-03").getTime(), y: 48000 },
      { x: new Date("2023-07-04").getTime(), y: 55000 },
      { x: new Date("2023-07-05").getTime(), y: 50000 },
      { x: new Date("2023-07-06").getTime(), y: 60000 },
      { x: new Date("2023-07-07").getTime(), y: 65000 },
    ],
    "1m": [
      { x: new Date("2023-06-01").getTime(), y: 60000 },
      { x: new Date("2023-06-02").getTime(), y: 62000 },
      { x: new Date("2023-06-03").getTime(), y: 64000 },
      { x: new Date("2023-06-04").getTime(), y: 66000 },
      { x: new Date("2023-06-05").getTime(), y: 68000 },
      { x: new Date("2023-06-06").getTime(), y: 70000 },
      { x: new Date("2023-06-07").getTime(), y: 72000 },
      { x: new Date("2023-06-08").getTime(), y: 74000 },
      { x: new Date("2023-06-09").getTime(), y: 76000 },
      { x: new Date("2023-06-10").getTime(), y: 78000 },
      { x: new Date("2023-06-11").getTime(), y: 80000 },
      { x: new Date("2023-06-12").getTime(), y: 82000 },
      { x: new Date("2023-06-13").getTime(), y: 84000 },
      { x: new Date("2023-06-14").getTime(), y: 86000 },
      { x: new Date("2023-06-15").getTime(), y: 88000 },
      { x: new Date("2023-06-16").getTime(), y: 90000 },
      { x: new Date("2023-06-17").getTime(), y: 92000 },
      { x: new Date("2023-06-18").getTime(), y: 94000 },
      { x: new Date("2023-06-19").getTime(), y: 96000 },
      { x: new Date("2023-06-20").getTime(), y: 98000 },
      { x: new Date("2023-06-21").getTime(), y: 100000 },
      { x: new Date("2023-06-22").getTime(), y: 102000 },
      { x: new Date("2023-06-23").getTime(), y: 104000 },
      { x: new Date("2023-06-24").getTime(), y: 106000 },
      { x: new Date("2023-06-25").getTime(), y: 108000 },
      { x: new Date("2023-06-26").getTime(), y: 110000 },
      { x: new Date("2023-06-27").getTime(), y: 112000 },
      { x: new Date("2023-06-28").getTime(), y: 114000 },
      { x: new Date("2023-06-29").getTime(), y: 116000 },
      { x: new Date("2023-06-30").getTime(), y: 118000 },
      { x: new Date("2023-07-01").getTime(), y: 120000 },
    ],
    "6m": [
      { x: new Date("2023-01-01").getTime(), y: 110000 },
      { x: new Date("2023-02-01").getTime(), y: 115000 },
      { x: new Date("2023-03-01").getTime(), y: 120000 },
      { x: new Date("2023-04-01").getTime(), y: 125000 },
      { x: new Date("2023-05-01").getTime(), y: 130000 },
      { x: new Date("2023-06-01").getTime(), y: 135000 },
    ],
    "1y": [
      { x: new Date("2023-01-01").getTime(), y: 200000 },
      { x: new Date("2023-02-01").getTime(), y: 190000 },
      { x: new Date("2023-03-01").getTime(), y: 195000 },
      { x: new Date("2023-04-01").getTime(), y: 180000 },
      { x: new Date("2023-05-01").getTime(), y: 185000 },
      { x: new Date("2023-06-01").getTime(), y: 195000 },
      { x: new Date("2023-07-01").getTime(), y: 200000 },
      { x: new Date("2023-08-01").getTime(), y: 210000 },
      { x: new Date("2023-09-01").getTime(), y: 220000 },
      { x: new Date("2023-10-01").getTime(), y: 230000 },
      { x: new Date("2023-11-01").getTime(), y: 240000 },
      { x: new Date("2023-12-01").getTime(), y: 250000 },
    ],
    max: [
      { x: new Date("2023-01-01").getTime(), y: 300000 },
      { x: new Date("2023-01-02").getTime(), y: 310000 },
    ],
  };

  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
      fontFamily: "CircularStd",
    },
    colors: ["#4B40EE"],
    stroke: {
      width: 2,
      curve: "straight",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
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
    tooltip: {
      theme: "dark",
      followCursor: true,
      x: {
        show: false,
        // format: "dd MMM yyyy",
      },
      y: {
        formatter: function (value) {
          return value + " USD";
        },
      },
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        return (
          "<div class='arrow_box bg-[--themeColor] py-1 px-3 text-base'><span>" +
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
      name: "Data",
      data: data[timeFrame],
    },
  ];

  return (
    <Chart options={options} series={series} type="area" height={chartHeight} />
  );
};

export default AreaChartWithCrosshairs;
