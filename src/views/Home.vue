<template>
<div></div>
	<!-- <div class="wrapper">
		<div class=" container">
			<p v-if="isGetUserAccountsQueryLoading">Loading...</p>
		
			<div v-else v-for="userAccount in userAccounts" :key="userAccount.id">
				<WalletCard :id="userAccount.id" :name="userAccount.name" :amount="userAccount.amount" :share="userAccount.share "/>
			</div>
		</div>
	</div> -->

</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";


import { GetUserAccountsQuery } from "@/graphql/userAccountQuerries"
import { useQuery, useResult } from "@vue/apollo-composable";

import WalletCard from "@/components/WalletCard.vue"; 

@Options({
  components: {
		WalletCard
	},
})

export default class OverviewUsers extends Vue{
    
	resultGetUserAccountsQuery = useQuery(GetUserAccountsQuery)

	isGetUserAccountsQueryLoading = this.resultGetUserAccountsQuery.loading

	userAccounts = useResult(this.resultGetUserAccountsQuery.result, null, data => data.userAccounts)

}
</script>

<style scoped lang="scss">

.wrapper{
	padding: 100px 50px 25px 50px;
}

.container{
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	justify-content: space-around;
	gap: 3rem;
	
}

</style> 