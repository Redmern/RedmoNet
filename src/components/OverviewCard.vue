<template>
	<div class="container overview">
		<div class="card main-card">
			<section class="food-cards-overview">
				<div class="row">

					<p v-if="$apollo.queries.users.loading">Loading...</p> 
					<div v-for="user in users" :key="user.id" class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
						<WalletCard :name="user.name" :amount="user.amount" :share="user.share"/>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script lang="ts">

import WalletCard from "@/components/WalletCard.vue"; 
import {mapState} from 'vuex'
import gql from "graphql-tag"

const GetUsersQuery = gql`
  query Users {
    users {
      id
      name
      amount
      share
    }
  }
`


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
			users: {},
			error: false,
		};
	},

	apollo: {
		users:{
			query: GetUsersQuery,
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