<template>
    <Menubar/>
    <div class="main" :style="{'margin-left': menubarWidth}">  
        <div class="grid-container overview">
            <div class="top content">

				<div class="top-menu">
					<div class="top-menu-content">
						<i class="fas fa-user-plus" />
						<i class="fas fa-folder-plus" />
					</div>
				</div>

                <div class="total-amount">
					<!-- <h6 class="card-title">Total:  ${{getAdminAccountAmount()}}</h6> -->
				</div>

				<div class="profile-menu">
					<div class="profile-menu-content">
						<h6 class="card-title">Total:  ${{getAdminAccountAmount()}}</h6>
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
})

export default class App extends Vue{
    
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
        font-family: 'MyWebFont', sans-serif;
        font-weight: 600;
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

	.total-amount{
		grid-area: header;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: space-evenly;
		align-items: center;
	}

	.top-menu{
		flex-wrap: nowrap;
		align-items: center;
		grid-area: menu;
		display: flex;
		justify-content: flex-start;
		margin-left: 1rem;

		.top-menu-content{


		}

		
	}

	.profile-menu{
		display: flex;
		justify-content: flex-end;
    	align-items: center;

		margin-right: 20px;

		.profile-menu-content{
			display: flex;
    		flex-direction: row;

			svg{
				margin-left: 20px;
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

.page{
    background: var(--background-bg);
}

.fade-enter-to,
.fade-leave-to{
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.1s ease-in-out;
}

</style>
