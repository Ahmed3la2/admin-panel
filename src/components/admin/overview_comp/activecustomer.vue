<template>
  <div class="card">
    <div class="card-header">Active Customer</div>
    <div class="card-body">
      <div class="row">
        <div class="col-8 user-status">
          <p>1.2M</p>
          <p class="active-cus-percent">+25%</p>
        </div>
        <div class="col-4">
          <apexchart
            width="100"
            type="line"
            :options="options"
            :series="options.series"
          >
          </apexchart>
        </div>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="row">
          <div class="col-4">
            <img
              width="60px"
              src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <div class="col-8">
            <p>Natash Fuller</p>
            <p>2 hours ago</p>
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-4">
            <img
              width="60px"
              src="https://pbs.twimg.com/profile_images/1237756875610914823/wM0Q57C3_400x400.jpg"
              alt=""
            />
          </div>
          <div class="col-8">
            <p>Natash Fuller</p>
            <p>2 hours ago</p>
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-4">
            <img
              width="60px"
              src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <div class="col-8">
            <p>Natash Fuller</p>
            <p>2 hours ago</p>
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-4">
            <img
              width="60px"
              src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <div class="col-8">
            <p>Natash Fuller</p>
            <p>2 hours ago</p>
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
.overview .card .card-body .user-status .active-cus-percent {
  color: #00e396;
}
.overview .card ul li {
  padding-bottom: 22px;
}
.overview .card ul li:last-child {
  padding-bottom: 20;
}
.overview .card ul li img {
  width: 57px;
  border-radius: 5px;
  height: 42px;
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
export default {
  data: () => ({
    options: {
      colors: ["#00E396", "#FF004E"],
      chart: {
        id: "vuechart-example",
        sparkline: {
          enabled: true,
        },
      },
      series: [
        {
          name: "series-1",
          data: [55, 54, 56, 50, 57, 69, 71, 78, 80, 79, 87, 89],
        },
      ],
    },
  }),
};
</script>
