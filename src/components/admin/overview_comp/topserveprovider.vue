/* eslint-disable prettier/prettier */
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="card">
    <div class="card-header">Top Service Provider</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="serve in servedata" :key="serve.id">
        <div class="row top-list">
          <div class="col-4">
            <img width="60px" :src="serve.profilePic[0]" alt="" />
          </div>
          <div class="col-8">
            <p>{{ serve.name[0] }}</p>
            <div class="stars">
              <i
                class="bx bxs-star top"
                v-for="(item, index) in serve.numberOfRatings"
                :key="index"
              ></i>
              <i
                style="color:#d6d6d6;"
                class="bx bxs-star top"
                v-for="(item, index) in (5 - serve.numberOfRatings)"
                :key="index"
              ></i>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

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
.overview .card .card-body .user-status p:nth-child(2) {
  color: #ff004e;
}

.top-list {
  padding-bottom: 18px;
}
.overview .card ul li:last-child {
  padding-bottom: 20;
}
.overview .card ul li img {
  width: 57px;
  border-radius: 5px;
  height: 42px;
}

i.top {
  color: #f1f100;
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
  data: () => ({
    servedata: [],
  }),
  created() {
    axios
      .get(
        "https://masla7a.herokuapp.com/admin/control/users//top-service-providers?date_from=Jul 20 2021 GMT+0200",
        {
          headers: { "x-auth-token": localStorage.getItem("token") },
        }
      )
      .then((res) => {
        this.servedata = res.data.topServiceProviders.slice(0, 6);
        console.log(res.data.topServiceProviders);
      });
  },
};
</script>
