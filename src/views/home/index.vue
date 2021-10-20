<template>
	<div class="home-main">
		<div id="home"></div>
		<div class="container-bg" :style="{ height: availHeight + 'px' }">
			<nav class="navbar navbar-expand-lg  py-3">
				<div class="container-fluid d-flex">
					<a class="navbar-brand logo col-md-3 px-3 fs-2" href="#/home"
						>questmindshare</a
					>
					<button
						class="navbar-toggler col-md-1 bg-light navbar-light"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse col-md-8" id="navbarNav">
						<ul class="navbar-nav col-md col-md-12">
							<li class="nav-item border-end col-md-2" id="service">
								<a
									class="nav-link active text-light text-center"
									aria-current="page"
									href="#/home"
									>{{ $t('home.service') }}</a
								>
							</li>
							<li class="nav-item border-end col-md-1" id="markets">
								<a
									class="nav-link text-light text-center"
									href="#home/partFour"
									>{{ $t('home.markets') }}</a
								>
							</li>
							<li class="nav-item border-end col-md-1" id="about">
								<a class="nav-link text-light text-center" href="#partTwo">{{
									$t('home.about')
								}}</a>
							</li>
							<li
								class="nav-item border-end col-md-1"
								@click="clickHandler('contact')"
								id="contact"
							>
								<a class="nav-link text-light text-center">
									{{ $t('home.contact') }}</a
								>
							</li>
							<li
								class="nav-item text-light border-end col-md-2"
								@click="clickHandler('login')"
								id="login"
							>
								<a class="nav-link text-light text-center">
									{{ $t('home.login') }}</a
								>
							</li>
							<li
								class="nav-item text-light col-md-2 border-end"
								@click="clickHandler('registerInfo')"
								id="registerInfo"
							>
								<a class="nav-link text-light text-center">
									{{ $t('home.sigin') }}</a
								>
							</li>
							<li class="nav-item text-center fs-5 col-md-3">
								<el-dropdown @command="handleClick">
									<span
										class="el-dropdown-link text-light"
										style="color: #409eff"
									>
										{{ $t('home.lang')
										}}<i class="el-icon-arrow-down el-icon--right"></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item
											v-for="item in list"
											:key="item.abbreviation"
											:command="item.abbreviation"
											>{{ item.lang }}</el-dropdown-item
										>
									</el-dropdown-menu>
								</el-dropdown>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div class="row pt-5"></div>
			<div class="row pt-5"></div>
			<div class="row pt-5"></div>
			<div class="row pt-5"></div>
			<div class="left-content row pt-5">
				<div class="col-md-1"></div>
				<div class="col-md-4 fs-4 text-start"></div>
			</div>
			<div class="left-content row">
				<div class="col-md-1"></div>
				<div class="col-md-5 fs-4 text-start mt-3">
					{{ $t('home.partone1') }}
				</div>
			</div>
			<div class="row pt-5">
				<div class="col-md-2"></div>
				<div class="col-md-5">
					<button
						class="btn btn-lg col-md-4 fs-4 get-started"
						@click="registerHandler"
					>
						{{ $t('home.partone2') }}
					</button>
				</div>
			</div>
		</div>
		<div class="part-two">
			<div id="partTwo"></div>
			<div class="row text-center title">
				<div class="col-md-12">{{ $t('home.parttwo1') }}</div>
			</div>
			<div class="content" style="">
				<div class="row opacity-bg">
					<div class="col-md-4 left-text fs-4 mt-5 text-start">
						<div class="pt-5 mt-5"></div>
						<div class="pt-5 mt-5"></div>
						<div class="lh-lg">
							{{ $t('home.parttwo2') }}
						</div>
					</div>
					<div
						class="
							col-md-8
							card-wrap
							d-flex
							flex-column
							align-items-center
							justify-content-center
							mb-5
						"
					>
						<div class="row col-md-12 mt-5">
							<div class="col-md-2"></div>
							<div class="col-md-4 card1">
								<img
									src="../../assets/images/panel.png"
									alt=""
									width="64px"
									class="mt-2 p-2"
								/>
								<p class="pt-3 text-start fs-4 panel p-2">
									{{ $t('home.parttwo2_panel') }}
								</p>
								<div class="text-start pt-4 lh-lg p-2">
									{{ $t('home.parttwo2_panel_content') }}
								</div>
							</div>
							<div class="col-md-4 ml-5 card2">
								<img
									src="../../assets/images/service.png"
									alt=""
									width="64px"
									class="mt-2 p-2"
								/>
								<p class="pt-3 text-start service fs-4 p-2">
									{{ $t('home.parttwo2_service') }}
								</p>
								<p class="text-start pt-4 lh-lg p-2">
									{{ $t('home.parttwo2_service_content') }}
								</p>
							</div>
						</div>
						<div class="row col-md-12 mt-3">
							<div class="col-md-2"></div>
							<div class="card col-md-4 card3">
								<img
									src="../../assets/images/technology.png"
									alt=""
									width="64px"
									class="mt-2 p-2"
								/>¸
								<p class="pt-3 text-start fs-4 technology p-2">
									{{ $t('home.parttwo2_technology') }}
								</p>
								<p class="text-start pt-4 lh-lg p-2">
									{{ $t('home.parttwo2_technology_content') }}
								</p>
							</div>
							<div class="card col-md-4 ml-5 card4">
								<img
									src="../../assets/images/tools.png"
									alt=""
									width="64px"
									class="mt-2 p-2"
								/>¸
								<p class="pt-3 text-start fs-4 p-2">
									{{ $t('home.parttwo2_tools') }}
								</p>
								<p class="text-start pt-4 lh-lg p-2">
									{{ $t('home.parttwo2_tools_content') }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="part-three">
			<div id="home/partFour"></div>
			<p class="text-center title fs-2">{{ $t('home.partthree_title') }}</p>
			<div class="row">
				<div class="col-md-5">
					<img src="../../assets/images/about-us.jpeg" alt="" />
				</div>
				<div class="col-md-6 ml-5 right">
					<p style="margin-top: 100px"></p>
					<p class="text-start lh-lg pl-5 right">
						{{ $t('home.partthree_content1') }}
					</p>
					<p class="text-start lh-lg right">
						{{ $t('home.partthree_content2') }}
					</p>
					<p class="text-start lh-lg right">
						{{ $t('home.partthree_content3') }}
					</p>
					<p class="text-start lh-lg right">
						{{ $t('home.partthree_content4') }}
					</p>
				</div>
			</div>
		</div>
		<div class="part-four" :style="{ height: availHeight + 'px' }">
			<p class="fs-1 title text-center">All The Latest</p>
			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-md-10 d-flex partfour-desc">
					<div class="col-md-3 card rounded p-2 pb-5 shadow">
						<img
							src="../../assets/images/cardimage1.jpeg"
							class="card-img-top"
							alt="..."
						/>
						<p class="text-start pt-5 pb-5 fs-5">
							{{ $t('home.card1') }}
						</p>
					</div>
					<div
						class="col-md-3 card text-start p-2 pb-5 shadow rounded"
						style="margin-left: 10px"
					>
						<img
							src="../../assets/images/cardimage2.jpeg"
							class="card-img-top"
							alt="..."
						/>
						<p class="text-start pt-5 pb-5 fs-5">
							{{ $t('home.card2') }}
						</p>
					</div>
					<div
						class="col-md-3 card ml-1 text-start p-2 pb-5 shadow rounded"
						style="margin-left: 10px"
					>
						<img
							src="../../assets/images/cardimage3.jpeg"
							class="card-img-top"
							alt="..."
						/>
						<p class="text-start pt-5 pb-5 fs-5">
							{{ $t('home.card3') }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<!--轮播-->
		<div class="part-five pt-5">
			<el-carousel
				indicator-position="outside"
				height="500px"
				class="pt-5"
				style="overflow: hidden"
				type="card"
			>
				<el-carousel-item
					v-for="(item, index) in swiperList"
					:key="index"
					class=""
				>
					<img :src="item.url" alt="" width="100%" height="500px" />
					<div class="swiper-item-wrap"></div>
					<div class="text text-center">{{ item.text }}</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="part-six">
			<div class="text-center fs-5 pt-5">{{ $t('home.partfive') }}</div>
			<p class="fs-1 text-center pt-4">{{ $t('home.partfive2') }}</p>
			<div class="justify-content-center d-flex pt-5 mt-5">
				<div class="col-md-5 d-flex">
					<input
						type="email"
						class="form-control pt-3 pb-3"
						id="exampleFormControlInput1"
						placeholder="Your Email Address"
						v-model="email"
					/>
					<button class="btn subscribe fs-5" @click="subscribe">
						{{ $t('home.subscribe') }}
					</button>
				</div>
			</div>
			<div class="pt-5">
				<div class="row pt-5"></div>
				<div class="row pt-5"></div>
				<div class="row pt-5"></div>
				<div class="row pt-5"></div>
				<div class="row pt-5 bottom-nav pb-5">
					<div class="col-md-1"></div>
					<div class="col-md-5">
						<p class="text-center fs-3">Navigation</p>
						<p class="text-start text-center pt-5">
							<a href="#home" class="text-light fs-6">Services</a>
						</p>
						<p class="text-start text-center pt-3">
							<a href="#home/partFour" class="text-light fs-6">Markets</a>
						</p>
						<p class="text-start text-center pt-3">
							<a href="#partTwo" class="text-light fs-6">About</a>
						</p>
						<p
							class="text-start text-center pt-3 fs-6"
							@click="clickHandler('contact')"
						>
							Contact
						</p>
					</div>
					<div class="col-md-5">
						<p class="fs-3 text-center">Support</p>
						<p class="text-center pt-5 fs-6" @click="clickHandler('terms')">
							Term of Use
						</p>
						<p class="text-center pt-3 fs-6" @click="clickHandler('privacy')">
							Privacy Policy
						</p>
						<p class="text-center pt-3 fs-6">Don't Sell My Info</p>
					</div>
				</div>
			</div>

			<div class="copyright">
				<div
					style="margin: 0 auto; border-bottom: 1px solid white; width: 10rem"
				></div>
				<div class="row pt-5"></div>
				<div class="row pt-5"></div>
				<div class="row pt-5"></div>
				<p class="text-center pb-2">
					Copyright 2021, Quest Mindshare. All Rights Reserved.
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import NavBar from '@c/navbar.vue'
import Navbar from '../../components/navbar.vue'
export default {
	name: 'HomePage',
	components: {
		NavBar: NavBar,
	},

	data() {
		return {
			availHeight: '',
			swiperList: [
				{
					url: require('../../assets/images/swiper1.jpeg'),
					text: this.$t('home.swiper1'),
				},
				{
					url: require('../../assets/images/swiper2.jpeg'),
					text: this.$t('home.swiper2'),
				},
				{
					url: require('../../assets/images/swiper3.jpeg'),
					text: this.$t('home.swiper3'),
				},
			],
			list: [
				{ lang: 'english', abbreviation: 'en' },
				{ lang: '中文', abbreviation: 'zh' },
				{ lang: 'German', abbreviation: 'de' },
			],
			email: '',
		}
	},
	mounted() {
		this.availHeight = window.screen.availHeight
	},
	methods: {
		clickHandler(path) {
			this.$router.push(`/${path}`)
		},
		registerHandler() {
			this.$router.push(`/registerInfo`)
		},
		/**切换语言 */
		handleClick(lang) {
			this.$i18n.locale = lang
		},
		subscribe() {
			this.email = ''
		},
	},
}
</script>
<style scoped lang='less'>
.home-main {
	.container-bg {
		background-image: url('../../assets/images/bgImage.png');
		width: 100vw;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		.logo {
			font-family: @fontFamily;
			text-shadow: 2px 2px;
			color: @logoColor;
			font-style: oblique;
		}
		#navbarNav {
			background-color: #156c6b;
			#service {
				background-color: #fea000;
			}
			ul {
				height: 60px;
				line-height: 60px;
				li {
					a {
						font-size: 20px;
						font-family: @fontFamily;
					}
				}
			}
		}
		#markets :hover {
			background-color: #fea000;
		}
		#about :hover {
			background-color: #fea000;
		}
		#contact :hover {
			background-color: #fea000;
		}
		#login :hover {
			background-color: #fea000;
		}
		#registerInfo :hover {
			background-color: #fea000;
		}
		.left-content {
			color: #267876;
			font-family: @fontFamily;
		}
		.get-started {
			background-color: #fea000;
			color: #267876;
		}
	}
	.part-two {
		.title {
			padding: 120px 0px 120px 0px;
			color: @color;
			font-family: @fontFamily;
			font-size: 30px;
		}
		.content {
			background-image: url('../../assets/images/part-three.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			height: auto;
			.left-text {
				padding: 10% 0px 0px 40px !important;
				color: #003a38;
				font-family: @fontFamily;
			}
			.opacity-bg {
				width: 100vw;
				height: 100%;
				text-align: center;
				background-color: rgba(rgb(0, 132, 255), 0.4);
				color: #003a38;
				font-family: @fontFamily;
				.card-wrap {
					.card1 {
						height: 23rem;
						background-color: rgba(252, 231, 196, 0.9);
						color: #003937;
						.panel {
							color: #003937;
						}
					}
					.card2 {
						height: 23rem;
						margin-left: 10px;
						background-color: rgba(255, 255, 255, 0.9);
						.service {
							color: #003937;
						}
					}
					.card3 {
						height: 23rem;
						margin-left: 10px;
						background-color: rgba(255, 255, 255, 0.9);
						.technology {
							color: #003937;
						}
					}
					.card4 {
						height: 23rem;
						margin-left: 10px;
						background-color: rgba(252, 231, 196, 0.9);
						color: #003937;
					}
				}
			}
		}
	}
	.part-three {
		width: 100vw;
		height: auto;
		background-color: #fff;
		.title {
			padding: 100px 0px 70px 0px;
			color: @partThreeTitleColor;
			font-family: @fontFamily;
			background-blend-mode: multiply;
		}
		.right {
			padding-left: 100px;
			padding-top: 20px;
			font-family: @fontFamily;
			font-size: 20px;
			color: #fea000;
		}
	}
	.part-four {
		width: 100vw;
		height: auto;
		background-color: #fff;
		.title {
			padding: 200px 0px 100px 0px;
			font-family: @fontFamily;
			color: @color;
		}
		.partfour-desc {
			color: #184780;
			font-family: @fontFamily;
		}
	}
	.part-five {
		width: 100vw;
		height: auto;
		background-color: #fff;
		.title {
			padding: 100px 0px;
		}
		.swiper-item-wrap {
			// width: 832px;
			// height: 500px;
			// position: absolute;
			// background-color: rgba(rgb(240, 15, 15), 0.7);
			// mix-blend-mode: multiply; //混合颜色
			border-radius: 10px;
			color: #fff;
			// top: 0;
		}
		.text {
			color: #fff;
			position: absolute;
			top: 0;
			text-align: center;
			padding: 200px 0px 0px 80px;
			font-size: 30px;
			width: 700px;
			flex-wrap: wrap;
		}
		.el-carousel__item h3 {
			color: #475669;
			font-size: 18px;
			opacity: 0.75;
			line-height: 300px;
			margin: 0;
		}
	}
	.part-six {
		width: 100vw;
		height: auto;
		background-color: #fff;
		padding-top: 8rem;
		font-family: @fontFamily;
		.title {
			padding: 100px 0px;
			font-family: @fontFamily;
		}
		.bottom-nav {
			font-family: @fontFamily;
			background-color: #333333;
			color: #fff;
		}
		.copyright {
			width: 100vw;
			background-color: #333333;
			color: #fff;
		}
		.subscribe {
			background-color: #fe7d00;
			color: #fff;
			width: 200px;
			margin-left: 10px;
		}
	}
}
</style>