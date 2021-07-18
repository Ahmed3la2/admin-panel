<template>
  <div class="p-4">
         <div class="row mb-3 mt-4">
      <div class="col-4 col-md-7">
        <h4 class="head">All orders</h4>
      </div>
      <div class="col-12 col-md-5">
        <div class="d-flex">
          <div class="form-group">
            <span>From</span>
            <input
              style="color: #afadad; font-size: 14px; font-weight: 600"
              id="date"
              type="date"
              v-model="dateFrom"
              class="form-control"
              placeholder="MM/DD/YYYY"
            />
           
          </div>

          <div class="form-group ml-4">
            <span>To</span>
            <input
              style="color: #afadad; font-size: 14px; font-weight: 600"
              id="date"
              type="date"
              v-model="dateTo"
              class="form-control"
              placeholder="MM/DD/YYYY"
            />
           
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div
        class="card-header"
        style="
          background: white;
          border: none;
          color: rgb(104 145 228);
          font-weight: 700;
        "
      >
        All  Order List
      </div>
      <div class="card-body" style="padding: 0">
        <table class="table">
          <tr>
            <td>id</td>
            <td>Date</td>
            <td>Customer</td>
            <td>Service Provider</td>
            <td>Category</td>
            <td>location</td>
            <td>Status</td>
            <td>Total</td>
          </tr>

          <tr v-for="order in orders" :key="order._id">
            <td>
              OR- {{ order._id.slice(0, 10) }} <br />
              {{ order._id.slice(10) }}
            </td>
            <td>{{ checkDate(order.startsAt) }}</td>
            <td>
              <div class="row top-list">
                <div class="col-3">
                  <img
                    width="50px"
                    height="40px"
                    src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
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
                  <img
                    width="50px"
                    height="40px"
                    src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    alt=""
                  />
                </div>
                <div class="col-8">
                  <div style="width: 110px">
                    <p class="mt-2 ml-3">{{ order.serviceProvider.name }}</p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="row top-list">
                <div class="col-3">
                  <img width="50px" height="40px" alt="" />
                </div>
                <div class="col-8">
                  <div style="width: 110px">
                    <p class="mt-2 ml-3">{{ order.category.name }}</p>
                  </div>
                </div>
              </div>
            </td>
            <td>{{ order.city }}</td>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dateFrom: "",
      dateTo: "",
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

        console.log("🚀 ~ file: orders.vue ~ line 167 ~ callApi ~ queryParam", queryParam)
      axios
        .get("https://masla7a.herokuapp.com/admin/control/orders/?categoryId=60cb6796d2296447589e24a1&sort=date_desc", {
          headers: { "x-auth-token": localStorage.getItem("token") },
          params: {
            ...queryParam,
          },
        })
        .then((res) => {
          this.orders = res.data.orders.slice(0, 6);
        });
    },
  },
  created() {
    this.callApi();
  },
  watch: {
    dateFrom: function (val) {
      this.callApi();
      console.log(val);
    },
    dateTo: function (val) {
      this.callApi();
      console.log(val);
    },
  },
  // async onApply() {
  //   let queryParam = {};
  //   if (this.dateFrom) {
  //     queryParam["date_from"] = this.dateFrom;
  //   }
  //   if (this.dateTo) {
  //     queryParam["date_to"] = this.dateTo;
  //   }

  //   axios
  //     .get("https://masla7a.herokuapp.com/admin/control/orders/?categoryId=60cb6796d2296447589e24a1&sort=date_desc", {
  //       headers: { "x-auth-token": localStorage.getItem("token") },
  //       params: {
  //         ...queryParam,
  //       },
  //     })
  //     .then((res) => {
  //       this.orders = res.data.orders.slice(0, 5);
  //     });
  // },
};
</script>

<style scoped>
span{
  font-weight: bold;
}
.head {
  font-weight: bolder;
}

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
</style>
