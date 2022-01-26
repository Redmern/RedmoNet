<template>
	<div class="container overview">
		<div class="card main-card">
			<section class="food-cards-overview">
				<div class="row">

					<p v-if="$apollo.queries.userAccounts.loading">Loading...</p> 
					<div v-for="userAccount in userAccounts" :key="userAccount.id" class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
						<WalletCard :name="userAccount.name" :amount="userAccount.amount" :share="userAccount.share"/>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script lang="ts">

import WalletCard from "@/components/WalletCard.vue"; 
import {mapState} from 'vuex'
import { GetUserAccountsQuery } from "./graphql/userAccountQuerries"
import { useQuery, useResult,  } from "@vue/apollo-composable";


export default  {
    components: {
    WalletCard,
  },
  computed:{
		...mapState(['menubarWidth']),
		...mapState(['collapsed']),

		decreaseWidth() {
			return 'calc(100% - '+ this.menubarWidth +')';
		}

	},

	data() {
		return {
			userAccounts: {},
			error: false,
		};
	},

	apollo: {
		userAccounts:{
			query: GetUserAccountsQuery,
			// mutation: AddUserAccountMutation,

			error() {
				this.error = true;
			}
		}
	}  
}

</script>

<style scoped lang="scss">

@import './src/style/main.scss';

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