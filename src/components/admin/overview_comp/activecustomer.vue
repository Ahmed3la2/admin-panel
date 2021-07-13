<template>
  <div class="card">
    <div class="card-header">Active Customer</div>
    <div class="card-body">
      <div class="row">
        <div class="col-8 user-status">
          <p>{{ numberOfActiveCustomers }}</p>
          <p class="active-cus-percent">{{ percentageOfActiveCustomers }}%</p>
        </div>
        <div class="col-4">
          <apexchart
            width="100"
            type="line"
            :options="options"
            :series="options.series"
          >
          </apexchart>
        </div>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item"
        v-for="active in activeCustomers"
        :key="active._id"
      >
        <div class="row">
          <div class="col-4">
            <img width="60px" alt="userImage" :src="active.profilePic" />
          </div>
          <div class="col-8">
            <p>{{ active.name }}</p>
            <p>{{ active.numberOfOrders }} orders</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
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

.overview .card .card-body .user-status p {
  margin: 0;
}
.overview .card .card-body .user-status p:first-child {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 2px;
}
.overview .card .card-body .user-status .active-cus-percent {
  color: #00e396;
}
.overview .card ul li {
  padding-bottom: 22px;
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
  props: ["dateFrom", "dateTo"],
  data: () => ({
    numberOfActiveCustomers: "",
    percentageOfActiveCustomers: "",
    activeCustomers: [],
    options: {
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
  methods: {
    callApi() {
      let queryParam = {};
      if (this.dateFrom) {
        queryParam["date_from"] = new Date(this.dateFrom).toDateString();
      }
      if (this.dateTo) {
        queryParam["date_to"] = new Date(this.dateTo).toDateString();
      }

      axios
        .get(
          "https://masla7a.herokuapp.com/admin/control/users/active-customers",
          {
            headers: { "x-auth-token": localStorage.getItem("token") },
            params: {
              ...queryParam,
            },
          }
        )
        .then((res) => {
          this.activeCustomers = res.data.activeCustomers;
          this.numberOfActiveCustomers = res.data.numberOfActiveCustomers;
          this.percentageOfActiveCustomers =
            res.data.percentageOfActiveCustomers;
        });
    },
  },
  created() {
    this.callApi();
  },
  watch: {
    dateFrom: function () {
      this.callApi();
    },
    dateTo: function (val) {
      console.log("🚀 ~ file: newuser.vue ~ line 141 ~ val", val);
      this.callApi();
    },
  },
  async onApply() {
    console.log(this.dateFrom);
    console.log(this.dateTo);
    let queryParam = {};
    if (this.dateFrom) {
      queryParam["date_from"] = this.dateFrom;
    }
    if (this.dateTo) {
      queryParam["date_to"] = this.dateTo;
    }

    axios
      .get(
        "https://masla7a.herokuapp.com/admin/control/users/active-customers",
        {
          headers: { "x-auth-token": localStorage.getItem("token") },
          params: {
            ...queryParam,
          },
        }
      )
      .then((res) => {
        this.activeCustomers = res.data.activeCustomers;
        this.numberOfActiveCustomers = res.data.numberOfActiveCustomers;
        this.percentageOfActiveCustomers = res.data.percentageOfActiveCustomers;
      });
  },
};
</script>
