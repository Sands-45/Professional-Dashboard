let options = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "Sales",
      data: [2568, 5285, 4872, 3689, 5863, 5263],
    },
	{
      name: "Lose",
      data: [256, 585, 1002, 859, 863, 630],
    }
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
    text: "Annual Revenue",
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
