let options = {
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
    opacity: [0.35, .4],
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

let chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

/* =======================Chart 2 ==================*/

var options2 = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
  chart: {
    type: "bar",
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
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();
