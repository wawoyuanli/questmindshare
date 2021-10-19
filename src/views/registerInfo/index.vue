<template>
	<div class="register-box">
		<div class="register">
			<div class="row pt-4 pb-4">
				<div class="d-flex">
					<div class="col-md-5 text-light fs-2 px-3">questmindshare</div>
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
									<a href="#/login" class="text-dark">登录/</a>
									<a href="#" class="text-dark">注册</a>
								</div>
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="row py-5">
				<div class="col-md-7"></div>
				<div class="col-md-5">
					<div class="register-input py-3">
						<Register @register="register" ref="register" />
					</div>
				</div>
			</div>
		</div>
		<Dialog ref="dialog" @userBehavior="userBehaviorFun"></Dialog>
	</div>
</template>
<script>
import Nav from '@c/navbar.vue'
import Register from '@c/register.vue'
import Footer from '@c/footer.vue' //引入底部组件
import Dialog from '@c/dialog.vue'
import ReCaptcha from '@c/reCaptcha'
import { registerHandler } from '@/api/login'
export default {
	name: 'RegisterPage',
	components: {
		Nav: Nav,
		Register: Register,
		Footer: Footer,
		Dialog,
		ReCaptcha,
	},
	data() {
		return {
			color: '#26a4c3',
			isActive: true,
		}
	},
	mounted() {
		// document.getElementById("borderBottom").classList.add("borderBottom");
	},
	methods: {
		userBehaviorFun() {
			this.$refs.dialog.isShowConfirm = false
			this.$router.push('/login')
		},
		// Email
		// Email Verification Code
		// password
		// fistname  lastname
		// sex
		// birthday
		// Referral Links:
		// zip
		register(data) {
			let _th = this
			if (!data.loginName.trim().length) {
				alert('Username can not be empty')
				return false
			}
			if (!data.email) {
				alert('E-mail can not be empty')
				return false
			}
			if (!data.password) {
				alert('password can not be empty')
				return false
			}
			if (!data.surveyFirstName) {
				alert('firstName can not be empty')
				return false
			}
			if (!data.surveyLastName) {
				alert('lastName can not be empty')
				return false
			}
			if (!data.remark) {
				alert('remark can not be empty')
				return false
			}
			if (!data.sex) {
				alert('sex can not be empty')
				return false
			}
			if (!data.surveyBirthdayYear) {
				alert('Birthday year can not be empty')
				return false
			}
			// if (!data.surveyBirthdayMonth) {
			// 	alert('Birthday month can not be empty')
			// 	return false
			// }
			// if (!data.surveyBirthdayDay) {
			// 	alert('Birthday day can not be empty')
			// 	return false
			// }
			// if (!data.surveyAddress) {
			// 	alert('Address can not be empty')
			// 	return false
			// }
			if (!data.surveyPostcode) {
				alert('Post Code can not be empty')
				return false
			}

			// if (!data.phonenumber) {
			// 	alert('Phone can not be empty')
			// 	return false
			// }
		 

			// if (!data.surveyPinCode) {
			// 	alert('PinCode can not be empty')
			// 	return false
			// }
			// if (/^[a-zA-Z]/.test(data.surveyPinCode)) {
			// 	alert('PinCode need to enter four digits')
			// 	return false
			// }
			// if (/^[\u4e00-\u9fa5]/.test(data.surveyPinCode)) {
			// 	alert('PinCode need to enter four digits')
			// 	return false
			// }
			// if (data.surveyPinCode.length < 4) {
			// 	alert('PinCode need to enter four digits')
			// 	return false
			// }
			if (!data.checkCode) {
				alert(`Verify You're Human`)
				return false
			}
			if (!data.checkbox1) {
				alert('You have related agreements that have not been read and checked')
				return false
			}
			if (!data.checkbox2) {
				alert('You have related agreements that have not been read and checked')
				return false
			}

			if (!data.checkbox3) {
				alert('You have related agreements that have not been read and checked')
				return false
			}
			_th.$refs.register.checkCode
			if (!_th.$refs.register.checkCode) {
				_th.$refs.register.showTip = true
				return false
			}
			registerHandler(data)
				.then(function (res) {
					debugger
					if (res.data.code === 0) {
						_th.$router.push('/login')
					} else if (res.data.code === 500) {
						_th.$refs.dialog.content = res.data.msg
						_th.$refs.dialog.isShowConfirm = true
					}
				})
				.catch(function (err) {
					// _th.$toast("registration failed");
					console.log(err)
				})
		},
		changeLanguage(type) {
			this.$i18n.locale = type
			localStorage.setItem('lang', type)
		},
		userBehaviorFun() {
			let _th = this
			_th.$refs.dialog.isShowConfirm = false
		},
	},
}
</script>
<style scoped lang="less">
.register-box {
	.register {
		background-image: url('../../assets/images/3.png');
		width: 100vw;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		min-height: 100vh;
		.register-input {
			width: 80%;
			height: auto;
			background: #fff;
			border-radius: 10px;
		}
	}
	.nav-item {
		color: #0f0f0f;
		font-size: 1.1rem;
	}
	.btn-primary {
		background-color: #ff6f00;
	}
}
</style>
