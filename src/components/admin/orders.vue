<template>
  <div class="p-4">
    <div class="row mb-2">
      <div class="col-2">
        <h4 class="head pt-4">All orders</h4>
      </div>
      <div class="col-5">
        <div>
          <input
            type="text"
            style="color: #afadad; font-size: 14px; font-weight: 600"
            placeholder="filter by service provider name"
            class="form-control p-2"
            v-model="serviceprovidername"
          />
        </div>
        <div class="search-div pt-2">
          <input
            type="text"
            style="color: #afadad; font-size: 14px; font-weight: 600"
            placeholder="filter by customer name"
            class="form-control p-2"
            v-model="customername"
          />
        </div>
      </div>
      <div class="col-5">
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
        All Order List
      </div>
      <div class="card-body" style="padding: 0">
        <table class="table">
          <thead>
            <tr>
              <td>iD</td>
              <td>
                Date 
                <i class="fas fa-arrow-up" @click="sortedByDate()"></i> 
                <!-- <button >
                  <span v-if="oldestFirst" > lolo</span>
                  <span v-else >dina</span>
                 
                </button> -->
                
              </td>
              <td>Customer</td>
              <td>Service Provider</td>
              <td>Category</td>
              <td>location</td>
              <td>Status</td>
              <td>
                Total <i class="fas fa-arrow-up"></i>
              </td>
            </tr>
          </thead>
          <tbody v-for="order in orders" :key="order._id">
            <tr class="justify-content-center">
              <td>
                OR-{{ order._id.slice(0, 10) }} <br />
                {{ order._id.slice(10) }}
              </td>
              <td  >
                {{ checkDate(order.startsAt) }}</td>
              <td>
                <div class="row top-list mt-2">
                  <div class="col-3">
                    <img
                      width="50px"
                      height="40px"
                      :src="order.customer.profilePic"
                    />
                  </div>
                  <div class="col-9">
                    <p class="mt-2 ml-3">{{ order.customer.name }}</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="row top-list mt-2">
                  <div class="col-3">
                    <img
                      width="50px"
                      height="40px"
                      :src="order.serviceProvider.profilePic"
                    />
                  </div>
                  <div class="col-9">
                    <div>
                      <p class="mt-2 ml-3">{{ order.serviceProvider.name }}</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div class="row top-list mt-2">
                  <div class="col-3">
                    <img
                      width="50px"
                      height="40px"
                      :src="order.category.coverPhoto"
                    />
                  </div>
                  <div class="col-9">
                    <div>
                      <p class="mt-2 ml-1">{{ order.category.name }}</p>
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
          </tbody>
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
      oldestFirst: false,
      dateFrom: "",
      dateTo: "",
      serviceprovidername: "",
      customername: "",
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
      if (this.serviceprovidername) {
        queryParam["serach_serviceProvider"] = this.serviceprovidername;
      }
      if (this.customername) {
        queryParam["serach_customer"] = this.customername;
      }

      axios
        .get(
          "https://masla7a.herokuapp.com/admin/control/orders/?sort=date_desc",
          {
            headers: { "x-auth-token": localStorage.getItem("token") },
            params: {
              ...queryParam,
            },
          }
        )
        .then((res) => {
          this.orders = res.data.orders.slice(0, 6);
        });
    },
    sortedByDate(){
      this.oldestFirst = !this.oldestFirst;
    }
  },
  //   computed: {
  //   newDates: function() {
  //     var order = this.oldestFirst ? 1 : -1;
  //     // `this` points to the vm instance    
  //     this.dates.sort(function(a, b) {
  //       a = new Date(a.date);
  //       b = new Date(b.date);
  //       var results = a > b ? -1 : a < b ? 1 : 0;
  //       return results * order;
  //     });
  //   }    
  // },
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
    serviceprovidername: function (val) {
      setTimeout(() => {
        this.callApi();
        console.log(val);
      }, 2000);
    },
    customername: function (val) {
      setTimeout(() => {
        this.callApi();
        console.log(val);
      }, 2000);
    },
  },
};
</script>

<style scoped>
span {
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
::placeholder {
  opacity: 0.5;
}
input[type="text"] {
  width: 350px;
}
input {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
</style>
