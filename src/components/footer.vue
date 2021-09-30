<template>
	<div class="footer">
		<div class="row">
			<div class="col-md-2"></div>
			<div class="row pt-5 bottom-nav pb-5">
				<div class="col-md-1"></div>
				<div class="col-md-5">
					<p class="text-center fs-3 text-light navigation">Navigation</p>
					<p class="text-start text-center pt-5">
						<a href="#home" class="text-light" @click="clickHandler('home')"
							>Services</a
						>
					</p>
					<p class="text-start text-center pt-3">
						<a
							href="#home/partFour"
							class="text-light"
							@click="clickHandler('home')"
							>Markets</a
						>
					</p>
					<p class="text-start text-center pt-3">
						<a href="#partTwo" class="text-light" @click="clickHandler('home')"
							>About</a
						>
					</p>
					<p
						class="text-start text-center pt-3 text-light"
						@click="clickHandler('contact')"
					>
						Contact
					</p>
				</div>
				<div class="col-md-5">
					<p class="fs-3 text-center text-light">Support</p>
					<p class="text-center pt-5 text-light" @click="clickHandler('terms')">
						Term of Use
					</p>
					<p
						class="text-center pt-3 text-light"
						@click="clickHandler('privacy')"
					>
						Privacy Policy
					</p>
					<p class="text-center pt-3 text-light">Don't Sell My Info</p>
				</div>
			</div>
			<div class="copyright">
				<div
					class="mb-5"
					style="margin: 0 auto; border-bottom: 1px solid white; width: 10rem"
				></div>
				<p class="text-center pb-2 pt-5 text-light">
					Copyright 2021, Quest Mindshare. All Rights Reserved.
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'FooterPage',
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
.footer {
	width: 100vw;
	background-color: #333333;
	.bottom-nav {
		font-family: @fontFamily;
	}
}
</style>