<template>
  <div class="card">
    <div class="card-header">Recent order</div>
    <div class="card-body">
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
            <i class="fas fa-circle" style="color: #06d9a6; font-weight: bold"></i>
            <span style="color: #06d9a6; font-weight: bold">{{order.status}}</span>
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
  },
 /*  color() {
    if(this.order.status == "pending"){
      
    }
  }, */
  created() {
    axios
      .get("https://masla7a.herokuapp.com/admin/control/orders/recent-orders", {
        headers: { "x-auth-token": localStorage.getItem("token") },
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
</style>
