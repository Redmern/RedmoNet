<template>
	<div class="card">
		
		<div class="card-header">
			<h5>{{name}}</h5>
		</div>
		<div v-if="loading">Loading...</div>
		<div class="card-body">

			<p class="card-title">Funds: ${{amount}}</p>
			<p class="card-text">Share: {{share}}%</p>
			<!-- <input inputmode="numeric" v-model="Amount" placeholder="Enter amount" /> -->

			<div v-if="name == `Admin` "> 
				<a class="btn btn-primary btn-admin" @click="Deposit(id)">Update Total</a>
			</div>

			<div v-else> 
				<a class="btn btn-primary" @click="Deposit(id)">Deposit</a>

				<a class="btn btn-secondary" @click="Withdraw(id, amount)">Withdraw</a>
			</div>

		</div>

	</div>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import { useMutation } from '@vue/apollo-composable'
import { AddFundsToUserAccountMutation} from './graphql/userAccountMutations'

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

h5,p{
    color: #FFFFFF;
    transition: .2s ease-in-out;
	margin-top: 10px;
}

p{
	margin-top: 0px;
}

.card {
    padding: 3px 10px 0 10px;
    text-align: center;
    background: -webkit-linear-gradient(75deg, var(--walletcard-bg), var(--walletcard-bg2));
    background: linear-gradient(75deg, var(--walletcard-bg), var(--walletcard-bg2));
    border: 0;
    border-radius: 0.35rem;
    transition: box-shadow .2s;

    @include shadow (var(--item-shadow), var(--item-shadow-hover));

    .card-header {
        border: 0;
        padding: 0;
        background: none;
        margin-top: 10px;
    }

    .card-body {
        padding: 0.45rem 0;
    }
}

.btn {
    margin-top: 10px;
    box-shadow: 0.07rem 0.075rem 0.1rem 0.1rem rgba(0, 0, 0, 0.15) !important;
    transition: box-shadow .3s;
    margin-bottom: 5px;
    width: 85%;
    background: -webkit-linear-gradient(75deg, var(--walletcard-btn), var(--walletcard-btn2));
    border: none;

    @include hover-focus {
        box-shadow: 0.07rem 0.075rem 0.3rem 0.1rem rgba(0, 0, 0, 0.25) !important;
        background: -webkit-linear-gradient(75deg, var(--walletcard-btn-hover), var(--walletcard-btn-hover2));
        svg {
            opacity: 1;
        }
    }

    svg {
        opacity: 0.7;
        font-size: 1rem;
        float: right;
    }
}

.btn-secondary{
	margin-bottom: 15px;
}
</style>
