<template>
<div class="flex-container">
    <div class="row">
        <div class="col-lg-6 flex-column content left">
            <img src="@/assets/auth/Login.png" />
            <p>
                Dashboard Login
            </p>
        </div>
        <div class="col-lg-6 content right flex-column">
            <h3>Log In</h3>
            <form @submit.prevent="LoginForm">
                <p v-if="errors.length" class="text-center">
                    <ul>
                        <li v-for="error in errors" :key="error.id">{{ error }}</li>
                    </ul>
                </p>
                <label for="uname">E-mail</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <i class="fas fa-envelope"></i>
                        </div>
                    </div>

                    <input type="email" required v-model="email" class="form-control" placeholder="name@example.com" />
                </div>
                <label for="psw">Password</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <i class="fas fa-unlock"></i>
                        </div>
                    </div>

                    <input type="password" required v-model="password" class="form-control" placeholder="at least 8 charachters" />
                </div>
                <button type="submit" @click="login">Login</button>
         
            </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "login",
    data() {
        return {
            errors: [],
            email: null,
            password: "",
        };
    },
    methods: {
        async LoginForm() {

            const data = {
                email: this.email,
                password: this.password,
            };
            try {

                const response = await axios.post(
                    "https://masla7a.herokuapp.com/admin/control/admins/admin-login",
                    data
                );
                this.errors = [];

                if (response.data && response.data.token ) {
                    localStorage.setItem("token", response.data.token);
                }
                if (localStorage.getItem("token") != null) {
                    this.$router.push("/");
                } else {
                    this.$router.push("/login");
                }
            } catch (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    this.errors.push(error.response.data)
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            }

        },
        login() {
            this.errors = [];
            if (this.email == null || this.email == '') {
                this.errors.push("Email required");
                return false;
            }

            if (!this.password) {
                this.errors.push("Password required.");
                return false;
            }
        },
    },
};
</script>

<style scoped>
.row{
  margin-right: 0;
}
li {
    color: red;
    display: inline-block;
    padding-right: 40px;
    font-size: 13px;
    font-weight: 900;
    list-style-type: circle !important;
}

body {
    font-family: Arial, Helvetica, sans-serif;
 
}

.content {
    height: 100vh !important;
    width: 100vw !important;
    -webkit-flex: 1;
    /* Safari */
    -ms-flex: 1;
    /* IE 10 */
    flex: 1;
    /* Standard syntax */
    display: flex;
}

.left {
    background-image: linear-gradient(to bottom, #447ae6, #223d73);
    border-radius: 0 60px 60px 0;
    align-items: center;
    margin: auto;
    padding: auto;
    text-align: center;
    color: white;
}

.left img {
    height: 450px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 90px;
}

.left p {
    font-size: 14px;
    font-family: Georgia, "Times New Roman", Times, serif;;
    color: white;
    padding-top: 80px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 500;
}

.right {
    text-align: center;
    align-items: center;
    justify-content: center;
}

h3 {
    font-weight: 900;
    font-family: Georgia, "Times New Roman", Times, serif;
    padding-bottom: 20px;
}

/* form */
form {
    width: 100%;
    margin: 0 !important;
    text-align: left;
    font-size: 13px;
    font-family: "Segoe UI";
    padding: 0 50px;
}

.invalid input {
    border: 1px solid;
    color: red;
}

.invalid label {
    color: red;
}

.input-group {
    align-items: center;
}

/* inputs */
input[type="email"],
input[type="password"] {
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 10px;
}

/* forget design*/
.forget {
    color: #4378e3;
    font-size: 12px;
    padding-left: 310px;
    text-align: right;
    text-decoration: none;
}

/* button */
button {
    background-color: #4378e3;
    opacity: 0.5;
    color: white;
    padding: 13px 20px;
    margin: 25px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 8px;
}

button:hover {
    opacity: 1;
}

/* create new account */
.createNew {
    text-align: center;
}

/* link signup design */
.signupLink {
    text-decoration: none;
    font-weight: bold;
    color: #4378e3;
}

.input-group-text {
    background: white;
    height: 50px;
    color: #4378e3;
}
</style>
