<template>
	<div class="nav-bar-wrap bg-dark navbar-dark pt-4 pb-4">
		<div class="row d-flex align-items-center">
			<div class="col-md-2">
				<a class="navbar-brand fs-3" href="#/home">questmindshare </a>
			</div>
			<div class="col-md-8">
				<nav class="navbar navbar-expand-sm" id="nav">
					<ul class="navbar-nav">
						<li class="nav-item col-md-4">
							<a class="nav-link fs-4" href="#/home">Services</a>
						</li>
						<li class="nav-item col-md-3 fs-4">
							<a class="nav-link" href="#/home">Markets</a>
						</li>
						<li class="nav-item col-md-3 fs-4">
							<a class="nav-link" href="#/home">About</a>
						</li>
						<li class="nav-item col-md-3 fs-4">
							<a class="nav-link" href="#/contact">Contact</a>
						</li>
						<li class="nav-item col-md-3 fs-4">
							<a class="nav-link" href="#/login">Login</a>
						</li>
						<li class="nav-item col-md-3 fs-4">
							<a class="nav-link" href="#/registerInfo">Sign in</a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="col-md-2 px-5">
				<el-dropdown @command="handleClick">
					<el-button type="primary">
						切换语言<i class="el-icon-arrow-down el-icon--right"></i>
					</el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item
							v-for="(item, index) in langList"
							:key="index"
							:command="item.abbreviation"
							>{{ item.lang }}</el-dropdown-item
						>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>
<script>
import $ from 'jquery'
export default {
	name: 'NavBar',
	props: {
		fixedTop: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			langList: [
				{ lang: 'english', abbreviation: 'en' },
				{ lang: '中文', abbreviation: 'zh' },
				{ lang: 'German', abbreviation: 'de' },
			],
		}
	},
	methods: {
		handleClick(lang) {
			this.$store.commit('changeLanguage','zh')
		},
	},
}
</script>
<style scoped lang='less'>
.nav-bar-wrap {
	.navbar-brand {
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
			'Lucida Sans Unicode', Cursive, Geneva, SimSun, Verdana, sans-serif;
		text-shadow: 2px 2px;
		color: #f4f8f8;
		font-style: oblique;
		padding-top: 30px !important;
	}
	#nav {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>

