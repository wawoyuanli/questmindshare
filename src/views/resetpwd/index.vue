<template>
	<div class="resetpwd">
		<div class="row pt-4 pb-4">
			<div class="d-flex">
				<div class="col-md-5 text-light fs-2 px-5">questmindshare</div>
				<ul class="d-flex col-md-7">
					<li class="col-md-2 fs-5">
						<a href="#/home" class="text-light">Services</a>
					</li>
					<li class="col-md-2 text-light fs-5">
						<a href="#/home" class="text-light">Markets</a>
					</li>
					<li class="col-md-2 text-light fs-5">
						<a href="#/home" class="text-light">About</a>
					</li>
					<li class="col-md-2 text-light fs-5">
						<a href="#/contact" class="text-light">Contact</a>
					</li>
					<li>
						<button class="btn" style="background: #fff">
							<div class="d-flex">
								<a class="text-dark" href="#">登录/</a>
								<a href="#/registerInfo" class="text-dark">注册</a>
							</div>
						</button>
					</li>
				</ul>
			</div>
		</div>
		<div class="row pt-5 mt-5">
			<div class="col-md-7"></div>
			<div class="col-md-4 bg-light py-5">
				<div class="reset-password">
					<p class="fs-4 text-center py-4">Reset my password</p>
					<div class="col-md-10" style="margin: 0 auto">
						<input
							type="text"
							class="form-control py-2"
							v-model="username"
							maxlength="30"
							minlength="6"
							placeholder="username"
						/>
					</div>
					<div class="col-md-10 d-flex my-3" style="margin: 0 auto">
						<div class="col-md-7">
							<input
								type="text"
								class="form-control col-md-12 py-2"
								v-model="email"
								maxlength="30"
								minlength="0"
								placeholder="email"
							/>
						</div>
						<div class="col-md-6">
							<div class="col-md-12 mx-3">
								<input
									type="submit"
									class="btn  py-2"
									value="send verification code"
									@click="sendCode"
                  style="background:#ff6f00;color:#fff"
								/>
							</div>
						</div>
					</div>

					<div class="d-flex my-3 col-md-10" style="margin: 0 auto">
						<div class="col-md-7">
							<input
								type="text"
								class="form-control col-md-3 py-2"
								v-model="email"
								maxlength="30"
								minlength="0"
								placeholder="code"
							/>
						</div>
						<div class="col-md-5 mx-3 py-2">Email Verification Code</div>
					</div>
					<div class="col-md-10" style="margin: 0 auto">
						<input
							type="text"
							class="form-control py-2"
							v-model="password"
							maxlength="20"
							minlength="6"
							placeholder="password"
						/>
					</div>
					<div class="col-md-10 mt-4" style="margin: 0 auto">
						<button
							class="mt-4 col-md-12 btn  mb-4  py-3"
							@click="resetPwd"
              style="background:#ff6f00;border-radius:25px;color:#fff"
						>提交</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Nav from '@c/navbar.vue'
import Footer from '@c/footer.vue'
import { resetPwd, getCode } from '@/api/login.js'
export default {
	name: 'Resetpwd',
	components: {
		Nav,
		Footer,
	},

	data() {
		return {
			isActive: true,
			color: '#26a4c3',
			username: '',
			email: '',
			code: '',
			password: '',
		}
	},
	mounted() {
		// document.getElementById('borderBottom').classList.add('borderBottom')
	},
	methods: {
		sendCode: function () {
			let _th = this
			let req =
				/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
			if (!req.test(_th.email)) {
				alert('邮箱格式不正确')
				return false
			}
			getCode({ email: _th.email })
				.then(function (res) {
					console.log(res)
				})
				.catch(function (err) {
					console.log(err)
				})
		},
		resetPwd: function () {
			let _th = this
			let data = {
				username: _th.username,
				email: _th.email,
				remark: _th.code,
				password: _th.password,
			}
			resetPwd(data)
				.then(function (res) {
					console.log(res)
					_th.$router.push('/login')
				})
				.catch(function (err) {
					console.log(err)
				})
		},
	},
}
</script>
<style lang="less" scoped>
.resetpwd {
	background-image: url('../../assets/images/3.png');
	width: 100vw;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	min-height: 100vh;
}
</style>
