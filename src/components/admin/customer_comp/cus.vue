<!--  eslint-disable  -->
<template>
  <div>
    <div class="row p-4 head">
      <div class="col-12 col-md-8">
        <h4>Customer</h4>
      </div>
      <div class="col-12 col-md-4">
        <div class="search-div">
          <input
            type="text"
            placeholder="search service provider"
            class="form-control p-3"
          />
          <div class="ic">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header" style="background: white;">
            Service Provider List
          </div>
          <div class="card-body" style="padding: 0">
            <div class="table-responsive-xl">
              <table class="table table-hover">
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Location</td>
                  <td>Phone</td>
                  <td>Number of Order</td>
                  <td>Action</td>
                </tr>
                <tr v-for="(item,index) in pageOfItems" :key="index">
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
                          <p>{{item.name}}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{{item.email}}</p>
                  </td>
                  <td>{{item.city}}</td>
                  <td>{{item.phone_number}}</td>
                  <td style="text-align:center">{{item.numberOfOrders}}</td>
                  <td class="d-flex" style="align-items: center">
                    <router-link :to="'/cus_view/'+ item._id" tag="div">
                      <i class="more fas fa-pencil-alt mr-3"></i>
                    </router-link>
                    <i class="more fas fa-ellipsis-h"></i>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="card-footer" style="background: white">
            <div style="width: 17rem;margin-left: auto;">
             <jw-pagination style="display:block;" :pageSize=4 :items="Allcustomer" @changePage="onChangePage"></jw-pagination>
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
      Allcustomer: null,
      pageOfItems: [],
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
  created() {
    axios
      .get(
        "https://masla7a.herokuapp.com/admin/control/users/customers?sort=name_asc",
        {
          headers: { "x-auth-token": localStorage.getItem("token") },
        }
      )
      .then((res) => {
        this.Allcustomer = res.data.customers;
        console.log(res.data.customers)
      });
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
table tr:first-child td{
  border-bottom: 1px solid rgba(0,0,0,.125);;  
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
