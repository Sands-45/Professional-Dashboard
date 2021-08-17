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
      data: [25, 47, 50, 70, 100, 150],
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
    colors: ["#0c6ffd", "#6c747c", "#0ccbf0"],
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

//Dash One ===================

/* ==================Trend ============*/
var trend = {
  series: [
    {
      data: [
        400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 325, 125, 897, 564,
        785,
      ],
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
      borderRadius: 1,
    },
  },
  dataLabels: {
    enabled: false,
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
var trend = new ApexCharts(document.querySelector("#trend"), trend);
trend.render();

 /*===================== Comparison Chart ==============*/
 var monochrome = {
   series: [42, 47, 52, 58, 65],
   chart: {
     width: 380,
     type: "polarArea",
   },
   labels: ["Online", "Google", "Youtube", "Ads", "Twitter"],
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
 };

 var monochrome = new ApexCharts(document.querySelector("#monochrome"), monochrome);
 monochrome.render();