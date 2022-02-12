<template>
    <Menubar/>
    <div class="main" :style="{'margin-left': menubarWidth}">  
        <div class="grid-container overview">
            <div class="top content">

				<div class="top-menu">

					<div @click="ToggleAddUserForm">
						<i class="fas fa-user-plus" />
					</div>
					<div @click="ShowWalletForm()">
						<i class="fas fa-folder-plus" />
					</div>	

					<AddUserForm :tl="this.tl"/>

					<!-- <AddWalletForm :class="{ 'showuserform' : showAddUserForm }"/> -->

				</div>

				<div class="profile-menu">
					<div class="profile-menu-content">
						<h6>Total:</h6>
						<h6>${{getAdminAccountAmount()}}</h6>
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

import {mapState,mapMutations} from 'vuex'
import Menubar from "@/components/Menubar/Menubar.vue";
import AddUserForm from "@/components/Forms/AddUserForm.vue"
import { Options, Vue } from "vue-class-component";

import { GetUserAccountsQuery } from "@/graphql/userAccountQuerries"
import { useQuery, useResult } from "@vue/apollo-composable";
import { ref } from "@vue/reactivity";
import gsap from "gsap";

@Options({
	mounted () {
		this.first = true;
		this.tl = gsap.timeline({ defaults:{ duration: .2, reversed: false, ease: "power1" }})
	},

	components: {
		Menubar,
		AddUserForm,
	},

	computed:{
		...mapState(['menubarWidth']),
	},

	methods:{

		ToggleAddUserForm() {
			if (this.first) {
				this.tl
					.to('.form', { opacity:1, zIndex: 999})
					
					this.first = false
				return
			}

			this.tl.reversed() ? this.tl.play() : this.tl.reverse();
		},
	}			
})

export default class App extends Vue{
    
	Name = ""

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

			h6:first-child{
				margin-right: 10px!important;
			}

			h6{
				margin-right: 75px;
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
