<template>
  <div>
    <div class="row p-3">
      <div class="col-12 col-md-6">
        <div class="h3" style="font-weight: bold">Services Category</div>
        <p>
          <span style="color: rgb(0, 98, 204)">Category</span
          ><i style="color: #0062cc" class="fas fa-greater-than mx-2"></i>
          Add Category
        </p>
      </div>
    </div>
    <div class="row p-3">
      <div class="col-12 col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <div class="row justify-content-between mb-3">
              <div class="col-12 col-md-6">
                <h5>Basic Info</h5>
              </div>
              <div class="col-12 col-md-6 text-left text-md-right">
                <button
                  class="btn btn-primary"
                  style="box-shadow: #a29f9f 0px 0px 10px"
                  to="addCategory"
                  tag="button"
                  @click="addCategory"
                >
                  <i class="fas fa-plus mr-3"></i>
                  Add Categgory
                </button>
              </div>
            </div>
            <form enctype="multipart/form-data">
              <div class="form-group">
                <label
                  style="font-weight: 600; color: #9e9d9d"
                  for="exampleFormControlInput1"
                  >Category Name</label
                >
                <input
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Category Name"
                  v-model="cateName"
                />
              </div>

              <!-- category icon serction -->
              <div class="row">
                <div class="col-12 col-md-4">
                  <p style="font-weight: 600; color: #9e9d9d">Category Icon</p>
                </div>
                <div class="col-12 col-md-6 text-center">
                  <input
                    type="file"
                    id="filebtn"
                    class="invisible"
                    @change="onChangecateIcon"
                  />
                  <div
                    class="
                      img
                      d-flex
                      justify-content-center
                      align-items-center
                      text-center
                      shadow
                    "
                    @click="selectCateIcon"
                    style="background-image: "
                  >
                    <div class="content">
                      <i class="bx bx-upload icon"></i>
                      <p>Upload SVG Icon</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- category image section -->
              <div class="row">
                <div class="col-12 col-md-4">
                  <p style="font-weight: 600; color: #9e9d9d">Category Image</p>
                </div>
                <div class="col-12 col-md-6 text-center">
                  <input
                    type="file"
                    id="filebtnimage"
                    class="invisible"
                    @change="onChangecateImage"
                  />
                  <div
                    class="
                      imgImage
                      d-flex
                      justify-content-center
                      align-items-center
                      text-center
                      shadow
                    "
                    @click="selectCateImage"
                    style="background-image: "
                  >
                    <div class="contentImage">
                      <i class="bx bxs-image-alt icon"></i>
                      <p>Upload Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
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
      cateName: null,

      cateIconimg: null,
      Reader: null,
      cateIcon: null,

      cateimage: null,
      imageReader: null,
      image: null,
    };
  },
  methods: {
    selectCateIcon: function () {
      document.getElementById("filebtn").click();
    },
    selectCateImage: function () {
      document.getElementById("filebtnimage").click();
    },

    onChangecateIcon: function (event) {
      this.cateIconimg = event.target.files[0];
      this.Reader = new FileReader();
      this.Reader.addEventListener("load", function () {
        var x = this;
        document.querySelector(".content").style.display = "none";
        document.querySelector(
          ".img"
        ).style.backgroundImage = `url('${x.result}')`;
        localStorage.setItem("t", x.result);
      });
      this.Reader.readAsDataURL(this.cateIconimg);
      this.cateIcon = localStorage.getItem("t");
    },

    onChangecateImage: function (event) {
      this.cateimage = event.target.files[0];
      this.imageReader = new FileReader();
      this.imageReader.addEventListener("load", function () {
        var x = this;
        document.querySelector(".contentImage").style.display = "none";
        document.querySelector(
          ".imgImage"
        ).style.backgroundImage = `url('${x.result}')`;
        localStorage.setItem("y", x.result);
      });
      this.imageReader.readAsDataURL(this.cateimage);
      this.image = localStorage.getItem("y");
    },
    addCategory: function () {
      const formdata = new FormData();
      formdata.append("name", this.cateName);
      formdata.append("icon", this.cateIconimg);
      formdata.append("coverPhoto", this.cateimage);

       axios
        .post(
          "https://masla7a.herokuapp.com/admin/control/categories/add-category",
          formdata,
          {
            headers: {
              "x-auth-token": localStorage.getItem("token"),
              "content-type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
            this.$router.push("category")
             console.log(res);
        });

    },
  },
};
</script>
<style scoped>
#filebtn {
  position: absolute;
}
.img,
.imgImage {
  width: 150px;
  height: 150px;
  margin: 20px 0 0 30px;
  background-color: #cfcfcf;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: contain;
}

.icon {
  font-size: 50px;
}
.img p {
  font-size: 14px;
  padding-top: 20px;
}
.shadow {
  box-shadow: rgb(162 159 159) 0px 0px 10px;
}
</style>
