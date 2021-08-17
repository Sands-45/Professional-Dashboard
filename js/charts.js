//Dash One ===================
/* ============Total Orders =======*/
var totalOrders = {
  chart: {
    type: "area",
    height: 130,
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      data: [125, 365, 568, 569, 585, 253, 258, 124, 489],
    },
  ],
  yaxis: {
    labels: {
      formatter: function (value) {
        return;
      },
    },
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return;
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
};
var totalOrders = new ApexCharts(
  document.querySelector("#totalOrders"),
  totalOrders
);
totalOrders.render();
/*========== Sales Donut ===============*/
let salesDonut = {
  series: [44, 55, 20],
  chart: {
    type: "donut",
    height: 130,
  },
  labels: ["Deb", "Steers", "Fish"],
  fill: {
    colors: ["#0c6ffd", "#dc3545", "#0ccbf0"],
  },
  stroke: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "bottom",
    offsetY: -5,
    show: false,
  },
};

const donut = new ApexCharts(document.querySelector("#salesDonut"), salesDonut);
donut.render();
/* ===============Chart One ===========*/
let options3 = {
  series: [
    {
      name: "Sales",
      type: "area",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 60],
    },
    {
      name: "Comparison",
      type: "line",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 71],
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
};
const chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();

/* =======================Chart 2 ==================*/
let options4 = {
  series: [
    {
      data: [400, 430, 500, 1025, 800, 580, 690, 1200, 1380],
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
      "Free State",
      "Limpopo",
      "Northen Cpae",
      "North West",
      "Mpumalanga",
      "Eastern Cape",
      "Kwazulu-Natal",
      "Western Cape",
      "Gauteng",
    ],
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
};
const chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.render();
