<!--  eslint-disable  -->
<template>
  <div>
    <div class="row p-3 head">
      <div class="col-12">
        <h4 class="mb-3">customer</h4>
        <p>
          <span>customer provider</span
          ><i style="color: #0062cc" class="fas fa-greater-than mx-2"></i>
          customer View
        </p>
      </div>
    </div>
    <div class="row p-3 mb-n4 mb-sm-0">
      <div class="col-12 col-md-4 mb-4 mb-sm-0">
        <div class="card">
          <div class="card-header p-3" style="background: white">
            <div class="row mb-3">
              <div class="col-4">
                <img width="90" height="90" :src="user.profilePic" alt="" />
              </div>
              <div class="col-8">
                <h5>{{ user.name }}</h5>
                <p style="opacity: 0.5; margin: 0">{{ user.serviceName }}</p>
              </div>
            </div>
   
          </div>
          <div class="card-body">
            <ul>
              <li class="d-flex" style="width: 100%">
                <p class="flex-grow-2" style="width: 35%">Email</p>
                <p style="width: 60%">{{ user.email }}</p>
              </li>
              <li class="d-flex" style="width: 100%">
                <p class="flex-grow-2" style="width: 35%">Total Order</p>
                <p class="w-50">{{ user.numberOfOrders }}</p>
              </li>
              <li class="d-flex" style="width: 100%">
                <p class="flex-grow-2" style="width: 35%">Age</p>
                <p class="w-50">{{ user.age }}</p>
              </li>
              <li class="d-flex" style="width: 100%">
                <p class="flex-grow-2" style="width: 35%">Phone</p>
                <p class="w-50">{{ user.phone_number }}</p>
              </li>
              <li class="d-flex" style="width: 100%">
                <p class="flex-grow-2" style="width: 35%">Adress</p>
                <p class="w-50">{{ user.address }}</p>
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <h6 class="mb-4" style="color: #0062cc">Total Profit</h6>
            <div class="row">
              <div class="col-6">
                <p class="font-weight-bold">{{ total }} L.E</p>
                
              </div>
              <div class="col-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 customer-table">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-7">
                <h5>Invoices</h5>
              </div>
              <div
                class="col-5 justify-content-between"
                style="text-align: right"
              >
                <!--       <div class="dropdown pr-3" style="display: inline-block">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    style="
                      background: white;
                      color: black;
                      border-color: #f0f0f0;
                    "
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Show All
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div> -->
                <download-csv
                  class="btn btn-default"
                  :data="downloadData"
                  name="filename.csv"
                >
                  <div
                    class="btn btn-primary"
                    style="
                      background: #edf1f7 !important;
                      color: black;
                      border: #edf1f7;
                      margin-left: 70px;
                    "
                  >
                    <i class="bx bx-download"></i>
                    Export
                  </div>
                </download-csv>
              </div>
            </div>
          </div>
          <div class="card-body" style="padding: 0">
            <div class="table-responsive-xl">
              <table class="table" style="font-size: 15px">
                <tr>
                  <td>ID</td>
                  <td v-on:click="sortedByDate">
                    Date
                    <span v-if="oldestFirstDate" key="up">
                      <span :class="[arrowIconClassUp]"></span>
                    </span>
                    <span v-else key="down">
                      <span :class="[arrowIconClassDown]"></span>
                    </span>
                  </td>
                  <td>service Provider</td>
                  <td>Status</td>
                  <td v-on:click="sortedByProfit">
                    Total
                    <span v-if="oldestFirstProfit" key="up">
                      <span :class="[arrowIconClassUp]"></span>
                    </span>
                    <span v-else key="down">
                      <span :class="[arrowIconClassDown]"></span>
                    </span>
                  </td>
                </tr>
                <tr
                  v-for="(order, index) in pageOfItems"
                  :key="index"
                  style="height: 86.5px"
                >
                  <td>
                    <div style="align-items: baseline" class="d-flex">
                      <!--                       <input class="mr-2" type="checkbox" />
 -->
                      <p style="white-space: pre; margin: 0">
                        OR-{{
                          order._id.slice(0, 9) + "\n" + order._id.slice(9)
                        }}
                      </p>
                    </div>
                  </td>
                  <td>
                    <p style="margin: 0">
                      {{ checkDate(order.startsAt) }}
                    </p>
                  </td>
                  <td>
                    <div class="row top-list">
                      <div class="col-3">
                        <img
                          width="50px"
                          height="40px"
                          :src="order.serviceProvider.profilePic"
                          alt=""
                        />
                      </div>
                      <div class="col-8 text-center">
                        <div class="mt-3" style="width: 110px">
                          <p style="margin: 0">
                            {{ order.serviceProvider.name }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      style="font-size: 8px; margin-right: 7px"
                      :class="{
                        pending: order.status == 'pending',
                        compelted: order.status == 'completed',
                        canceled: order.status == 'canceled',
                      }"
                    >
                      <i class="fas fa-circle"></i>
                    </span>
                    <span
                      style="font-weight: 500; font-size: 14px"
                      :class="{
                        pending: order.status == 'pending',
                        compelted: order.status == 'completed',
                        canceled: order.status == 'canceled',
                      }"
                      >{{ order.status }}</span
                    >
                  </td>
                  <td class="font-weight-bold">{{ order.price }}$</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="card-footer" style="background: white">
            <div style="width: 21rem; margin-left: auto">
              <jw-pagination
                style="display: block"
                :pageSize="5"
                :items="user.orders"
                @changePage="onChangePage"
                :aStyles="{ border: 'none', 'border-radius': '19px' }"
                :labels="{
                  first: null,
                  last: 'Last',
                  next: 'Next',
                  previous: 'Previous',
                }"
              ></jw-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--  eslint-disable  -->
