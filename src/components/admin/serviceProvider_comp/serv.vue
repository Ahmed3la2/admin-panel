<!--  eslint-disable  -->
<template>
  <div>
    <div class="row p-4 head">
      <div class="col-12 col-md-8">
        <h4>Service Provider</h4>
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
              <table class="table">
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Location</td>
                  <td>Phone</td>
                  <td>Rating</td>
                  <td>Action</td>
                </tr>
                <tr v-for="index in 5" :key="index">
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
                        <div class="mt-2" style="width: 110px">
                          <p>Natash Fuller</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>armando.lang@yahoo.com</p>
                  </td>
                  <td>congo</td>
                  <td>+20(12) 987654320</td>
                  <td>
                    <div class="stars">
                      <i
                        class="bx bxs-star top"
                        v-for="index in 5"
                        v-bind:key="index"
                      ></i>
                    </div>
                  </td>
                  <td class="d-flex" style="align-items: center">
                    <router-link to="/serv_view/10" tag="div">
                      <i class="more fas fa-pencil-alt mr-3"></i>
                    </router-link>
                    <i class="more fas fa-ellipsis-h"></i>
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
export default {};
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
.card .card-footer nav {
  margin-left: auto;
  width: 246px;
}
.card .card-footer nav li a {
  border: none;
}
.card .card-footer nav li a:hover {
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
