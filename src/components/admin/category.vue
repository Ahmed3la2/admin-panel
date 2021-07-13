<!-- eslint-disable -->
<template>
  <div style="background: rgb(240, 240, 240); overflow-x: hidden">
    <router-view />
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {};
</script>
<!-- eslint-disable -->
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
  top: 20px;
  right: 39px;
  opacity: 0.3;
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

table {
  /* height: 400px; */
}
.stars i {
  color: #f1f100;
}
table tr td .more {
  cursor: pointer;
}
</style>
