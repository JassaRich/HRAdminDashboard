"use strict";
$(function () {
  reportChart();
});

function reportChart() {
  am5.ready(function () {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("pieChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
      })
    );

    series.states.create("hidden", {
      endAngle: -90,
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([
      {
        category: "Early In Time",
        value: 56,
      },
      {
        category: "Late In Time",
        value: 20,
      },
      {
        category: "Early Out Time",
        value: 15,
      },
      {
        category: "Late Out Time",
        value: 75,
      },
      {
        category: "On Leave",
        value: 5,
      },
    ]);

    series.appear(1000, 100);
  }); // end am5.ready()
}
