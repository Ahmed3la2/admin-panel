<!--  eslint-disable  -->
<template>
  <div>
    <div class="row p-3 head">
      <div class="col-12">
        <h4 class="mb-3">Service providers</h4>
        <p>
          <span>Service provider</span
          ><i style="color: #0062cc" class="fas fa-greater-than mx-2"></i> Service
          Providers View
        </p>
      </div>
    </div>
    <div class="row p-3 mb-n4 mb-sm-0">
      <div class="col-12 col-md-4  mb-4 mb-sm-0">
        <div class="card">
          <div class="card-header p-3" style="background: white">
            <div class="row mb-3">
              <div class="col-4">
                <img
                  width="90"
                  height="90"
                  src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                  alt=""
                />
              </div>
              <div class="col-8">
                <h5>harry jones</h5>
                <p style="opacity: 0.5; margin: 0">Mechanic</p>
                <div class="stars">
                  <i
                    class="bx bxs-star top"
                    v-for="index in 5"
                    v-bind:key="index"
                    style="color: #f1f100"
                  ></i>
                </div>
              </div>
            </div>
            <div class="row profile">
              <div class="col-12 col-md-6  mb-n3 mb-sm-0">
                <button class="btn btn-primary pb-sm-2 mb-3 mb-sm-0" style="width: 100%;padding: 10px;border-radius: 10px;">
                  <i class="far fa-comment-alt mr-3"></i> message
                </button>
              </div>
              <div class="col-12 col-md-6">
                <button class="btn btn-secandry" style="width: 100%;padding: 10px;border-radius: 10px;">
                  <i class="mr-3 fas fa-pen"></i> Edit
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <ul>
              <li class="d-flex" style="width: 100%;">
                <p class="flex-grow-2" style="width:35%">Email</p>
                <p style="width:60%">AhemdAlaa@yahoo.com</p>
              </li>
              <li class="d-flex" style="width: 100%;">
                <p class="flex-grow-2 " style="width:35%">Total Order</p>
                <p class="w-50">46</p>
              </li>
              <li class="d-flex" style="width: 100%;">
                <p class="flex-grow-2"  style="width:35%">Age</p>
                <p class="w-50">25</p>
              </li>
              <li class="d-flex" style="width: 100%;">
                <p class="flex-grow-2"  style="width:35%">Phone</p>
                <p class="w-50">+20(12)987512352</p>
              </li>
              <li class="d-flex" style="width: 100%;">
                <p class="flex-grow-2" style="width:35%">Adress</p>
                <p class="w-50">3 Khaled Ibn el Walid GESR EL SUEZ</p>
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <h6 class="mb-4" style="color:#0062cc">Total Profit</h6>
              <div class="row">
                  <div class="col-6">
                    <p>4234 L.E</p>
                    <p>+19%</p>
                  </div>
                  <div class="col-6"></div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 customer-table">
          <div class="card">
              <div class="card-header">
                  <h5>Invoices</h5>
              </div>
              <div class="card-body" style="padding: 0">
            <div class="table-responsive-xl">
              <table class="table">
                <tr>
                  <td>ID</td>
                  <td>Date</td>
                  <td>Customer</td>
                  <td>Status</td>
                  <td>Total</td>
                </tr>
                <tr v-for="index in 5" :key="index">
                  <td>
                      <div style="align-items: baseline;" class="d-flex">
                        <input class="mr-2" type="checkbox" name="" id="">
                        <p style="white-space: pre; margin: 0;"> OR-123214</p>
                      </div>
                  </td>
                  <td>
                    <p style="margin:0">18 August <br> 05 : 30 am</p>
                  </td>
                  <td>
                    <div class="row top-list">
                      <div class="col-3">
                        <img
                          width="50px"
                          height="40px"
                          src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                          alt=""
                        />
                      </div>
                      <div class="col-8 text-center">
                        <div class="mt-3" style="width: 110px">
                          <p style="margin:0">Natash Fuller</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <i
                    class="fas fa-circle "
                    style="color: #06d9a6; font-size: 10px;margin-right:7px"
                    ></i>
                    <span style="color: #06d9a6; font-weight: 500">Completed</span>
                  </td>
                  <td>
                      400$
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="card-footer" style="background: white">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">Previous</a>
                </li>
                <li class="page-item mr-2">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
           </div>
          </div>
      </div>
    </div>
  </div>
</template>
<!--  eslint-disable  -->

<script>
const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
export default {
  data() {
    return {
      id: this.$route.params.id,
     
    };
  },
};
</script>
<!--  eslint-disable  -->

<style scoped>
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
.card .card-body{
    padding-bottom: 0 !important;
}

.card .card-body ul{
    padding: 0;
}
.card .card-body ul li p:first-child{
    font-weight: 550;
}

.card .card-footer{
    background-color: white;
}
.card .card-footer div:first-child p:first-child {
    font-weight: 400;
    font-size: 18px;
}
.card .card-footer div:first-child p:nth-child(2) {
    color:  rgb(0, 98, 204);
}

.customer-table .card .card-header{
    background-color: white;
}
.customer-table .card .card-header h5{
color:  rgb(0, 98, 204);
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
