<template>
	<div class="home-main">
		<div class="container-bg">
			<div class="nav">
				<div class="row col-md-12">
					<div class="col-md-3 text-center fs-2 logo">questmindshare</div>
					<div class="col-md-9 d-flex">
						<div class="col-md-2"></div>
						<div class="d-flex header-nav-bg col-md-10">
							<div class="col-md-3 text-center border-end">Services</div>
							<div class="col-md-3 text-center border-end">Markets</div>
							<div class="col-md-3 text-center border-end">About</div>
							<div
								class="col-md-3 text-center"
								@click="clickHandler('contact')"
							>
								Contact
							</div>
						</div>
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
				<div class="col-md-5 fs-4 text-start">
					行业领先的数据收集服务和技术，可满足您的需求。
				</div>
			</div>
			<div class="row pt-5">
				<div class="col-md-2"></div>
				<div class="col-md-5">
					<button
						class="btn btn-lg"
						style="background-color: #fea000; color: #267876"
					>
						Get Started Now
					</button>
				</div>
			</div>
		</div>
		<div class="part-two">
			<div class="row text-center title">
				<div class="col-md-12 fs-1">与业界最优秀的人合作，取得卓越的成就</div>
			</div>
			<div class="content" style="">
				<div class="row opacity-bg">
					<div class="col-md-4 left-text fs-4 mt-5 text-start">
						<div class="pt-5 mt-5"></div>
						<div class="pt-5 mt-5"></div>
						<div>
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
									class="mt-2"
								/>
								<p class="pt-3 text-start fs-4 panel">控制版</p>
								<div class="text-start pt-5 lh-lg">
									从行业到非政府组织，从消费者音乐听众到企业 C 级执行官，
									Quest的数百万人参与的小组提供了高质量的数据集。
								</div>
							</div>
							<div class="col-md-4 ml-5 card2">
								<img
									src="../../assets/images/service.png"
									alt=""
									width="64px"
									class="mt-2"
								/>
								<p class="pt-3 text-start service fs-4">服务</p>
								<p class="text-start pt-5 lh-lg">
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
									class="mt-2"
								/>¸
								<p class="pt-3 text-start fs-4 technology">技术</p>
								<p class="text-start pt-5 lh-lg">
									自由团队与建设并与高级团队合作，提供优质的编码和托管服务。
								</p>
							</div>
							<div class="card col-md-4 ml-5 card4">
								<img
									src="../../assets/images/tools.png"
									alt=""
									width="64px"
									class="mt-2"
								/>¸
								<p class="pt-3 text-start fs-4">工具</p>
								<p class="text-start pt-5 lh-lg">
									各种自研的工具，满足你的需求。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="part-three">
			<p class="text-center title fs-2">认识我们的全球观众</p>
			<div class="row">
				<div class="col-md-5">
					<img src="../../assets/images/about-us.jpeg" alt="">
				</div>
				<div class="col-md-6 ml-5 right">
					<p class="text-start lh-lg pl-4 right">
						Quest
						是每个主要市场的标准供应商。在全球35个国家/地区拥有无与伦比的小组成员，具有独特的优势，可以满足任何专家组需求。
					</p>
					<p class="text-start lh-lg right">无与伦比的可行性和定价与行业响应率</p>
					<p class="text-start lh-lg right">超过20家子供应商</p>
					<p class="text-start lh-lg right">全球超过400000名直接或间接小组成员</p>
				</div>
			</div>
		</div>
		<div class="part-four">
			<p class="fs-1 title text-center">All The Latest</p>
			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-md-10 d-flex">
					<div class="col-md-3 card rounded p-2 shadow">
						<img
							src="../../assets/images/cardimage1.jpeg"
							class="card-img-top"
							alt="..."
						/>
						<p class="text-start pt-5 pb-5">
							What does customer service mean to researcher clients?
						</p>
					</div>
					<div
						class="col-md-3 card text-start p-2 shadow rounded"
						style="margin-left: 10px"
					>
						<img
							src="../../assets/images/cardimage2.jpeg"
							class="card-img-top"
							alt="..."
						/>
						<p class="text-start pt-5 pb-5">
							Market Research Panels – from a Panelist POV
						</p>
					</div>
					<div
						class="col-md-3 card ml-1 text-start p-2 shadow rounded"
						style="margin-left: 10px"
					>
						<img
							src="../../assets/images/cardimage3.jpeg"
							class="card-img-top"
							alt="..."
						/>
						<p class="text-start pt-5 pb-5">
							WIRE: Reflection, Resilience and Elevation – Webinar Recap
						</p>
					</div>
				</div>
			</div>
		</div>
		<!--轮播-->
		<div class="part-five">
			<p class="text-center">轮播图</p>
		</div>
		<div class="part-six">
			<div class="text-center">Subscribe to newsletter</div>
			<p class="fs-1 text-center">Get Updated With Us</p>
			<div class="justify-content-center d-flex pt-5">
				<div class="col-md-4 d-flex">
					<input
						type="email"
						class="form-control pt-3 pb-3"
						id="exampleFormControlInput1"
						placeholder="Your Email Address"
					/>
					<button class="btn btn-primary">Subscribe</button>
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
						<p class="text-start text-center pt-5">Services</p>
						<p class="text-start text-center pt-3">Markets</p>
						<p class="text-start text-center pt-3">About</p>
						<p
							class="text-start text-center pt-3"
							@click="clickHandler('contact')"
						>
							Contact
						</p>
					</div>
					<div class="col-md-5">
						<p class="fs-3 text-center">Support</p>
						<p class="text-center pt-5" @click="clickHandler('terms')">
							Term of Use
						</p>
						<p class="text-center pt-3" @click="clickHandler('privacy')">
							Privacy Policy
						</p>
						<p class="text-center pt-3">Don't Sell My Info</p>
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
export default {
	name: 'HomePage',
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
.home-main {
	.container-bg {
		background-image: url('../../assets/images/bgImage.png');
		height: 100vh;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		.nav {
			width: 100%;
			height: auto;
			padding: 20px 0px;
			.header-nav-bg {
				background-color: #156c6b;
				color: #fff;
				padding: 20px 0px;
			}
			.logo {
				color: #003a38;
				font-family: 'Times New Roman', Times, serif;
			}
		}
	}
	.part-two {
		.title {
			padding: 100px 0px;
			color: #003a38;
		}
		font-family: 'Times New Roman', Times, serif;
		.content {
			background-image: url('../../assets/images/part-three.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			height: auto;
			.left-text {
				padding: 10% 0px 0px 40px !important;
				color: #003a38;
				font-family: 'Courier New', Courier, monospace;
			}
			.opacity-bg {
				width: 100vw;
				height: 100%;
				text-align: center;
				background-color: rgba(rgb(0, 132, 255), 0.4);
				color: #003a38;
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
			padding: 100px  0px 70px 0px;
		}
		.right{
			padding-left: 50px;
			padding-top: 20px;
		}
	}
	.part-four {
		width: 100vw;
		height: auto;
		.title {
			padding: 100px 0px;
			font-family:  "Montserrat", sans-serif;
		}
	}
	.part-five {
		width: 100vw;
		height: 100vh;
		.title {
			padding: 100px 0px;
		}
	}
	.part-six {
		width: 100vw;
		height: 100vh;
		.title {
			padding: 100px 0px;
		}
		.bottom-nav {
			background-color: #003e3c;
			color: #fff;
		}
		.copyright {
			width: 100vw;
			background-color: #003e3c;
			color: #fff;
		}
	}
}
</style>