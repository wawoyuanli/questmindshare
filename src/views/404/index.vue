<template>
	<div class="page_404">
		<img src="../../assets/images/404.png" alt="" width="246px" />
		<p>404 Not Found</p>
	</div>
</template>
<script>
export default {
	name: '404',
}
</script>
<style scoped lang='less'>
.page_404 {
	min-height: 100vh;
	background: #fff;
	img {
		padding-top: 18rem;
		display: block;
		margin: 0 auto;
	}
	p {
		text-align: center;
		padding-top: 3rem;
		font-size: 30px;
		font-family: @fontFamily;
        color: rgb(220, 220, 235);
	}
}
</style>