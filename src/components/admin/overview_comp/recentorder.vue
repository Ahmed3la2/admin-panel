<template>
  <div class="card">
    <div class="card-header" style="border-bottom: none">Recent order</div>
    <div class="card-body" style="padding: 0">
      <table class="table">
        <tr>
          <td>Date</td>
          <td>Customer</td>
          <td>Service Provider</td>
          <td>Status</td>
          <td>Total</td>
        </tr>

        <tr v-for="order in orders" :key="order._id">
          <td>{{ checkDate(order.startsAt) }}</td>
          <td>
            <div class="row top-list">
              <div class="col-3">
                <img
                  width="50px"
                  height="40px"
                  :src="order.customer.profilePic"
                  alt=""
                />
              </div>
              <div class="col-8">
                <div class="mt-2" style="width: 110px">
                  <p class="mt-2 ml-3">{{ order.customer.name }}</p>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="row top-list">
              <div class="col-3">
                <img width="50px" height="40px" :src="order.serviceProvider.profilePic" alt="" />
              </div>
              <div class="col-8">
                <div style="width: 110px">
                  <p class="mt-2 ml-3">{{ order.serviceProvider.name }}</p>
                </div>
              </div>
            </div>
          </td>

          <td>
            <i
              :class="{
                pending: order.status == 'pending',
                compelted: order.status == 'completed',
                canceled: order.status == 'canceled',
              }"
              class="fas fa-circle"
              style="
                color: #06d9a6;
                font-weight: bold;
                font-size: 8px;
                margin-right: 9px;
              "
            ></i>
            <span
              :class="{
                pending: order.status == 'pending',
                compelted: order.status == 'completed',
                canceled: order.status == 'canceled',
              }"
              style="color: #06d9a6; font-weight: bold; font-size: 14px"
              >{{ order.status }}</span
            >
          </td>

          <td class="font-weight-bold">${{ order.price }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["dateFrom", "dateTo"],
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    checkDate(date) {
      console.log("Date here: ", new Date(date).toDateString());
      return new Date(date).toDateString();
    },
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
          "https://masla7a.herokuapp.com/admin/control/orders/recent-orders",
          {
            headers: { "x-auth-token": localStorage.getItem("token") },
            params: {
              ...queryParam,
            },
          }
        )
        .then((res) => {
          this.orders = res.data.orders.slice(0, 4);
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
    dateTo: function () {
      this.callApi();
    },
  },
  async onApply() {
    let queryParam = {};
    if (this.dateFrom) {
      queryParam["date_from"] = this.dateFrom;
    }
    if (this.dateTo) {
      queryParam["date_to"] = this.dateTo;
    }

    axios
      .get("https://masla7a.herokuapp.com/admin/control/orders/recent-orders", {
        headers: { "x-auth-token": localStorage.getItem("token") },
        params: {
          ...queryParam,
        },
      })
      .then((res) => {
        this.orders = res.data.orders;
      });
  },
};
</script>

<style scoped>
td {
  vertical-align: middle;
}
table tr .row img {
  border-radius: 5px;
}
table tr .row p {
  padding-bottom: 15px;
}
.pending {
  color: orange !important;
}
.compelted {
  color: #06d9a6 !important;
}
.canceled {
  color: red !important;
}
.card-header {
  background-color: white !important;
  color: rgb(107, 107, 107);
  font-weight: 500;
}
</style>
