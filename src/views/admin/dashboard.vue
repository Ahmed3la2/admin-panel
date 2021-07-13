<template>
  <div>
    <div class="sidebar">
      <div class="logo_content">
        <div class="logo">
          <i class="bx bxl-c-plus-plus"></i>
          <div class="logo_name">Msla7a</div>
        </div>
        <i class="bx bx-menu" id="btn"></i>
      </div>
      <ul class="nav_list">
        <router-link to="/" tag="li">
          <a>
            <i class="bx bx-home bx-rotate-0 bx-none bx-flip-none"></i>
            <span class="links_name">Dashboard</span>
          </a>
          <span class="tooltip">Dashboard</span>
        </router-link>
        <li class="text-center m-auto" id="t">
          <a href="#">
            <span class="links_name" style="margin-left: 25px">mangment</span>
          </a>
        </li>
        <router-link to="/serviceProvider" tag="li">
          <a>
            <i class="bx bx-user"></i>
            <span class="links_name">service provider</span>
          </a>
          <span class="tooltip">service provider</span>
        </router-link>
        <router-link to="/customers" tag="li">
          <a>
            <i class="fas fa-user-friends" style="margin: 0 10px 0 18px"></i>
            <span class="links_name">Customers</span>
          </a>
          <span class="tooltip">Customers</span>
        </router-link>
        <router-link to="/Category" tag="li">
          <a>
            <i class="fas fa-th-large" style="margin: 0 10px 0 18px"></i>
            <span class="links_name">Service category</span>
          </a>
          <span class="tooltip">Service category</span>
        </router-link>
        <router-link to="/Order" tag="li">
          <a>
            <i class="fas fa-shopping-cart" style="margin: 0 10px 0 18px"></i>
            <span class="links_name">Order</span>
          </a>
          <span class="tooltip">Order</span>
        </router-link>
        <li>
          <a href="#">
            <i class="bx bx-cog"></i>
            <span class="links_name">settings</span>
          </a>
          <span class="tooltip">settings</span>
        </li>
        <li class="text-center mt-3" id="t">
          <a>
            <span class="links_name" style="margin-left: 25px">components</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fadeIn animated bx bx-bar-chart-alt"></i>
            <span class="links_name">chart</span>
          </a>
          <span class="tooltip">chart</span>
        </li>
        <li>
          <a href="#">
            <i class="fadeIn animated bx bx-cube"></i>
            <span class="links_name">Element</span>
          </a>
          <span class="tooltip">User</span>
        </li>
      </ul>
      <div class="profile_content">
        <div class="profile">
          <i class="bx bx-log-out" id="log_out" @click="logout"></i>
        </div>
      </div>
    </div>
    <div class="home_content" style="background-color: #f0f0f0">
      <div class="nav">
        <div class="profile-box">
          <img
            src="https://s3.envato.com/files/1756629b-8de6-4d62-8297-8337dd29abc5/inline_image_preview.jpg"
            alt=""
          />
          <span>chrles balley</span>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
