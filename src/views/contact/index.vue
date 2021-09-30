<template>
	<div class="contact-container">
		<div class="bg-container">
			<Nav id="borderBottom" bgColor=''/>
			<p class="contact-us text-center text-light">Contact Us</p>
		</div>
		<button class="btn current-page-btn">Home > Contact</button>
		<div class="row pt-5 mt-5">
			<div class="col-md-6  p-5">
				<div class="contact-form p-5">
					<p class="fs-3 p-5 text-start">Contact Form</p>
					<label class="control-label text-start fs-5"> Email: </label>
					<div class="col-md-8 pt-2">
						<input class="form-control pt-3 pb-3" v-model="email" />
					</div>
					<div class="form-group mt-4">
						<label class="control-label text-start fs-5 mb-2"> Text: </label>
						<div class="col-md-8">
							<textarea class="form-control" rows="4" v-model="text"></textarea>
						</div>
					</div>
					<div class="text-start mb-5 mt-5">
						<button
							class="btn btn-primary-submit fs-5 col-md-4"
							@click="submit"
						>
							submit
						</button>
					</div>
				</div>
			</div>
			<div class="col-md-6 text-center p-5">
				<h2 class="content-title fs-1 pt-5">Contact</h2>
				<p class="text-left pt-5 fs-5 lh-lg">
					Do you need to contact us? Fill the form below or email us directly:
					service@salientsurveys.com
				</p>
			</div>
		</div>
		<Footer class="footer"></Footer>
	</div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
export default {
	name: 'Contact',
	components: {
		Nav: Nav,
		Footer: Footer,
	},
	data() {
		return {
			iconList: [
				{
					name: 'people',
					path: require('../../assets/images/People Plus.png'),
				},
				{ name: 'earth', path: require('../../assets/images/earth.png') },
				{ name: 'seat', path: require('../../assets/images/seat.png') },
			],
			isActive: true,
			color: '#26a4c3',
			email: '',
			text: '',
		}
	},
	mounted() {
		document.getElementById('borderBottom').classList.add('borderBottom')
	},
	methods: {
		submit() {
			var reg = new RegExp(
				'^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'
			) //姝ｅ垯琛ㄨ揪寮�
			if (!reg.test(this.email)) {
				alert('E-mail format is incorrect')
				return false
			}
			if (this.text === '') {
				alert('Text cannot be empty')
				return false
			}
			this.email = ''
			this.text = ''
			alert('Data submitted')
		},
	},
}
</script>
<style scoped lang="less">
.contact-container {
	background: #fff;
	.bg-container {
		width: 100vw;
		background-image: url('../../assets/images/test-bg.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: auto;
		.contact-us {
			font-size: 60px;
			margin-top: 200px;
			padding-bottom: 200px;
		}
	}
	.current-page-btn {
		display: block;
		margin: 0 auto;
		background-color: #fea000 !important;
		height: 60px;
		margin-top: -30px;
		color: #fff !important;
		border-radius: 30px;
		font-size: 20px;
		padding: 0 40px;
	}
	.contact-form {
		background-color: #f6f8fa;
		.btn-primary-submit {
			height: 50px;
			border-radius: 25px;
			background-image: -webkit-linear-gradient(
				0deg,
				rgb(237, 30, 36) 0%,
				rgb(237, 80, 27) 100%
			);
			background-image: linear-gradient(
				0deg,
				rgb(237, 30, 36) 0%,
				rgb(237, 80, 27) 100%
			);
			color: #fff;
		}
	}
	.footer {
		margin-top: 200px;
	}
}
</style>