<script scoped>
import axios from "axios";
export default {
  data() {
    return {
      oldestFirstDate: false,
      oldestFirstProfit: false,
      user: [],
      pageOfItems: [],
      downloadData: [],
      sort: "",
      arrowIconClassUp: "fa fa-arrow-up",
      arrowIconClassDown: "fa fa-arrow-down",
    };
  },
  methods: {
    checkDate(date) {
      console.log("Date here: ", new Date(date).toDateString());
      return new Date(date).toDateString();
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    callApi() {
      const queryParam = {};
      if (this.sort) {
        queryParam["sort"] = this.sort;
      }
      const params = queryParam;
      axios
        .get(
          `https://masla7a.herokuapp.com/admin/control/users/customers/${this.$route.params.id}`,
          {
            headers: { "x-auth-token": localStorage.getItem("token") },
            params,
          }
        )
        .then((res) => {
          this.user = res.data.customer;
          const formatedData = res.data.customer || [];
            if (formatedData.length) {
            formatedData.forEach((element) => {
              const finalObject = {
                id: element._id,
                address: element.address,
                name: element.name,
              
              };
              this.downloadData.push(finalObject);
            });
          }

        });
    },
    sortedByDate() {
      this.oldestFirstDate = !this.oldestFirstDate;
    },
    sortedByProfit() {
      this.oldestFirstProfit = !this.oldestFirstProfit;
    },
  },
  async created() {
    this.callApi();
  },
    computed: {
    total: function () {
      var x = 0;
      this.user.orders.forEach((e) => {
        x = x + e.price;
      });
      return x;
    },
  },
  watch: {
    oldestFirstDate: function (val) {
      if (val == true) {
        this.sort = "date_desc";
      } else if (val == false) {
        this.sort = "date_asc";
      }
      this.callApi();
    },

    oldestFirstProfit: function (val) {
      if (val == true) {
        this.sort = "price_desc";
      } else if (val == false) {
        this.sort = "price_asc";
      }
      this.callApi();
    },
  },
};
</script>
<!-- eslint-disable -->

<style scoped>
.pending {
  color: orange !important;
}
.compelted {
  color: #06d9a6 !important;
}
.canceled {
  color: red !important;
}
.head h4 {
  font-weight: 800;
}
.head p span {
  color: #0062cc;
  font-weight: bold;
  margin-right: 10px;
}
.head p i {
  color: #407aef;
  font-weight: bold;
  margin-right: 10px;
}
.card {
  box-shadow: 0 0 12px rgb(0 0 0 / 26%);
  border-radius: 10px;
}
.card .card-header img {
  border-radius: 10px;
}
.card .card-header h5 {
  font-weight: bold;
}

.profile .btn-primary {
  background-color: #047dff;
}
.card .card-body {
  padding-bottom: 0 !important;
}

.card .card-body ul {
  padding: 0;
}
.card .card-body ul li p:first-child {
  font-weight: 550;
}

.card .card-footer {
  background-color: white;
}
.card .card-footer div:first-child p:first-child {
  font-weight: 400;
  font-size: 18px;
}
.card .card-footer div:first-child p:nth-child(2) {
  color: rgb(0, 98, 204);
}

.customer-table .card .card-header {
  background-color: white;
}
.customer-table .card .card-header h5 {
  color: rgb(0, 98, 204);
}
table tr:first-child td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
td {
  vertical-align: middle;
  border: none;
}
.card {
  box-shadow: 0 0 12px rgb(0 0 0 / 26%);
}
.card .card-footer .pagination {
  margin-left: auto;
}
.card .card-footer .pagination li a {
  border: none;
}
.card .card-footer .pagination li a:hover {
  background: #4791ff;
  border-radius: 38px;
  color: white;
}

table tr .row img {
  border-radius: 5px;
  height: 50px;
}
table tr .row p {
  padding-bottom: 15px;
}
.stars i {
  color: #f1f100;
}
table tr td .more {
  cursor: pointer;
}
</style>
<style>
.page-item.first {
  display: none !important;
}
li.last {
  display: none !important;
}
.page-link {
  border: none;
  margin-right: 7px;
  border-radius: 30px;
  font-size: 81%;
}
</style>
