<template>
  <div class="card">
    <div class="card-header">New User</div>
    <div class="card-body">
      <div class="row">
        <div class="col-8 user-status">
          <p>{{ numberOfNewUsers }}</p>
          <p class="new-user-percent">{{ percentageOfGrowing }}%</p>
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
      <li class="list-group-item" v-for="user in users" :key="user._id">
        <div class="row">
          <div class="col-4">
            <img width="60px" :src="user.profilePic" alt="userImage" />
          </div>
          <div class="col-8">
            <p>{{ user.name }}</p>
            <p>{{ user.memberForHours }} hours ago</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<!-- eslint-disable -->

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
.overview .card .card-body .user-status .new-user-percent {
  color: #ff004e;
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
    numberOfNewUsers: "",
    percentageOfGrowing: "",
    users: [],
    options: {
      colors: ["#FF004E", "#00E396"],
      chart: {
        id: "vuechart-example",
        sparkline: {
          enabled: true,
        },
      },
      series: [
        {
          name: "series-1",
          data: [55, 54, 56, 50, 47, 40, 30, 35, 31, 28, 14, 11],
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
        .get("https://masla7a.herokuapp.com/admin/control/users/new-users", {
          headers: { "x-auth-token": localStorage.getItem("token") },
          params: {
            ...queryParam,
          },
        })
        .then((res) => {
          this.users = res.data.users.slice(0, 4);
          this.numberOfNewUsers = res.data.numberOfNewUsers;
          this.percentageOfGrowing = res.data.percentageOfGrowing;
        });
    },
  },
  created() {
    this.callApi();
  },
  watch: {
    dateFrom: function (val) {
      this.callApi();
    },
    dateTo: function (val) {
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
      .get("https://masla7a.herokuapp.com/admin/control/users/new-users", {
        headers: { "x-auth-token": localStorage.getItem("token") },
        params: {
          ...queryParam,
        },
      })
      .then((res) => {
        this.users = res.data.users;
        console.log(this.users);
        this.numberOfNewUsers = res.data.numberOfNewUsers;
        this.percentageOfGrowing = res.data.percentageOfGrowing;
      });
  },
};
</script>
