<template>
        <div class="container overview">
            <div class="card main-card">
                <section class="food-cards-overview">

                    <p v-if="isGetUserAccountsQueryLoading">Loading...</p>

                    <div v-else>
                        <div class="row">
                            
                            <div v-for="userAccount in userAccounts" :key="userAccount.id" class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                                <WalletCard :id="userAccount.id" :name="userAccount.name" :amount="userAccount.amount" :share="userAccount.share "/>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>   
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";


import { GetUserAccountsQuery , GetAdminAccountQuery} from "@/graphql/userAccountQuerries"
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

<style lang="scss">
.container {
    max-width: 100%;
}

.main-card {
    padding: 2em 1em 1em 1em;
    transition: margin-left .5s;
    border: none;
}

.wallet-card{
    margin-bottom: 25px;
}

</style> 