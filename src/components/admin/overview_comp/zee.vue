<template>
  <div>
    <div class="card" style="height: 565px">
      <div class="card-header">Applications Activity</div>
      <div class="card-body">
        <apexchart
          class="at"
          height="500"
          width="850"
          type="line"
          :options="options"
          :series="series"
        >
        </apexchart>
      </div>
    </div>
  </div>
</template>

<style scoped>
.at {
  margin-left: 64px !important;
}
</style>

<script>
export default {
  data: () =>
    ({
      series: [
        {
          name: "Profit",
          data: [17, 19, 13, 25, 29],
        },
        {
          name: "Time",
          data: [1, 5, 6, 10, 12],
        },
      ],
      options: {
        responsive: [
          {
            breakpoint: 1000,
            options: {
              chart: {
                width: 350,
              },
            },
          },
          {
            breakpoint: 1100,
            options: {
              chart: {
                width: 700,
              },
            },
          },
        ],
        legend: {
          offsetX: 400,
          offsetY: 0,
          itemMargin: {
            horizontal: 60,
            vertical: 70,
          },
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: 7,
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "1/11/2000",
            "2/11/2000",
            "3/11/2000",
            "4/11/2000",
            "5/11/2000",
          ],
          tickAmount: 6,
          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), "MMM");
            },
          },
        },
        fill: {
          colors: ["#3568CE", "#E4F9F0"],
        },
        markers: {
          size: 4,
          colors: ["#249EFA", "#24E5A4"],
          strokeWidth: 4,
          hover: {
            size: 7,
          },
        },
        yaxis: {
          min: 0,
          max: 40,
        },
      },
    }),
};
</script>