.nav {
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: 0 0 12px rgb(0 0 0 / 26%);
}
li {
  height: 42px !important;
}
.nav .profile-box {
  height: auto;
  margin-left: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.096);
  padding: 8px;
  width: 300px;
}
.nav .profile-box img {
  border-radius: 6px;
  width: 51px;
  height: 35px;
}
.nav .profile-box span {
  font-size: 14px;
  font-weight: 600;
  margin-left: 7px;
}
#log_out {
  background-color: #407aef !important;
  cursor: pointer;
}
.profile:hover #log_out {
  background-color: #284788 !important;
  cursor: pointer;
}
/* Google Font CDN Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 78px;
  background: #407aef;
  /* padding: 6px 14px; */
  z-index: 99;
  transition: all 0.5s ease;
}
.sidebar.active {
  width: 240px;
}
.sidebar .logo_content .logo {
  color: #fff;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease;
}
.sidebar.active .logo_content .logo {
  opacity: 1;
  pointer-events: none;
}
.logo_content .logo i {
  font-size: 28px;
  margin-right: 5px;
}
.logo_content .logo .logo_name {
  font-size: 20px;
  font-weight: 400;
}
.sidebar #btn {
  position: absolute;
  color: #fff;
  top: 6px;
  left: 50%;
  font-size: 22px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
}
.sidebar.active #btn {
  left: 90%;
}
.sidebar ul {
  margin-top: 20px;
}
.sidebar ul li {
  position: relative;
  height: 50px;
  width: 100%;
  margin: 0 5px;
  list-style: none;
  line-height: 50px;
  margin: 5px 0;
}
.sidebar ul li .tooltip {
  position: absolute;
  left: 125px;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  height: 35px;
  width: 120px;
  background: #fff;
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: block;
}
.sidebar.active ul li .tooltip {
  display: none;
}
.sidebar ul li:hover .tooltip {
  transition: all 0.5s ease;
  opacity: 1;
  top: 50%;
}
.sidebar ul li input {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background: #1d1b31;
  padding-left: 50px;
  font-size: 18px;
  color: #fff;
}
.sidebar ul li .bx-search {
  position: absolute;
  z-index: 99;
  color: #fff;
  font-size: 22px;
  transition: all 0.5 ease;
}
.sidebar ul li .bx-search:hover {
  background: #fff;
  color: #1d1b31;
}
.sidebar ul li a {
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* border-radius: 12px; */
  opacity: 0.7;
  white-space: nowrap;
  transition: all 0.4s ease;
}
.sidebar ul li a:hover {
  color: white;
  background: #243e74d7;
  opacity: 1;
}
.sidebar ul li i {
  font-size: 18px;
  font-weight: 400;
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}
.sidebar .links_name {
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.sidebar.active .links_name {
  transition: 0s;
  opacity: 1;
  pointer-events: auto;
}
.sidebar .profile_content {
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
}
.sidebar .profile_content .profile {
  position: relative;
  padding: 10px 6px;
  height: 60px;
  background: none;
  transition: all 0.4s ease;
}
.sidebar.active .profile_content .profile {
  background: #1d1b31;
}
.profile_content .profile .profile_details {
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  transition: all 0.4s ease;
}
.sidebar.active ~ .profile .profile_details {
  opacity: 1;
  pointer-events: auto;
}
.profile .profile_details img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 12px;
}
.profile .profile_details .name_job {
  margin-left: 10px;
}
.profile .profile_details .name {
  font-size: 15px;
  font-weight: 400;
}
.profile .profile_details .job {
  font-size: 12px;
}
.profile #log_out {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 50px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.4s ease;
  background: #1d1b31;
}
.sidebar .profile:hover {
  background-color: #284788 !important;
}
.sidebar .profile {
  background-color: #407aef !important;
}
.sidebar.active .profile #log_out {
  left: 88%;
}
.sidebar.active .profile #log_out {
  background: none;
}
.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 77px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2px);
  transition: all 0.5s ease;
  background-color: #f0f0f0;
}
.sidebar.active ~ .home_content {
  z-index: 100;
}
.home_content .text {
  font-size: 25px;
  font-weight: 500;
  color: #1d1b31;
  /* margin: 12px; */
}
.sidebar.active ~ .home_content {
  width: calc(100% - 240px);
  left: 240px;
}
</style>

<script>
export default {
  mounted() {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let searchBtn = document.querySelector(".bx-search");

    var x = document.querySelectorAll("#t");
    var i;

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    btn.onclick = function () {
      sidebar.classList.toggle("active");
      if (btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
        let x = document.querySelectorAll("#t");
        let i;

        for (i = 0; i < x.length; i++) {
          x[i].style.display = "block";
          x[i].style.cursor = "auto";
        }
      } else {
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
        let x = document.querySelectorAll("#t");
        let i;

        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
          x[i].style.cursor = "auto";
        }
      }
    };
    searchBtn.onclick = function () {
      sidebar.classList.toggle("active");
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("parsedToken");

      this.$router.push("/login");
    },
  },
};
</script>
