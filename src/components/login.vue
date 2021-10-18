<template>
  <div class="clogin">
    <p class="fs-3 h1 p-5">Login</p>
    <div class="formdata">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-8">
            <input
              class="form-control col-md-12 p-2"
              :title="tipUsername"
              v-model="username"
              @blur="blur(username)"
              placeholder="username"
            />
            <p v-show="isShow" style="font-size: 10px; color: red">
              {{ errMess }} *
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <input
              type="password"
              class="form-control col-md-12 p-2"
              :title="tipPassword"
              v-model="password"
              @blur="blur2(password)"
                placeholder="password"
            />
            <p v-show="show" style="font-size: 10px; color: red">
              {{ errMessPassword }} *
            </p>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-8">
            <p class="col-md-12 text-start">Verify You're Human</p>
            <re-captcha
              class="col-md-12"
              :sitekey="sitekey"
              @getValidateCode="getValidateCode"
            ></re-captcha>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8">
            <div class="submit mt-5">
              <button
                @click="login"
                class="btn col-md-12"
                type="button"
                data-toggle="modal"
                data-target="#myModal"
              >
                Log in
              </button>
            </div>
            <div class="forgot col-md-12 text-left">
              <a href="#/resetpwd"> I forgot my password</a>
            </div>
            <div class="toregister col-md-12 text-left">
              Not a member yet? Click
              <a href="#/registerInfo">here</a> to register.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ReCaptcha from "@c/reCaptcha";
export default {
  name: "Login",
  props: {},
  components: {
    ReCaptcha: ReCaptcha,
  },
  data() {
    return {
      sitekey: process.env.VUE_APP_SITEKEY,
      username: "",
      password: "",
      errMess: "",
      errMessPassword: "",
      isShow: false,
      show: false,
      tipUsername:
        "Choose your desired username,It must be 4-20 characters long and can only contain letters and numbers. it must start with a letter",
      tipPassword:
        "Choose your password.It must be 4-80 characters long and can only contain letters,numbers and !@#$%^&*(0-=+.,",
      checkCode: false,
    };
  },
  methods: {
    /**登录 */
    login() {
      const _th = this;
      _th.$emit("login", {
        username: _th.username,
        password: _th.password,
        checkCode: _th.checkCode,
      });
    },
    getValidateCode(code) {
      if (code) {
        //认证成功
        this.checkCode = code;
      } else {
        //认证失败
        this.checkCode = code;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.clogin {
  min-height: 75vh;
  .h1 {
    text-align: center;
    padding-top: 8rem;
  }
  .formdata {
    .container {
      .row {
        justify-content: center;
        .col-md-4 {
          .form-control {
            margin: 10px 0px;
          }
        }
        .submit {
          .btn {
            background: #ff6f00;
            color: #fff;
          }
        }
        .forgot {
          margin-top: 20px;
          a {
            color: #ff6f00;

            text-decoration: underline;
          }
        }
        .toregister {
          margin-top: 20px;
          color: rgb(146, 135, 135);
          a {
            text-decoration: underline;
            color: #ff6f00;
          }
        }
      }
    }
  }
}
</style>
