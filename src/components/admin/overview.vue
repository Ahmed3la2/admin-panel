<template>
  <div class="overview" style="background-color: rgb(240, 240, 240);">
    <div class="row mb-3">
      <div class="col-4 col-md-7">
        <h4 class="head">overview</h4>
      </div>
      <div class="col-12 col-md-5">
        <div class="d-flex">
          <div class="form-group">
            <label for="date">From</label>
            <input
              id="date"
              type="date"
              v-model="dateFrom"
              class="form-control"
              placeholder="MM/DD/YYYY"
            />
           
          </div>

          <div class="form-group ml-4">
            <label for="date">To</label>
            <input
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
    <div class="row mb-5">
      <!-- New User -->
      <div class="col-12 col-md-6 col-lg-3">
        <NewUser v-bind:dateFrom="dateFrom" v-bind:dateTo="dateTo" />
      </div>
      <!-- Active Customer -->
      <div class="col-12 col-md-6 col-lg-3">
        <ActiveCustomer v-bind:dateFrom="dateFrom" v-bind:dateTo="dateTo" />
      </div>
      <!-- total Users -->
      <div class="col-12 col-md-6 col-lg-3">
        <TotalUser v-bind:dateFrom="dateFrom" v-bind:dateTo="dateTo" />
      </div>
      <!-- total profit -->
      <div class="col-12 col-md-6 col-lg-3">
        <Totalprofit v-bind:dateFrom="dateFrom" v-bind:dateTo="dateTo" />
      </div>
    </div>

    <div class="row mb-5">
      <!-- Application Activity -->
      <div class="col-12 col-md-9">
        <AppActive v-bind:dateFrom="dateFrom" v-bind:dateTo="dateTo" />
      </div>
      <!-- Top Service Provider -->
      <div class="col-12 col-md-3">
        <Topserveprovider v-bind:dateFrom="dateFrom" v-bind:dateTo="dateTo" />
      </div>
    </div>

    <div class="row">
      <!-- Recent Order -->
      <div class="col-12 col-md-9">
        <RecentOrder v-bind:dateFrom="dateFrom" v-bind:dateTo="dateTo" />
      </div>
      <!-- Top categories -->
      <div class="col-12 col-md-3">
        <TopCategoreis v-bind:dateFrom="dateFrom" v-bind:dateTo="dateTo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  overflow: hidden;
}
.overview {
  padding: 20px;
}
.overview .head {
  font-weight: bolder;
}

.overview .date {
  background-color: white;
  padding: 5px;
  width: 195;
  border-radius: 5px;
  box-shadow: 0 0 12px rgb(0 0 0 / 26%);
  color: #828282;
}

</style>

<script>
import NewUser from "../admin/overview_comp/newuser.vue";
import TotalUser from "./overview_comp/totaluser.vue";
import ActiveCustomer from "./overview_comp/activecustomer.vue";
import Totalprofit from "./overview_comp/totalprofit.vue";
import AppActive from "./overview_comp/zee.vue";
import Topserveprovider from "./overview_comp/topserveprovider.vue";
import TopCategoreis from "./overview_comp/topcat.vue";
import RecentOrder from "./overview_comp/recentorder.vue";
// import axios from 'axios';

export default {
  components: {
    NewUser,
    TotalUser,
    ActiveCustomer,
    Totalprofit,
    AppActive,
    Topserveprovider,
    TopCategoreis,
    RecentOrder,
  },
  data(){
    return{
      dateFrom:'',
      dateTo:'',
    }
  },
};
</script>
