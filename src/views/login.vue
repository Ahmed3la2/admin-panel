<template>
  <div class="flex-container">
    <div class="row">
      <div class="col-lg-6 flex-column content left">
        <img src="@/assets/auth/Login.png" />
        <p>
          Help us getting better by sending your thoughts about us and about our
          services,<br />
          you can also mention any other points that are related by<br />
          sending your by sending thoughts by sending your thoughts.
        </p>
      </div>
      <div class="col-lg-6 content right flex-column">
        <h3>Log In</h3>
        <ul class="social">
          <li>
            <a
              href="https://www.facebook.com/"
              class="facebook"
              style="background: #4867aa"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
                transform="shrink-3.5 down-1.6 right-1.25"
                style="color: white; margin-right: 10px"
                size="2x"
              />
              <span>Login With Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=AddSession"
              class="google"
              style="background: #db4437"
            >
              <font-awesome-icon
                :icon="['fab', 'google']"
                transform="shrink-3.5 down-1.6 right-1.25"
                style="color: white; margin-right: 10px"
                size="2x"
              />
              <span>Login With Google</span>
            </a>
          </li>
        </ul>
        <div class="or-login clearfix">
          <span>Or</span>
        </div>
        <form class="form" @submit.prevent="LoginForm">
          <div :class="{ invalid: emailValidaty === 'invalid' }">
            <label for="uname">E-mail</label>
            <input
              type="email"
              required
              v-model.trim="login.email"
              placeholder="name@example.com"
              @blur="validateInput"
            />
            <p v-if="emailValidaty === 'invalid'">
              Please enter a valid email!
            </p>
          </div>
          <label for="psw">Password</label>
          <input
            type="password"
            v-model="login.password"
            placeholder="at least 8 charachters"
          />
          <div>
            <router-link class="forget" :to="{ name: 'forgotpassword' }">
              Forget Password
            </router-link>
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              v-model="loginConfirm"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember Me
            </label>
          </div>
          <button>Login</button>
          <div class="createNew">
            Don't have an account?
            <router-link class="signupLink" :to="{ name: 'signup' }">
              Sign Up
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from "axios";
export default {
  data() {
    return {
      login: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    async LoginForm() {
      await axios
        .post("https://masla7a.herokuapp.com/accounts/login", this.login)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem(
            "parsedToken",
            JSON.stringify(jwt_decode(res.data.token))
          );
        });

      console.log(JSON.parse(localStorage.getItem("parsedToken")).role);

      if (JSON.parse(localStorage.getItem("parsedToken")).role === "admin") {
        this.$router.push("/");
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
* {
  overflow: hidden;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  height: 100vh;
  width: 100vw;
  -webkit-flex: 1; /* Safari */
  -ms-flex: 1; /* IE 10 */
  flex: 1; /* Standard syntax */
  display: flex;
}
.left {
  background-image: linear-gradient(to bottom, #447ae6, #223d73);
  align-items: center;
  margin: auto;
  padding: auto;
  text-align: center;
  color: white;
}
.left img {
  height: 400px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 90px;
}

.left p {
  font-size: 14px;
  font-family: Segoe UI;
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
  font-weight: 700;
}
/* ul social account */
ul {
  list-style: none;
  margin: 0;
  padding: 1px;
}
.social li {
  display: inline-block;
  margin: 2px 20px 5px 0;
}
.social li a {
  font-size: 12px;
  font-weight: 600;
  width: 180px;
  margin: 1px 0 8px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.social li a span {
  margin-right: 10px;
  color: #fff;
}
.facebook {
  color: #4867aa;
}
.google {
  color: #db4437;
}
/* or login with email & pass */
.or-login {
  width: 100%;
  margin: 10px 0 5px;
  text-align: center;
  position: relative;
}
.or-login::before {
  position: absolute;
  left: 0;
  top: 10px;
  width: 100%;
  height: 1px;
  background: #d8dcdc;
  content: "";
}
.or-login > span {
  width: auto;
  float: none;
  display: inline-block;
  background: #fff;
  padding: 1px 20px;
  z-index: 1;
  position: relative;
  font-family: Open Sans;
  font-size: 15px;
  color: #616161;
  text-transform: capitalize;
}
/* form */
form {
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
  font-size: 13px;
  font-family: "Segoe UI";
  padding-top: 30px;
}
.invalid input {
  border: 1px solid;
  color: red;
}
.invalid label {
  color: red;
}
/* inputs */
input[type="email"],
input[type="password"] {
  width: 100%;
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
  padding: 14px 20px;
  margin: 25px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
}
button:hover {
  opacity: 1;
}
/* create new account */
.createNew {
  margin: 15px;
  text-align: center;
}
/* link signup design */
.signupLink {
  text-decoration: none;
  font-weight: bold;
  color: #4378e3;
}
</style>
