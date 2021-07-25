<!--  eslint-disable  -->
<template>
  <div>
    <div class="row p-4 head">
      <div class="col-12 col-md-8">
        <h4 class="pt-3">Customer</h4>
      </div>
      <div class="col-12 col-md-4">
        <div class="search-div">
          <input
            type="text"
            placeholder="search Customer"
            class="form-control p-3"
            v-model="Customername"
          />
          <div class="ic pt-2">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header" style="background: white; border: none">
            <div class="row">
              <div
                class="col-md-10 mt-2"
                style="color: rgb(104 145 228); font-weight: 700"
              >
                Customer List
              </div>
              <div class="col-md-2">
                <download-csv
                  class="btn btn-default"
                  :data="downloadData"
                  name="Customer.csv"
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

          <!--     <div
        class="card-header"
        style="
          background: white;
          border: none;
          color: rgb(104 145 228);
          font-weight: 700;
        "
      >
        Customer List
      </div> -->
          <hr />
          <div class="card-body" style="padding: 0">
            <div class="table-responsive-xl">
              <table class="table table-hover">
                <tr>
                  <td v-on:click="sortedByName">
                    Name
                    <span v-if="oldestFirstName" key="up">
                      <span :class="[arrowIconClassUp]"></span>
                    </span>
                    <span v-else key="down">
                      <span :class="[arrowIconClassDown]"></span>
                    </span>
                  </td>
                  <td>Email</td>
                  <td>Location</td>
                  <td>Phone</td>
                  <td v-on:click="sortedByOrder">
                    Number of Order
                    <span v-if="oldestFirstOrder" key="up">
                      <span :class="[arrowIconClassUp]"></span>
                    </span>
                    <span v-else key="down">
                      <span :class="[arrowIconClassDown]"></span>
                    </span>
                  </td>
                  <td>Action</td>
                </tr>
                <tr v-for="(item, index) in pageOfItems" :key="index">
                  <td>
                    <div class="row top-list">
                      <div class="col-3">
                        <img
                          width="50px"
                          height="40px"
                          :src="item.profilePic"
                          alt=""
                        />
                      </div>
                      <div class="col-8 text-center">
                        <div class="mt-2" style="width: 110px">
                          <p>{{ item.name }}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{{ item.email }}</p>
                  </td>
                  <td>{{ item.city }}</td>
                  <td>{{ item.phone_number }}</td>
                  <td style="text-align: center">{{ item.numberOfOrders }}</td>
                  <td class="d-flex" style="align-items: center">
                    <router-link :to="'/cus_view/' + item._id" tag="div">
                      <i class="more fas fa-pencil-alt"></i>
                    </router-link>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="card-footer" style="background: white">
            <div style="width: 17rem; margin-left: auto">
              <jw-pagination
                style="display: block"
                :pageSize="4"
                :items="Allcustomer"
                @changePage="onChangePage"
              ></jw-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      oldestFirstName: false,
      oldestFirstOrder: false,
      Allcustomer: null,
      pageOfItems: [],
      sort: "",
      downloadData: [],
      Customername: "",
      arrowIconClassUp: "fa fa-arrow-up",
      arrowIconClassDown: "fa fa-arrow-down",
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    callApi() {
      const queryParam = {};
      if (this.sort) {
        queryParam["sort"] = this.sort;
      }
      if (this.Customername) {
        queryParam["search"] = this.Customername;
      }
      const params = queryParam;
      axios
        .get("https://masla7a.herokuapp.com/admin/control/users/customers", {
          headers: { "x-auth-token": localStorage.getItem("token") },
          params,
        })
        .then((res) => {
          this.Allcustomer = res.data.customers;
          const formatedData = res.data.customers || [];
          if (formatedData.length) {
            formatedData.forEach((element) => {
              const finalObject = {
                id: element._id,
                name: element.name,
                email: element.email,
                city: element.city,
                phone_number: element.phone_number,
                numberOfOrders: element.numberOfOrders,
              };
              this.downloadData.push(finalObject);
            });
          }
        });
    },
    sortedByOrder() {
      this.oldestFirstOrder = !this.oldestFirstOrder;
    },
    sortedByName() {
      this.oldestFirstName = !this.oldestFirstName;
    },
  },

  created() {
    this.callApi();
  },
  watch: {
    oldestFirstName: function (val) {
      if (val == true) {
        this.sort = "name_desc";
      } else if (val == false) {
        this.sort = "name_asc";
      }
      this.callApi();
    },

    oldestFirstOrder: function (val) {
      if (val == true) {
        this.sort = "orders_desc";
      } else if (val == false) {
        this.sort = "orders_asc";
      }
      this.callApi();
    },
    Customername: function (val) {
      setTimeout(() => {
        this.callApi();
        console.log(val);
      }, 2000);
    },
  },
};
</script>
<!--  eslint-disable  -->

<style scoped>
.head {
  position: relative;
}
.head h4 {
  font-weight: 800;
}
.head input {
  box-shadow: 0 0 12px rgb(0 0 0 / 26%);
}
::placeholder {
  opacity: 0.5;
}
.head .ic {
  position: absolute;
  top: 11px;
  right: 39px;
  opacity: 0.3;
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
  /* margin-left: auto; */
  width: 746px;
  display: block !important;
}
.card .card-footer .pagination li a {
  border: none;
}
.card .card-footer .pagination li.last {
  border: none;
  display: none;
}
.card .card-footer .paginations li a:hover {
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
