//Dash One ===================

/* =============== miniStat RadialBar ============ */
let options1 = {
  series: [76, 67, 61],
  chart: {
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: "30%",
        background: "transparent",
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        },
      },
    },
  },
  colors: ["#0084ff", "#39539E", "#0077B5"],
  labels: ["Online", "CallCenter", "Counter"],
  legend: {
    show: true,
    floating: true,
    fontSize: "8px",
    position: "left",
    offsetY: -10,
    offsetX: -10,
    labels: {
      useSeriesColors: true,
    },
    markers: {
      size: 0,
    },
    formatter: function (seriesName, opts) {
      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
    },
    itemMargin: {
      vertical: 3,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          show: false,
        },
      },
    },
  ],
  title: {
    text: "Channel",
    align: "right",
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      fontFamily: "sans-serif",
      color: "#bee3db",
    },
  },
};
const chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();

/* =============== Polar chart Monochrome ============ */
let options2 = {
  series: [42, 47, 52],
  chart: {
    type: "polarArea",
  },
  labels: ["Steers", "Deb", "Fishawyas"],
  fill: {
    opacity: 1,
  },
  stroke: {
    width: 1,
    colors: undefined,
  },
  yaxis: {
    show: false,
  },
  legend: {
    position: "bottom",
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0,
      },
      spokes: {
        strokeWidth: 0,
      },
    },
  },
  theme: {
    monochrome: {
      enabled: true,
      shadeTo: "light",
      shadeIntensity: 0.6,
    },
  },
  title: {
    text: "Upsell By Brand",
    align: "right",
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      fontFamily: "sans-serif",
      color: "#bee3db",
    },
  },
};
const chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();

/* ===============Chart One ===========*/
let options3 = {
  series: [
    {
      name: "Sales",
      type: "area",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: "Comparison",
      type: "line",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ],
  chart: {
    type: "line",
  },
  stroke: {
    curve: "smooth",
  },
  fill: {
    type: "solid",
    opacity: [0.35, 0.4],
  },
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep ",
    "Oct",
    "Nov",
  ],
  markers: {
    size: 0,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  title: {
    text: "Sales By Year",
    align: "right",
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      fontFamily: "sans-serif",
      color: "#bee3db",
    },
  },
};
const chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();

/* =======================Chart 2 ==================*/
let options4 = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
  chart: {
    type: "bar",
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "South Africa",
      "Canada",
      "United Kingdom",
      "Netherlands",
      "Italy",
      "France",
      "Japan",
      "United States",
      "China",
      "Germany",
    ],
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  title: {
    text: "Total Sales Per Country",
    align: "right",
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      fontFamily: "sans-serif",
      color: "#bee3db",
    },
  },
};
const chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.render();

