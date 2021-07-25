<template>
  <div class="p-4">
    <div class="row mb-2">
      <div class="col-2">
        <h4 class="head pt-4">Complaints</h4>
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
      <div class="card-header" style="background: white; border: none">
        <div class="row">
          <div
            class="col-md-10 mt-2"
            style="color: rgb(104 145 228); font-weight: 700"
          >
            Complaints List
          </div>
          <div class="col-md-2">
            <download-csv
              class="btn btn-default"
              :data="downloadData"
              name="Complaints.csv"
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

      <!-- <div
        class="card-header"
        style="
          background: white;
          border: none;
          color: rgb(104 145 228);
          font-weight: 700;
        "
      >
        Complaints List
      </div> -->
      <div class="card-body" style="padding: 0">
        <table class="table">
          <thead>
            <tr>
              <td>Customer</td>
              <td>Service Provider</td>
              <td>Complaint Type</td>
              <td v-on:click="sortedByDate">
                Date
                <span v-if="oldestFirstDate" key="up">
                  <span :class="[arrowIconClassUp]"></span>
                </span>
                <span v-else key="down">
                  <span :class="[arrowIconClassDown]"></span>
                </span>
              </td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody v-for="complaint in complaints" :key="complaint._id">
            <tr class="">
              <td>
                <div class="row top-list mt-2">
                  <div class="col-3">
                    <img
                      width="50px"
                      height="40px"
                      :src="complaint.user.profilePic"
                    />
                  </div>
                  <div class="col-9">
                    <p class="mt-2 ml-2">{{ complaint.user.name }}</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="row top-list mt-2">
                  <div class="col-3">
                    <img
                      width="50px"
                      height="40px"
                      :src="complaint.serviceProvider.profilePic"
                    />
                  </div>
                  <div class="col-9">
                    <div>
                      <p class="mt-2 ml-2">
                        {{ complaint.serviceProvider.name }}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>{{ complaint.complaintType }}</td>
              <td>
                {{ checkDate(complaint.createdAt) }}
              </td>
              <td>{{ complaint.description }}</td>
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
      oldestFirstDate: false,
      dateFrom: "",
      dateTo: "",
      serviceprovidername: "",
      customername: "",
      complaints: [],
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
    callApi() {
      const queryParam = {};
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
      if (this.sort) {
        queryParam["sort"] = this.sort;
      }
      const params = queryParam;
      axios
        .get("https://masla7a.herokuapp.com/admin/control/complaints", {
          headers: { "x-auth-token": localStorage.getItem("token") },
          params,
        })
        .then((res) => {
          
          this.complaints = res.data.complaints.slice(0, 6);
          const formatedData = res.data.complaints || [];
          if (formatedData.length) {
            formatedData.forEach((element) => {
              const finalObject = {
                id: element._id,
                customer: element.user.name,
                serviceProvider: element.serviceProvider.name,
                complaintType: element.complaintType,
                createdAt: element.createdAt,
                description: element.description,
                
              };
              this.downloadData.push(finalObject);
            });
          }
        });
    },
    sortedByDate() {
      this.oldestFirstDate = !this.oldestFirstDate;
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
    oldestFirstDate: function (val) {
      if (val == true) {
        this.sort = "date_desc";
      } else if (val == false) {
        this.sort = "date_asc";
      }
      this.callApi();
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
