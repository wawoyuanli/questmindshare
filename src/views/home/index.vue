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
							<div class="col-md-3 text-center">Contact</div>
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
			<div class="content">
				<div class="row">
					<div class="col-md-5 left fs-4 ">
						构建可信的数据模型， 利用我们的全球小组，
						与您需要的确切受访者一起为您的研究提供支持，是消费者和企业的首选。
					</div>
					<div class="col-md-7">
            <div class="card col-md-5">1</div>
            <div class="card col-md-5">1</div>
          </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'HomePage',
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
      .logo{
        color: #003a38;
     		font-family: 'Times New Roman', Times, serif;
      }
		}
	}
	.part-two {
		.title {
			padding: 100px 0px;
			// text-shadow: 6px 6px 5px #002fff;
			color: #003a38;
		}
		font-family: 'Times New Roman', Times, serif;
		.content {
			background-color: #e5e1c9;
			opacity: 0.9;
			height: 90vh;
      .left{
        padding: 200px 30px !important;
      }
		}
	}
}
</style>