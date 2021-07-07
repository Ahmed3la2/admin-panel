<template>
  <div class="card">
    <div class="card-header">Top categories</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="cat in categories" :key="cat._id">
        <div class="row top-prov">
          <div class="col-4">
            <img width="60px" :src="cat.coverPhoto" alt="userImage" />
          </div>
          <div class="col-8">
            <div >
              <p class="name">{{ cat.name }}</p>
              <p>{{ cat.numberOfOrders }} order</p>
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
.top-prov {
  padding-bottom: 21px;
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
  font-weight: 500;
}
</style>

<script>
import axios from "axios";
export default {
  data: () => ({
    categories: [],
  }),
  created() {
    axios
      .get(
        "https://masla7a.herokuapp.com/admin/control/categories/top-categories",
        {
          headers: { "x-auth-token": localStorage.getItem("token") },
          params: {
            date_from: "Jul 18 2021 GMT+0200",
            date_to: "Jul 21 2021 GMT+0200",
          },
        }
      )
      .then((res) => {
        this.categories = res.data.categories;
      });
  },
};
</script>