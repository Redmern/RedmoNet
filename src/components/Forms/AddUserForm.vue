<template>

  	<!-- <div :class="{'hideuserform': !showAddUserForm} " class="form"> -->
  	<div class="form">
		<div class="formwrapper">

			<div class="header">
				<h4>New User</h4>
			</div>

			<div class="description">
				<p>Enter Name</p>
				<p>Enter Funds</p>
				
			</div>

			<div class="input">
				<input v-model="Name" type="text" placeholder="Enter Name" />
				<input v-model="Amount" type="text" placeholder="Initial funds" />
			</div>

			<div class="buttons">
				<button class="btn btn-secondary" @click="CreateNewUser"><p class="buttontext">Create</p></button>
				<button class="btn btn-secondary" @click="StartAnimation"><p class="buttontext">Cancel</p></button>
			</div>

		</div>
	</div>

	<p v-if="loading">hi</p>
    
</template>

<script lang="ts">

import {mapState, mapMutations} from 'vuex'

import {useMutation, useQuery} from '@vue/apollo-composable'
import {AddUserAccountMutation} from '@/graphql/userAccountMutations'
import {GetUserAccountsQuery} from '@/graphql/userAccountQuerries'
import { Options, Vue } from "vue-class-component";

@Options({

	props: {
		tl: Object, 
  	},

	computed:{
		...mapState(['showAddUserForm']),
			
	},	

	methods:{
		CreateNewUser(){
			if (this.Name == "") return
			this.Create()
			this.StartAnimation()
		},

		StartAnimation: function(){
			console.log(this.tl);
			
			this.tl.reversed() ? this.tl.play() : this.tl.reverse();
		},
	},

})


export default class AddUserFrom extends Vue{

	Name = ""
	Amount = ""
	addUserAccount = null
	loading = null
	error = null
	result = useQuery(GetUserAccountsQuery)

	Create(){
		const fundsToAdd = parseFloat(this.Amount)

		this.addUserAccount = useMutation(AddUserAccountMutation, { variables: {name: this.Name, amount: fundsToAdd}, refetchQueries: ['userAccounts']})

		this.loading = this.addUserAccount.loading
		this.error = this.addUserAccount.error
		this.Name = ""
		this.Amount = "0"
		this.addUserAccount.mutate()
		
	}}

</script> 

<style scoped lang="scss">

.hideuserform{
	z-index: -1!important;
	opacity: 0!important;
}

.form{
	z-index: -1;
	position: absolute;
	width: 20vw;
	height: 25vh;
	border-radius: .75rem;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	opacity: 0;
	background-color: var(--background-bg2);
	box-shadow: 0 0 0 100vw rgba(0,0,0,.5);

	.formwrapper{
		height: 100%;
		width: 100%;
		padding: 25px 45px 25px 50px;
		display: grid;
		grid-template-columns: auto auto;
		gap: 5%;
		grid-template-areas: 
			"header header"
			"description input"
			"buttons buttons"
		;

		.header{
			grid-area: header;
			width: 100%;
			display: flex;
    		align-items: center;
			padding-left: 5px;
			padding-right: 5px;
			border-bottom: 1px solid #5c5b509a;
		}

		.description{
			grid-area: description;
			padding-left: 5px;
			margin-top: 5px;
			:first-child{
				margin-bottom: 20px;
				
			}
		}

		.input{
			display: flex;
    		flex-direction: column;
			padding-right: 5px;
			:first-child{
				margin-bottom: 15px;
			}
			input{
				margin-top: 5px;
			}
		}

		.buttons{
			grid-area: buttons;
			padding: 5px 5px 0px 0px; 
			display: flex;
			justify-content: flex-end;

			:first-child{
				margin-right: 1rem;
			}

			.buttontext{
				margin: 0px;
			}

			button{
				max-height: 35px;
				background-color: var(--button);
				border: none;
			}
		}
	}
}
</style>
