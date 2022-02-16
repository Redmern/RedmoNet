<template>
	<div v-if="loading">
			Loading...
	</div>

	<div v-else class="wallet-container" :ref="Id">
		<div class="wallet-content">
			
				<div class= "" > </div>

			<!-- <div class="front">
				<div class="header" >
					<p>{{name}}</p>
				</div>
	
				<div class="funds-left">
					<p class="title">Funds :</p>
				</div>
	
				<div class="funds-right">
					<p class="title">$ {{amount}}</p>
				</div>
	
				<div class="share-left">
					<p class="title">Share :</p>
				</div>
	
				<div class="share-right">
					<p class="title">{{share}} %</p>
				</div>
				
	
				<div class="deposit">
					<a class="btn btn-primary btn-deposit" @click="ShowFundsCard(id)">Funds</a>
				</div>
				<div class="withdraw">
					<a class="btn btn-primary btn-withdraw" @click="Withdraw(id, amount)">Edit</a>
				</div>
			</div>
			
			<div class="back"> 
				<div class="header" >
					<p>{{name}}</p>
				</div>
			</div> -->

			<div class="front">
				<div class="header">Voor</div>
				
			</div>
			<div class="back">
				<div class="header">Achter</div>
			</div>


		</div>
	</div>	

	


</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import { useMutation } from '@vue/apollo-composable'
import { AddFundsToUserAccountMutation} from '@/graphql/userAccountMutations'

import gsap from "gsap"
import gsapCSS from "gsap/CSSPlugin"; 

@Options({
	props: {
		name: String, 
		amount: Number,
		share: Number,
		id: String,
	},
	mounted () {
		this.Id = this.id
		// gsap.set('.back', {rotationY:-180})
		// gsap.set(".wallet-container", {transformStyle: "preserve-3d",transformPerspective: 1000});
		// gsap.set(".wallet-content", {transformStyle: "preserve-3d",transformOrigin: "50% 50%"});

		// this.fundsFirst = true
		// this.tlFunds = gsap.timeline({ defaults:{ duration: .6, ease: "none" }})
	},
	methods: {
		ShowFundsCard(id){

			const walletContainer = this.$refs[id]

			console.log(walletContainer);
			

			// if (this.fundsFirst) {
			// 	this.tlFunds
			// 		.to(walletContainer, {rotationY:-180})

			// 	this.fundsFirst = false
			// 	 return
			// }

			// this.tlFunds.reversed() ? this.tlFunds.play() : this.tlFunds.reverse();
		}
	}
})

export default class WalletCard extends Vue {

	Id = null

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

	// perspective: 1000px;

	max-height: 275px;
	min-height: 275px;
	max-width: 275px;
	min-width: 100px;

	@include hover-focus {
		.header::after {
			content: '';
			border-bottom: 1px solid var(--menubar-item-hover);
			width: 100%;
		}
		
		.wallet-content {
			transform: rotateY(.5turn);
		}
	}

	

	.wallet-content {
		transform-style: preserve-3d;
		position: relative;
		place-items: center;
		transition: transform 1s;



		.front, .back{
			// position: absolute;
			backface-visibility: hidden;
			height: 275px;
			width: 275px;
			

			.header{
				transform: translateZ(500px);
			}
		}

		.front{
			background: blueviolet;
			color: white;
		}
		.back{
			background: blue;
			color: white;
		}
	}


	// .wallet-content{
	// 	transform-style: preserve-3d;
	// 	position: relative;

	// 	.front .back{
	// 		position: absolute;
	// 		backface-visibility: hidden;
	// 	}

	// 	.back{
	// 		max-height: 275px;
	// 		background: inherit;

	// 		display: grid;
	// 		grid-template-columns: auto auto;
	// 		grid-template-rows: auto 13% 13% 35%;
	// 		gap: 5%;
	// 		align-items: baseline;
	// 		justify-content: space-evenly;

	// 		grid-template-areas: 
	// 				" header header"
	// 				" funds-left funds-right"
	// 				" share-left share-right"
	// 				" footer-left footer-right"
	// 		;

	// 		.header{
	// 			margin-top: 25px;
	// 			grid-area: header;
	// 			border-bottom: 1px white;
	// 			display: flex;
	// 			flex-direction: column;
	// 			align-items: center;
	// 			border-bottom: 1px solid #5c5b509a;
				
	// 			p{
	// 				font-size: 2rem;
	// 				font-weight: 400;
	// 				margin-bottom: 5px;
	// 			}
	// 		}
	// 	}

	// 	.front{
	// 		max-height: 275px;
	// 		background: inherit;

	// 		display: grid;
	// 		grid-template-columns: auto auto;
	// 		grid-template-rows: auto 13% 13% 35%;
	// 		gap: 5%;
	// 		align-items: baseline;
	// 		justify-content: space-evenly;

	// 		grid-template-areas: 
	// 				" header header"
	// 				" funds-left funds-right"
	// 				" share-left share-right"
	// 				" footer-left footer-right"
	// 		;

	// 		.header{
	// 			margin-top: 25px;
	// 			grid-area: header;
	// 			border-bottom: 1px white;
	// 			display: flex;
	// 			flex-direction: column;
	// 			align-items: center;
	// 			border-bottom: 1px solid #5c5b509a;
				
	// 			p{
	// 				font-size: 2rem;
	// 				font-weight: 400;
	// 				margin-bottom: 5px;
	// 			}
	// 		}

	// 		.title{
	// 			font-size: 1.5rem;
	// 			font-weight: 400;
	// 		}

	// 		.funds-left{
	// 			grid-area: funds-left;
	// 			padding-top: 30px;

	// 			p{
	// 				padding-left: 5px;
	// 				font-weight: 400;
	// 			}
	// 		}
	// 		.funds-right{
				
	// 			grid-area: funds-right;
	// 		}
			
	// 		.share-left{
	// 			grid-area: share-left;
	// 			padding-top: 15px;
	// 			p{
	// 				padding-left: 5px;
	// 				font-weight: 400;
	// 			}
	// 		}
	// 		.share-right{
	// 			grid-area: share-right;
	// 		}

	// 		.deposit{
	// 			grid-area: footer-left;
	// 			padding-top: 30px;
	// 			display: flex;
	// 			justify-content: flex-start;
	// 		}
	// 		.withdraw{
	// 			grid-area: footer-right;
	// 			display: flex;
	// 			justify-content: flex-end;
	// 		}
	// 	}


	// }

	.btn {
		box-shadow: 0.07rem 0.075rem 0.1rem 0.1rem rgba(0, 0, 0, 0.15) !important;
		width: 55px;
		height: 35px;
		transition: box-shadow .3s;
		border-radius: .25rem;
		background: var(--button);
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
