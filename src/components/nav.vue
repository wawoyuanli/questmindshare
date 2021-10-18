<template>
	<div class="row pt-5 border-bottom pb-4">
		<div class="col-md-2"></div>
		<div class="col-md-8">
			<ul class="nav justify-content-center">
				<li class="nav-item col-md-2 text-center" @click="clickHandler('home')">
					<a
						class="nav-link active text-light fs-5"
						aria-current="page"
						href="#/home"
						>Services</a
					>
				</li>
				<li class="nav-item col-md-2 text-center">
					<a
						class="nav-link fs-5 text-light"
						href="#/home"
						>Markets</a
					>
				</li>
				<li class="nav-item col-md-2 text-center">
					<a
						class="nav-link fs-5 text-light"
						href="#/home"
						>About</a
					>
				</li>
				<li class="nav-item col-md-2 text-center">
					<a class="nav-link fs-5 text-light" @click="clickHandler('contact')"
						>Contact</a
					>
				</li>
				<li class="nav-item col-md-2 text-center">
					<a
						class="nav-link fs-5 text-light"
						href="#/login"
						>Login</a 
					>
				</li>
				<li class="nav-item col-md-2 text-center">
					<a
						class="nav-link fs-5 text-light"
						href="#/registerInfo"
						>Sigin in</a
					>
				</li>
			</ul>
		</div>
		<div class="col-md-2"></div>
	</div>
</template>
<script>
export default {
	name: 'NavPage',
	props: {
		bgColor: {
			type: String,
			default: '',
		},
	},
	data() {
		return {}
	},
	methods: {
		clickHandler(path) {
			this.$router.push(`/${path}`)
		},
	},
}
</script>
<style scoped lang='less'>
.nav-main {
	width: 100vw;
	height: 6rem;
	background-color: #fad3b1;
	color: #e04200 !important;
}
</style>
