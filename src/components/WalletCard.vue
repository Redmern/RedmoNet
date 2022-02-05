<template>
	<div v-if="loading">
			Loading...
	</div>

	<div v-else class="wallet-container">
		<div class="wallet-content">

			<div class="header" >
				<p>{{name}}</p>
			</div>

			<div class="funds-left">
				<p class="title">Funds </p>
			</div>

			<div class="funds-right">
				<p>${{amount}}</p>
			</div>

			<div class="share-left">
				<p class="card-text">Share </p>
			</div>

			<div class="share-right">
				<p>{{share}}%</p>
			</div>
			
			<div class="deposit">
				<a class="btn btn-primary btn-deposit" @click="Deposit(id)"><i class="fas fa-plus" /></a>
			</div>
			<div class="withdraw">
				<a class="btn btn-primary btn-withdraw" @click="Withdraw(id, amount)"><i class="fas fa-minus"/>	</a>
			</div>

		</div>
	</div>	
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import { useMutation } from '@vue/apollo-composable'
import { AddFundsToUserAccountMutation} from '@/graphql/userAccountMutations'

@Options({
  props: {
    name: String, 
    amount: Number,
    share: Number,
    id: String
  },
})

export default class WalletCard extends Vue {

  	Amount = ""

	userAccountFunds = null

	loading = null

	error = null

  Deposit(id: string){
	
    const fundsToAdd = parseFloat(this.Amount)

    this.userAccountFunds = useMutation(AddFundsToUserAccountMutation, { variables: {id: id, amount: fundsToAdd}, refetchQueries:["userAccounts"] })

	this.loading = this.userAccountFunds.loading
	this.error = this.userAccountFunds.error

	this.userAccountFunds.mutate()

	this.Amount = ""
  }

  Withdraw(id: string, amount: string){

    let fundsToAdd = -parseFloat(this.Amount)

	let userFunds = parseFloat(amount)

	let newFunds = parseFloat(amount) + fundsToAdd


	if((userFunds + fundsToAdd) < 0){
		console.log("Not enough funds:" + newFunds );
		return
	}

	else{
		console.log("Funds to add: " + fundsToAdd);
		console.log("New amount: " + newFunds);
		this.userAccountFunds = useMutation(AddFundsToUserAccountMutation, {variables: {id: id, amount: fundsToAdd}, refetchQueries:["userAccounts"] })

	}
    
	this.loading = this.userAccountFunds.loading
	this.error = this.userAccountFunds.error

	this.userAccountFunds.mutate()

	this.Amount = ""
  }

}
</script>

<style scoped lang="scss">

@import './src/style/main.scss';

.wallet-container{
	border-radius: 0.75rem;
	background: -webkit-linear-gradient(75deg, var(--walletcard-bg), var(--walletcard-bg2));
	background: linear-gradient(75deg, var(--walletcard-bg), var(--walletcard-bg2));

	.wallet-content{

		max-height: 275px;
		// margin-top: 15px;
		// margin-bottom: 15px;
		background: inherit;
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto 13% 13% 35%;
		gap: 5%;
		align-items: baseline;
    	// justify-items: center;
		justify-content: space-evenly;
		grid-template-areas: 
				" header header"
				" funds-left funds-right"
				" share-left share-right"
				" footer-left footer-right"
		;

		.header{
			margin-top: 15px;
			grid-area: header;
			border-bottom: 1px white;
			display: flex;
    		justify-content: center;
			border-bottom: 1px solid whitesmoke;

			p{
				padding-left: 5px;
				font-family: Rooster;
				font-size: 2.3rem;
				font-weight: 400;
				margin-bottom: 5px;
			}
		}

		.funds-left{
			grid-area: funds-left;
			padding-top: 30px;

			p{
				padding-left: 5px;
				font-family: Rooster;
				font-size: 1.75rem;
				font-weight: 400;
			}
		}
		.funds-right{
			
			grid-area: funds-right;
		}
		
		.share-left{
			grid-area: share-left;
			padding-top: 15px;
			p{
				padding-left: 5px;
				font-family: Rooster;
				font-size: 1.75rem;
				font-weight: 400;
			}
		}
		.share-right{
			grid-area: share-right;
		}

		.deposit{
			grid-area: footer-left;
			border-radius: 0.75rem;
			padding-top: 30px ;
		}
		.withdraw{
			grid-area: footer-right;
			border-radius: 0.75rem;
		}


	}

	.btn {
		box-shadow: 0.07rem 0.075rem 0.1rem 0.1rem rgba(0, 0, 0, 0.15) !important;
		width: 50px;
		transition: box-shadow .3s;
		border-radius: .75rem;
		background: -webkit-linear-gradient(75deg, var(--walletcard-btn), var(--walletcard-btn2));
		border: none;

		@include hover-focus {
			box-shadow: 0.07rem 0.075rem 0.3rem 0.1rem rgba(0, 0, 0, 0.25) !important;
			background: -webkit-linear-gradient(75deg, var(--walletcard-btn-hover), var(--walletcard-btn-hover2));
			svg {
				opacity: 1;
			}
		}
	}
}



</style>
