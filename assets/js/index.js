"use strict";
$(function () {
  chart1();
  chart2();
  chart3();
  chart4();
  chart5();
});

function chart1() {
  var options = {
    series: [
      {
        name: "Product 1",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 552, 487],
      },
      {
        name: "Product 2",
        type: "line",
        data: [440, 510, 410, 677, 230, 410, 510, 420],
      },
    ],
    chart: {
      height: 350,
      type: "line",
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: 0,
              to: 450,
              color: "#4F5BBC",
            },
            {
              from: 451,
              to: 500,
              color: "#E43630",
            },
            {
              from: 501,
              to: 800,
              color: "#E43630",
            },
          ],
        },
      },
    },
    legend: {
      show: true,
      labels: {
        colors: "#9aa0ac",
      },
    },
    stroke: {
      width: [0, 4],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "aug", "sep"],
    xaxis: {
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();
}

function chart2() {
  var options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        name: "Project 1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Project 2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    legend: {
      show: true,
      labels: {
        colors: "#9aa0ac",
      },
    },
    xaxis: {
      categories: ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
        style: {
          color: "#9aa0ac",
        },
      },
      labels: {
        style: {
          colors: "#9aa0ac",
        },
      },
    },
    colors: ["#6973C6", "#FC8380"],
    tooltip: {
      theme: "dark",
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);

  chart.render();
}
function chart3() {
  var chart = document.getElementById("echart_graph_line");
  var barChart = echarts.init(chart);

  barChart.setOption({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      textStyle: { color: "#9aa0ac" },
      data: ["sales", "purchases"],
    },
    toolbox: {
      show: !1,
    },
    calculable: !1,
    xAxis: [
      {
        type: "category",
        data: ["2000", "2001", "2002", "2003", "2004", "2005"],
        axisLabel: {
          fontSize: 10,
          color: "#9aa0ac",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          fontSize: 10,
          color: "#9aa0ac",
        },
      },
    ],
    series: [
      {
        name: "sales",
        type: "bar",
        data: [22, 54, 37, 23, 25.6, 76],
        markPoint: {
          data: [
            {
              type: "max",
              name: "???",
            },
            {
              type: "min",
              name: "???",
            },
          ],
        },
        markLine: {
          data: [
            {
              type: "average",
              name: "???",
            },
          ],
        },
      },
      {
        name: "purchases",
        type: "bar",
        data: [35, 45, 47, 10, 35, 70],
        markPoint: {
          data: [
            {
              name: "sales",
              value: 182.2,
              xAxis: 7,
              yAxis: 183,
            },
            {
              name: "purchases",
              value: 2.3,
              xAxis: 11,
              yAxis: 3,
            },
          ],
        },
        markLine: {
          data: [
            {
              type: "average",
              name: "???",
            },
          ],
        },
      },
    ],
    color: ["#636FC3", "#D3D3D3"],
  });
}
function chart4() {
  /* area line chart */
  var chart = document.getElementById("echart_area_line");
  var lineChart = echarts.init(chart);

  lineChart.setOption({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      textStyle: { color: "#9aa0ac" },
      data: ["Product1", "Product2", "Product3"],
    },
    toolbox: {
      show: !1,
    },
    calculable: !1,
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLabel: {
          fontSize: 10,
          color: "#9aa0ac",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          fontSize: 10,
          color: "#9aa0ac",
        },
      },
    ],
    series: [
      {
        name: "Product1",
        type: "line",
        smooth: !0,
        itemStyle: {
          normal: {
            areaStyle: {
              type: "default",
            },
          },
        },
        data: [10, 12, 21, 54, 260, 830, 710],
      },
      {
        name: "Product2",
        type: "line",
        smooth: !0,
        itemStyle: {
          normal: {
            areaStyle: {
              type: "default",
            },
          },
        },
        data: [30, 182, 434, 791, 390, 30, 10],
      },
      {
        name: "Product3",
        type: "line",
        smooth: !0,
        itemStyle: {
          normal: {
            areaStyle: {
              type: "default",
            },
          },
        },
        data: [10, 132, 351, 120, 80, 400, 20],
      },
    ],
    color: [
      "rgba(102,119,239,0.6)",
      "rgba(251,110,28,0.6)",
      "rgba(12,230,49,0.6)",
    ],
  });
}
function chart5() {
  var chartdata = [
    {
      name: "sales",
      type: "bar",
      barMaxWidth: 10,
      data: [13, 14, 10, 16, 11, 13],
    },

    {
      name: "growth",
      type: "bar",
      barMaxWidth: 10,
      data: [10, 14, 10, 15, 9, 25],
    },
  ];

  var chart = document.getElementById("echart_bar");
  var barChart = echarts.init(chart);

  var option = {
    grid: {
      top: "6",
      right: "0",
      bottom: "17",
      left: "25",
    },
    xAxis: {
      data: ["2014", "2015", "2016", "2017", "2018"],

      axisLabel: {
        fontSize: 10,
        color: "#9aa0ac",
      },
    },
    tooltip: {
      show: true,
      showContent: true,
      alwaysShowContent: false,
      triggerOn: "mousemove",
      trigger: "axis",
      axisPointer: {
        label: {
          show: false,
        },
      },
    },
    yAxis: {
      axisLabel: {
        fontSize: 10,
        color: "#9aa0ac",
      },
    },
    series: chartdata,
    color: ["#9f78ff", "#32cafe"],
  };

  barChart.setOption(option);
}
