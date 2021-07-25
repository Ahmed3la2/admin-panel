<template>
  <div>
    <div class="head p-4">
      <div class="row mt-4">
        <div class="col-12 col-md-6 text-center text-md-left mb-3 mb-md-0">
          <div class="h3" style="font-weight: bold">Services Category</div>
        </div>
        <div class="col-12 col-md-6 text-center text-md-right">
          <router-link
            class="btn btn-primary"
            style="box-shadow: #a29f9f 0px 0px 10px"
            to="addCategory"
            tag="button"
          >
            <i class="fas fa-plus mr-3"></i>
            Add Categgory
          </router-link>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <div class="card" style="box-shadow: #a29f9f 0px 0px 10px">
            <div
              class="card-header"
              style="
                background: white;
                border: none;
                color: rgb(104 145 228);
                font-weight: 700;
              "
            >
              Service Category List
            </div>
            <div class="card-body" style="padding: 0">
              <div class="table-responsive-xl">
                <table class="table table-hover">
                  <tr>
                    <td style="padding-left: 46px" v-on:click="sortedByName">
                      Name
                      <span v-if="oldestFirstName" key="up">
                        <span :class="[arrowIconClassUp]"></span>
                      </span>
                      <span v-else key="down">
                        <span :class="[arrowIconClassDown]"></span>
                      </span>
                    </td>

                    <td class="text-center" v-on:click="sortedByNS">
                      No Of Services
                      <span v-if="oldestFirstNS" key="up">
                        <span :class="[arrowIconClassUp]"></span>
                      </span>
                      <span v-else key="down">
                        <span :class="[arrowIconClassDown]"></span>
                      </span>
                    </td>
                    <td class="text-center" v-on:click="sortedByT">Total No of Order
                      <span v-if="oldestFirstT" key="up">
                        <span :class="[arrowIconClassUp]"></span>
                      </span>
                      <span v-else key="down">
                        <span :class="[arrowIconClassDown]"></span>
                      </span>
                    </td>
                    <td class="text-center">Action</td>
                  </tr>
                  <tr
                    class="text-center"
                    v-for="(item, index) in pageOfItems"
                    :key="index"
                  >
                    <td class="text-center">
                      <div class="row top-list justify-content-center">
                        <div class="col-3">
                          <img
                            width="50px"
                            height="40px"
                            :src="item.coverPhoto"
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
                      <p>{{ item.numberOfServices }}</p>
                    </td>
                    <td>{{ item.numberOfOrders }}</td>
                      <td
                      class="d-flex justify-content-center"
                      style="align-items: center"
                    >
                      <router-link :to="'/editCategory/' + item._id" tag="div">
                        <i class="more fas fa-pencil-alt mr-3"></i>
                      </router-link>
                      <span
                        type="button"
                        data-toggle="modal"
                        :data-target="`#staticBackdrop_${item._id}`"
                      >
                        <i class="fas fa-trash-alt more"></i>
                      </span>
                      <div
                        class="modal fade"
                        :id="`staticBackdrop_${item._id}`"
                        data-backdrop="static"
                        data-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" style="width: 400px">
                          <div class="modal-content">
                            <div class="modal-body">
                              <img
                                src="../../../assets/sign.png"
                                width="150"
                                alt=""
                                class="mb-4"
                              />
                              <h5
                                class="mb-3"
                                style="
                                  text-align: initial;
                                  width: 289px;
                                  margin: auto;
                                "
                              >
                                are You Sure Want to Delete <span class="text-danger">{{item.name}}</span> Catgory
                              </h5>
                              <p
                                style="
                                  text-align: initial;
                                  width: 289px;
                                  margin: auto;
                                "
                              >
                                By deleting this catrgory yo cannot restore it
                                again
                              </p>
                            </div>
                            <div
                              class="modal-footer"
                              style="
                                border: none;
                                justify-content: space-between;
                              "
                            >
                              <button
                                style="width: 125px"
                                type="button"
                                class="btn btn-light"
                                data-dismiss="modal"
                              >
                                Cancel
                              </button>

                              <button
                                type="button"
                                class="btn btn-danger"
                                style="width: 125px"
                                @click="delet(item._id)"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card-footer" style="background: white">
              <div style="width: 17rem; margin-left: auto">
                <jw-pagination
                  style="display: block"
                  :pageSize="5"
                  :items="AllCategories"
                  @changePage="onChangePage"
                ></jw-pagination>
              </div>
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
      AllCategories: null,
      oldestFirstName: false,
      oldestFirstNS: false,
      oldestFirstT:false,
      pageOfItems: [],
      sort: "",
      arrowIconClassUp: "fa fa-arrow-up",
      arrowIconClassDown: "fa fa-arrow-down",
    };
  },
  methods: {
    delet: function (id) {
      console.log(id);
      // axios
      //   .get(
      //     `https://masla7a.herokuapp.com/admin/control/categories/delete-category/${id}`,
      //     {
      //       headers: { "x-auth-token": localStorage.getItem("token") },
      //     }
      //   )
      //   .then(() => {
      //     window.location.reload();
      //   });
    },
    callApi() {
      const queryParam = {};
      if (this.sort) {
        queryParam["sort"] = this.sort;
      }
      const params = queryParam;
      axios
        .get("https://masla7a.herokuapp.com/admin/control/categories/", {
          headers: { "x-auth-token": localStorage.getItem("token") },
          params,
        })
        .then((res) => {
          this.AllCategories = res.data.categories;

        });
    },
    sortedByName() {
      this.oldestFirstName = !this.oldestFirstName;
    },
    sortedByNS() {
      this.oldestFirstNS = !this.oldestFirstNS;
    },
    sortedByT() {
      this.oldestFirstT = !this.oldestFirstT;
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
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
    oldestFirstT: function (val) {
      if (val == true) {
        this.sort = "orders_desc";
      } else if (val == false) {
        this.sort = "orders_asc";
      }
      this.callApi();
    },
    oldestFirstNS: function (val) {
      if (val == true) {
        this.sort = "services_desc";
      } else if (val == false) {
        this.sort = "services_asc";
      }
      this.callApi();
    },
  },
};
</script>
<style scoped>
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
