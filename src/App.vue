<template>
    <Menubar/>
    <div class="main" :style="{'margin-left': menubarWidth}">  
        <div class="grid-container overview">
            <div class="top content">

				<div class="top-menu">

					<div @click="ShowUserForm()">
						<i class="fas fa-user-plus" />
					</div>
					<div @click="ShowWalletForm()">
						<i class="fas fa-folder-plus" />
					</div>	

					<div :class="{'showuserform' : !showUserForm}" class="form">
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
								<input v-model="Name" type="text" placeholder="Enter Initial funds" />
							</div>
	
							<div class="buttons">
								<button class="btn btn-secondary"><p class="buttontext">Create</p></button>
								<button class="btn btn-secondary" @click="showUserForm = !showUserForm"><p class="buttontext">Cancel</p></button>
							</div>

						</div>
					</div>


				</div>

				<div class="profile-menu">
					<div class="profile-menu-content">
						<h6>Total:  ${{getAdminAccountAmount()}}</h6>
						<i class="fas fa-user-circle" />
					</div>
				</div>
				
            </div>
                <router-view v-slot="{ Component }">
                    <transition name="fade" mode="out-in"> 

						<div class="main content">
							<component :is="Component" />
						</div>	

                    </transition>
                </router-view>
        </div>
    </div>

</template>

<script lang="ts">

import {mapState} from 'vuex'
import Menubar from "@/components/Menubar/Menubar.vue";
import { Options, Vue } from "vue-class-component";

import { GetUserAccountsQuery } from "@/graphql/userAccountQuerries"
import { useQuery, useResult } from "@vue/apollo-composable";
import { ref } from "@vue/reactivity";

@Options({
	components: {
		Menubar,
	},
	computed:{
			...mapState(['menubarWidth'])
	},
	methods:{
		ShowUserForm(){
			this.showUserForm = !this.showUserForm
		}
	}			
})

export default class App extends Vue{
    
	Name = ""

	showUserForm = true

	showWalletForm = true

    resultGetAdminAccountQuery = useQuery(GetUserAccountsQuery)

	isGetUserAccountsQueryLoading = this.resultGetAdminAccountQuery.loading

	adminAccount = useResult(this.resultGetAdminAccountQuery.result, null, data => data.adminAccount)
	
	getAdminAccountAmount (){
		if(!this.isGetUserAccountsQueryLoading)
		{
			const x = ref(this.adminAccount)
			return x.value.amount
		}
	}
}
</script>

<style lang="scss">

@import './src/style/main.scss';

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    
    * {
        font-family: Teko;
        font-weight: 400;
    }
}

.showuserform{
	z-index: 999!important;
	opacity: 1!important;
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
	box-shadow: 0 0 0 100vw rgba(0,0,0,.4);

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
			// width: 10rem;
			:first-child{
				margin-bottom: 15px;
			}
			input{
				margin-top: 5px;
			}
		}

		.buttons{
			grid-area: buttons;
			padding: 5px 0px 5px 5px; 
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

.grid-container {
    max-width: 100%;
    min-height: 100vh;
    background: linear-gradient(90deg, var(--background-bg), var(--background-bg2));
    border: none;

	display: grid;
	margin-inline: auto;

	grid-template-columns: 0.5% auto 0.5%;
	grid-template-rows: 0% 9% 0% auto 0%;
	gap: var(--card-gap);
	grid-template-areas: 
	" header header header "
	" left-side top right-side "
	" left-side gap right-side "
	" left-side main right-side "
	" left-footer footer right-footer "
	;
}

.content{
	max-width: 100%;
    min-height: 100%;
	
	border-radius: 0.75rem!important;
	color: white;
	
	background-color: var(--menubar-bg);
}

.top{

	grid-area: top;
    display: grid;
	grid-template-columns: repeat(3, auto);
	// gap: var(--card-gap);
	grid-template-areas: 
	" menu header profile ";

	svg{
		margin-left: 1rem;
		margin-right: 1rem;
		font-size: 1.25rem;
	}

	// .total-amount{
	// 	grid-area: header;
	// 	display: flex;
	// 	flex-direction: row;
	// 	flex-wrap: nowrap;
	// 	align-content: center;
	// 	justify-content: space-evenly;
	// 	align-items: center;
	// }

	.top-menu{
		grid-area: menu;
		flex-wrap: nowrap;
		align-items: center;
		display: flex;
		justify-content: flex-start;
		margin-left: 6rem;

		svg:hover{
			color: var(--button);
		}
	}

	.profile-menu{
		grid-area: profile;
		display: flex;
		justify-content: flex-end;
    	align-items: center;

		margin-right: 3rem;

		.profile-menu-content{
			display: flex;
    		flex-direction: row;
			align-items: center;

			h6{
				margin-right: 25px;
				font-size: 1.5rem;
				margin-bottom: 0;
			}

			svg{
				margin-left: 20px;
				font-size: 2rem;
			}
		}
		
	}
}

.main{
	grid-area: main;
}

.card{
    @include shadow (var(--item-shadow-hover), var(--item-shadow));
}

.main{
    transition: 0.5s ease;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

body {
    background: -webkit-linear-gradient(90deg, var(--background-bg), var(--background-bg2));
    background: linear-gradient(90deg, var(--background-bg), var(--background-bg2));
}

.menuBarCollapsed{
    position: absolute;
    left: 180px;
}

// .page{
//     background: var(--background-bg);
// }

.fade-enter-to,
.fade-leave-to{
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.1s ease-in-out;
}

</style>
