<template>
  <div class="card">
    <div class="card-header">Total User</div>
    <div class="card-body" style="border-bottom: 1px solid #dfdfdf">
      <div class="row">
        <div class="col-8 user-status">
          <p>{{ totalUsers }}</p>
          <p>+25%</p>
        </div>
        <div class="col-4">
          <apexchart
            width="100"
            type="line"
            :options="coptions"
            :series="coptions.series"
          >
          </apexchart>
        </div>
      </div>
    </div>
    <div class="card-body">
      <apexchart
        width="360"
        type="pie"
        :options="options"
        :series="options.series"
      >
      </apexchart>
    </div>
  </div>
</template>

<style>
.overview .card {
  /* padding: 10px; */
  border-radius: 5px;
  box-shadow: 0 0 12px rgb(0 0 0 / 26%);
}
.overview .card .card-header {
  background-color: white !important;
  color: rgb(107, 107, 107);
  font-weight: 500;
}
.overview .card .card-body .apexcharts-canvas {
  margin-left: -64;
}
.overview .card .card-body .apexcharts-canvas {
  margin-left: -64px;
}
.overview .card .card-body .user-status p {
  margin: 0;
}
.overview .card .card-body .user-status p:first-child {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 2px;
}
.overview .card .card-body .user-status p:nth-child(2) {
  color: #00e396;
}
.overview .card ul li {
  padding-bottom: 0;
}
.overview .card ul li:last-child {
  padding-bottom: 20;
}
.overview .card ul li img {
  width: 57px;
  border-radius: 5px;
  height: 42px;
}
.overview .card ul li .row p {
  margin: 0;
}
.overview .card ul li .row .col-8 p:first-child {
  font-size: 15px;
  font-weight: 600;
}
.overview .card ul li .row .col-8 p:last-child {
  font-size: 13px;
  color: #4e4c4c;
  font-weight: 400;
}
</style>

<script>
import axios from "axios";
export default {
  data: () => ({
    totalUsers: "",
    options: {
      colors: ["#4791FF", "#FFD950"],
      legend: {
        showForSingleSeries: true,
        show: true,
        inverseOrder: true,
        position: "bottom",
        offsetX: 0,
        offsetY: 0,
        floating: false,
      },
      labels: ["Customer", "service provider"],
      responsive: [
        {
          options: {
            chart: {
              sparkline: {
                enabled: true,
              },
            },
          },
        },
      ],
      series: [0, 0],
    },
    coptions: {
      colors: ["#00E396", "#FF004E"],
      chart: {
        id: "vuechart-example",
        sparkline: {
          enabled: true,
        },
      },
      series: [
        {
          name: "series-1",
          data: [55, 54, 56, 50, 57, 69, 71, 78, 80, 79, 87, 89],
        },
      ],
    },
  }),

  async beforeCreate() {
    const customers = await axios.get(
      "https://masla7a.herokuapp.com/admin/control/users/customers",
      {
        headers: { "x-auth-token": localStorage.getItem("token") },
      }
    );
    const providers = await axios.get(
      "https://masla7a.herokuapp.com/admin/control/users/service-providers",
      {
        headers: { "x-auth-token": localStorage.getItem("token") },
      }
    );
    this.totalUsers = customers.data.customersCount;
    this.options.series = [
      customers.data.customersCount,
      providers.data.serviceProvidersCount
    ];
  },
};
</script>
