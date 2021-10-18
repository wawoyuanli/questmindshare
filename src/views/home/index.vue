<template>
	<div class="home-main">
		<div id="home"></div>
		<div class="container-bg" :style="{ height: availHeight + 'px' }">
			<div class="nav">
				<div
					class="row col-md-12 d-flex justify-content-center align-items-center"
				>
					<div class="col-md-2 text-center fs-1 logo px-3">questmindshare</div>
					<div class="col-md-9 d-flex">
						<div class="col-md-2"></div>
						<div class="d-flex header-nav-bg col-md-10">
							<div class="col-md-2 text-center border-end" id="services">
								<a href="#home" class="text-light">Services</a>
							</div>
							<div class="col-md-2 text-center border-end">
								<a href="#home/partFour" class="text-light">Markets</a>
							</div>
							<div class="col-md-2 text-center border-end">
								<a href="#partTwo" class="text-light">About</a>
							</div>
							<div
								class="col-md-2 text-center border-end"
								@click="clickHandler('contact')"
							>
								Contact
							</div>
							<div class="col-md-2 text-center border-end" @click="clickHandler('login')">
								<a href="#partTwo" class="text-light">Login</a>
							</div>
							<div class="col-md-2 text-center border-end" @click="clickHandler('registerInfo')">
								<a href="#partTwo" class="text-light">sigin in</a>
							</div>
						</div>
					</div>
					<div class="col-md-1 px-3">
						<el-dropdown @command="handleClick">
							<span class="el-dropdown-link" style="color: #409eff">
								更换语言<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<!-- <el-button type="primary">
								更换语言<i class="el-icon-arrow-down el-icon--right"></i>
							</el-button> -->
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item
									v-for="item in list"
									:key="item.abbreviation"
									:command="item.abbreviation"
									>{{ item.lang }}</el-dropdown-item
								>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</div>
			</div>

			<div class="row pt-5"></div>
			<div class="row pt-5"></div>
			<div class="row pt-5"></div>
			<div class="row pt-5"></div>
			<div class="left-content row pt-5">
				<div class="col-md-1"></div>
				<div class="col-md-4 fs-4 text-start">
					随时随地的提取您需要的精确见解
				</div>
			</div>
			<div class="left-content row">
				<div class="col-md-1"></div>
				<div class="col-md-5 fs-4 text-start mt-3">
					行业领先的数据收集服务和技术，可满足您的需求。
				</div>
			</div>
			<div class="row pt-5">
				<div class="col-md-2"></div>
				<div class="col-md-5">
					<button
						class="btn btn-lg col-md-4 fs-4 get-started"
						@click="registerHandler"
					>
						Get Started Now
					</button>
				</div>
			</div>
		</div>
		<div class="part-two">
			<div id="partTwo"></div>
			<div class="row text-center title">
				<div class="col-md-12">与业界最优秀的人合作，取得卓越的成就</div>
			</div>
			<div class="content" style="">
				<div class="row opacity-bg">
					<div class="col-md-4 left-text fs-4 mt-5 text-start">
						<div class="pt-5 mt-5"></div>
						<div class="pt-5 mt-5"></div>
						<div class="lh-lg">
							构建可信的数据模型， 利用我们的全球小组，
							与您需要的确切受访者一起为您的研究提供支持，是消费者和企业的首选。
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
								<p class="pt-3 text-start fs-4 panel p-2">控制版</p>
								<div class="text-start pt-4 lh-lg p-2">
									从行业到非政府组织，从消费者音乐听众到企业 C 级执行官，
									Quest的数百万人参与的小组提供了高质量的数据集。
								</div>
							</div>
							<div class="col-md-4 ml-5 card2">
								<img
									src="../../assets/images/service.png"
									alt=""
									width="64px"
									class="mt-2 p-2"
								/>
								<p class="pt-3 text-start service fs-4 p-2">服务</p>
								<p class="text-start pt-4 lh-lg p-2">
									给你最好的服务。Quest
									的服务水平，无论是项目管理、编程还是咨询，都专门满足您的需求。
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
								<p class="pt-3 text-start fs-4 technology p-2">技术</p>
								<p class="text-start pt-4 lh-lg p-2">
									自由团队与建设并与高级团队合作，提供优质的编码和托管服务。
								</p>
							</div>
							<div class="card col-md-4 ml-5 card4">
								<img
									src="../../assets/images/tools.png"
									alt=""
									width="64px"
									class="mt-2 p-2"
								/>¸
								<p class="pt-3 text-start fs-4 p-2">工具</p>
								<p class="text-start pt-4 lh-lg p-2">
									各种自研的工具，满足你的需求。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="part-three">
			<div id="home/partFour"></div>
			<p class="text-center title fs-2">认识我们的全球观众</p>
			<div class="row">
				<div class="col-md-5">
					<img src="../../assets/images/about-us.jpeg" alt="" />
				</div>
				<div class="col-md-6 ml-5 right">
					<p style="margin-top: 100px"></p>
					<p class="text-start lh-lg pl-5 right">
						Quest
						是每个主要市场的标准供应商。在全球35个国家/地区拥有无与伦比的小组成员，具有独特的优势，可以满足任何专家组需求。
					</p>
					<p class="text-start lh-lg right">
						无与伦比的可行性和定价与行业响应率
					</p>
					<p class="text-start lh-lg right">超过20家子供应商</p>
					<p class="text-start lh-lg right">
						全球超过400000名直接或间接小组成员
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
							What does customer service mean to researcher clients?
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
							Market Research Panels – from a Panelist POV
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
							WIRE: Reflection, Resilience and Elevation – Webinar Recap
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
			<div class="text-center fs-5 pt-5">Subscribe to newsletter</div>
			<p class="fs-1 text-center pt-4">Get Updated With Us</p>
			<div class="justify-content-center d-flex pt-5 mt-5">
				<div class="col-md-5 d-flex">
					<input
						type="email"
						class="form-control pt-3 pb-3"
						id="exampleFormControlInput1"
						placeholder="Your Email Address"
					/>
					<button class="btn subscribe fs-5">Subscribe</button>
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
					text: 'Need a customized sample strategy for your annual tracker?',
				},
				{
					url: require('../../assets/images/swiper2.jpeg'),
					text: 'The partner that becomes an extension of your team.',
				},
				{
					url: require('../../assets/images/swiper3.jpeg'),
					text: 'Leverage a proprietary panel of consumers for any quantitative research study',
				},
			],
			list: [
				{ lang: 'english', abbreviation: 'en' },
				{ lang: '中文', abbreviation: 'zh' },
				{ lang: 'German', abbreviation: 'de' },
			],
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
		handleClick(lang) {
			this.$store.commit('changeLanguage', {
				lang: lang,
			})
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
		.nav {
			width: 100%;
			height: auto;
			padding: 20px 0px;
			.header-nav-bg {
				background-color: #156c6b;
				color: #fff;
				height: 60px;
				line-height: 60px;
				font-size: 20px;
				font-family: @fontFamily;
			}
			#services {
				background-color: #fea000;
				// border-top-left-radius: 20px;
				// border-bottom-left-radius: 20px;
			}
			.header-nav-bg :hover {
				background-color: #fea000;
			}
			.logo {
				font-family: @fontFamily;
				text-shadow: 2px 2px;
				color: @logoColor;
				font-style: oblique;
			}
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