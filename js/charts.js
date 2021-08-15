//Dash One ===================

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
    align: "center",
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
      data: [400, 430, 448, 470, 540, 580, 690, 1200, 1380],
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
  title: {
    text: "Total Sales Per Country",
    align: "center",
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

