<template>
  <div class="login">
    <!-- <Nav></Nav> -->
    <div class="login-form">
      <div class="row pt-4 pb-4">
        <div class="d-flex">
          <div class="col-md-5 text-light fs-2">questmindshare</div>
          <ul class="d-flex col-md-7">
            <li class="col-md-2 text-light fs-5">Services</li>
            <li class="col-md-2 text-light fs-5">Markets</li>
            <li class="col-md-2 text-light fs-5">About</li>
            <li class="col-md-2 text-light fs-5">Contact</li>
            <li>
              <button class="btn" style="background: #fff">
                <div class="d-flex">
                  <a class="text-dark" href="/login">登录/</a>
                  <a href="/registerInfo">注册</a>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8"></div>
        <div class="col-md-4 my-5">
          <div class="login-box my-5">
            <Login @login="login" ref="login"></Login>
          </div>
        </div>
      </div>
    </div>
    <Dialog ref="myConfirm" @userBehavior="userBehaviorFun"></Dialog>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Nav from "@c/navbar.vue";
import Login from "@c/login.vue";
import Footer from "@c/footer.vue"; //引入底部组件
import Dialog from "@c/dialog.vue";
import { login } from "@/api/login";
export default {
  name: "LoginPage",
  components: {
    Nav: Nav,
    Login: Login,
    Footer: Footer,
    Dialog: Dialog,
  },
  data() {
    return {
      color: "#26a4c3",
      isActive: true,
    };
  },
  mounted() {},
  methods: {
    login(data) {
      let _th = this;
      if (!data.username) {
        alert("Username can not be empty");
        return false;
      }
      if (!data.username.trim().length) {
        alert("Username can not be empty");
        return false;
      }
      if (!data.password) {
        alert("password can not be blank");
        // _th.$refs.login.errMessPassword = ''
        // _th.$refs.login.show = true
        return false;
      }
      if (!data.password.trim().length) {
        alert("password can not be blank");
        // _th.$refs.login.errMess = 'password can not be blank'
        return false;
      }
      if (!data.checkCode) {
        alert(`Verify You're Human`);
        return false;
      }
      let requestData = {
        username: data.username,
        password: data.password,
        // rememberMe: false,
      };
      /**登录接口 */
      login(requestData)
        .then(function(res) {
          if (res.data.code === 0) {
            // _th.$router.push('/registerInfo')
            window.location.href = process.env.VUE_APP_URL; //登录成功跳转地址
          } else if (res.data.code === 500) {
            _th.$refs.myConfirm.content = res.data.msg;
            _th.$refs.myConfirm.isShowConfirm = true;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    userBehaviorFun(type, data) {
      this.$refs.myConfirm.isShowConfirm = false;
      // window.location.href = process.env.VUE_APP_URL //登录成功跳转地址
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  .login-form {
    background-image: url("../../assets/images/3.png");
    width: 100vw;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 100vh;
    .login-box {
      width: 80%;
      height: auto;
      background: #fff;
      height: 70%;
      border-radius: 10px;
    }
  }
}
</style>
