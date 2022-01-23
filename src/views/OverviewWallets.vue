<template>
	<div class="container overview">
		<div class="card main-card">
			<section class="food-cards-overview">
				<div class="row">
					
				

				</div>
			</section>
		</div>
	</div>
</template>

<script lang="ts">

import gql from "graphql-tag"

export default{
	
}
</script>

<style lang="scss">

.container {
	max-width: 100%;
}

.main-card {
	// margin-top: 1%;
	margin-right: 1%;
	margin-left: 1%;
	min-height: 95vh;
	padding: 3em 3em 3em 3em;
	background: -webkit-linear-gradient(90deg, var(--background-bg), var(--background-bg2));
	background: linear-gradient(90deg, var(--background-bg), var(--background-bg2));
	transition: margin-left .5s;
	transition: width .5s;
	border: none;
}

.wallet-card{
	margin-bottom: 25px;
}

</style> 