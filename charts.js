let options = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "sales",
      data: [2568, 5285, 4872, 3689, 5863, 5263],
    },
  ],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
  stroke: {
    curve: "smooth",
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  title: {
    text: "Work Summary",
    align: "center",
    style: {
      fontSize: "16px",
      color: "#2d73ce",
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
