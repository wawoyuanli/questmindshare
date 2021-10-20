<template>
	<div id="header-nav">
		<div class="nav">
			<a href="#/home" class="logo px-3 text-light fs-2">questmindshare</a>
			<div id="nav-btn" class="btn" @click="openMenu">
				<i class="el-icon-menu fs-2"></i>
			</div>
			<ul class="nav-bar">
				<li>
					<a href="#/home" class="fs-5">{{ $t('home.service') }}</a>
				</li>
				<li>
					<a href="#/home" class="fs-5">{{ $t('home.markets') }}</a>
				</li>
				<li>
					<a href="#/home" class="fs-5">{{ $t('home.about') }}</a>
				</li>
				<li>
					<a href="#/contact" class="fs-5">{{ $t('home.contact') }}</a>
				</li>
				<li>
					<a href="#/login" class="fs-5">{{ $t('home.login') }}</a>
				</li>
				<li>
					<a href="#/registerInfo" class="fs-5">{{ $t('home.sigin') }}</a>
				</li>
				<li>
					<el-dropdown @command="handleClick">
						<el-button type="primary" class="fs-5">
							{{ $t('home.lang')
							}}<i class="el-icon-arrow-down el-icon--right"></i>
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
				</li>
			</ul>
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
				// { lang: 'German', abbreviation: 'de' },
			],
			isOpen: false,
		}
	},
	methods: {
		handleClick(lang) {
			this.$i18n.locale = lang
		},
		openMenu() {
			// 开关状态
			var navBar = $('.nav-bar')
			// 设置header的高度，将导航列表显示出来
			var height = navBar.offset().top + navBar.height()
			$('#header-nav').animate({
				height: this.isOpen ? 50 : height,
			})
			// 修改开关状态
			this.isOpen = !this.isOpen
		},
	},
}
</script>
<style scoped lang='less'>
#header-nav {
	width: 100%;
	.nav {
		background-color: rgba(27, 24, 24, 0.9);
		height: 84px;
		a.logo {
			float: left;
			font-weight: bold;
			line-height: 84px;
			// font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
			// 'Lucida Sans Unicode', Cursive, Geneva, SimSun, Verdana, sans-serif;
			width: 30%;
			font-family: @fontFamily;
			font-style: oblique;
			text-shadow: 2px 2px;
		}
		.btn {
			display: none;
			float: right;
			margin-top: 5px;
			color: #fff;
		}
	}
	div.nav {
		height: 84px;
	}
	ul {
		border-radius: 25px;
	}

	ul.nav-bar {
		list-style: none;
		float: right;
		line-height: 50px;

		width: 66%;
	}

	ul.nav-bar li {
		float: left;
		padding: 0 10px;
		width: 12%;
		line-height: 84px;
		font-family: @fontFamily;
		a {
			color: #fff !important;
		}
	}

	.icon-menu {
		display: none;
		float: right;
		margin-top: 10px;
	}
	@media screen and (max-width: 768px) {
		#header-nav {
			padding: 10px 5%;
			height: 50px;
			overflow: hidden;
			.nav {
				a.logo {
					line-height: 55px;
					font-size: 30px;
				}
			}
			.btn {
				display: block;
			}
		}

		ul.nav-bar {
			margin-top: 15px;
			width: 100%;
		}

		ul.nav-bar li {
			float: none;
			padding: 0 10px;
		}
	}
}
</style>

