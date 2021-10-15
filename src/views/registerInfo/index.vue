<template>
	<div class="register-box">
		<!-- <div class="nav-bg-liner">
			<Nav id="borderBottom" bgColor="#333333"></Nav>
		</div> -->
		<div class="register">
			<div class="row pt-4">
				<div class="col-md-7"></div>
				<div class="col-md-5">
					<div class="d-flex">
						<div>000</div>
						<ul class="d-flex">
							<li class="col-md-2">service</li>
							<li class="col-md-2">service</li>
							<li class="col-md-2">service</li>
							<li class="col-md-2">service</li>
							<li>
								<button class="btn" style="background: #fff">登录/注册</button>
							</li>
						</ul>
					</div>

					<div class="register-input">
						<Register @register="register" ref="register" />
					</div>
				</div>
			</div>
		</div>
		<Dialog ref="dialog" @userBehavior="userBehaviorFun"></Dialog>
		<!-- <Footer /> -->
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
		document.getElementById('borderBottom').classList.add('borderBottom')
	},
	methods: {
		userBehaviorFun() {
			this.$refs.dialog.isShowConfirm = false
			this.$router.push('/login')
		},
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
			if (!data.surveyBirthdayMonth) {
				alert('Birthday month can not be empty')
				return false
			}
			if (!data.surveyBirthdayDay) {
				alert('Birthday day can not be empty')
				return false
			}
			if (!data.surveyAddress) {
				alert('Address can not be empty')
				return false
			}
			if (!data.surveyPostcode) {
				alert('Post Code can not be empty')
				return false
			}

			if (!data.phonenumber) {
				alert('Phone can not be empty')
				return false
			}
			// var isPhone = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
			// // var isMob = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
			// var value = data.phonenumber.trim();
			// if (isPhone.test(data.phonenumber.trim())) {
			//   // return true;
			// } else {
			//   alert(
			//     "The phone number format is wrong, please enter the correct number"
			//   );
			//   return false;
			// }

			if (!data.surveyPinCode) {
				alert('PinCode can not be empty')
				return false
			}
			if (/^[a-zA-Z]/.test(data.surveyPinCode)) {
				alert('PinCode need to enter four digits')
				return false
			}
			if (/^[\u4e00-\u9fa5]/.test(data.surveyPinCode)) {
				alert('PinCode need to enter four digits')
				return false
			}
			if (data.surveyPinCode.length < 4) {
				alert('PinCode need to enter four digits')
				return false
			}
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
