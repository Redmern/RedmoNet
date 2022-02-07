<template>
	<div class="menubar" :style="{ width: menubarWidth }">
		<div class="logo">

			<div class="fullWrapper" ref="fullWrapper">
				<p class="full" ref="full"> RedmoNet </p>
			</div>	

			<div class="abbWrapper" ref="abbWrapper">
				<p class="abb1" ref="abb1">R</p>
				<p class="abb2" ref="abb2">M</p>
				<p class="abb3" ref="abb3">N</p>
			</div>

		</div>

		<div class="links" :class="{ 'links-full': !collapsed }">
			<MenuBarLinks description="Overview" to="/" icon="fas fa-home" />
			<MenuBarLinks description="Users" to="/OverviewUsers" icon="fas fa-users" />
			<MenuBarLinks description="Wallets" to="/OverviewWallets" icon="fas fa-table" />
			<MenuBarLinks description="Add User" to="/AddUser" icon="fas fa-user-plus" />
			<MenuBarLinks description="Add Wallet" to="/AddWallet" icon="fas fa-wallet" />
		</div>

		<div class="Toggler justify-content-center" :style="{ width: menubarWidth }">

			<span class="collapse-icon"	:class="{ 'rotate-180': collapsed, 'reverse-180': !collapsed }"	@click="ToggleMenubar">
				<i class="fas fa-chevron-up" />
			</span>

		</div>
	</div>
</template>

<script lang="ts">
import { mapMutations, mapState } from "vuex";
import MenuBarLinks from "./MenuBarLinks.vue";
import { Options, Vue } from "vue-class-component";

import { GetUserAccountsQuery } from "@/graphql/userAccountQuerries"
import { useQuery, useResult } from "@vue/apollo-composable";
import { ref } from "@vue/reactivity";
import gsap from "gsap";

@Options({
	components: {
		MenuBarLinks,
	},

	mounted () {
		this.first = true;
		this.tl = gsap.timeline({ defaults:{ duration: 0.3, reversed: false, ease: "power4.inOut" }})
			.to('.fullWrapper', { opacity:0},'-=.1')
			.to('.fullWrapper', {height: '0%'}, '-=.1')
			.to('.abbWrapper', {width: '100%', opacity:1 },'-=0.1').paused(true);
			
	},

	computed: {
		...mapState(["menubarWidth"]),
		...mapState(["collapsed"]),
	},

	methods: {
		...mapMutations(["ToggleMenubar"]),

		StartAnimation: function(){
			if (this.first) {
				this.first = false
				this.tl.resume()
				this.tl.play()
				return
			}
			this.tl.reversed() ? this.tl.play() : this.tl.reverse();
		},

		ToggleMenubar(state) {
			this.$store.commit("ToggleMenubar", this.collapsed);
			this.StartAnimation()			
		},
	}
})

export default class Menubar extends Vue {



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

<style scoped lang="scss">
@import "./src/style/main.scss";

.links-full {
  left: 20% !important;
}

.links {
  position: absolute;
  top: 35%;
  left: 25%;
  transition: left 0.4s ease;
}

// .fade-enter-active {
//   transition: all 0.4s cubic-bezier(0.42, -0.1, 0.24, 0.39);
// }
// .fade-leave-active {
//   transition: all 0.1s cubic-bezier(0.57, 0.08, 0, 0.25);
// }

// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }

// .fade-enter {
//   opacity: 0;
// }

// .fade-leave-to {
//   opacity: 0;
// }

.menubar {
	position: fixed;
	float: left;
	display: flex;
	flex-direction: column;



	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1;

	margin-top: var(--card-gap);
	margin-bottom: var(--card-gap);

	padding: 0.5em;
	color: white;
	background-color: var(--menubar-bg);
	border: 0;
	border-radius: 0.75rem;
	border-bottom-left-radius: 0;
	border-top-left-radius: 0;
	transition: width 0.5s ease;

	// @include shadow(var(--item-shadow), var(--item-shadow-hover));

	.hidden{
		display: none;
	}

	.logo {
		text-align: center;
	}

	.fullWrapper{
		display: inline-block;
		margin-top: 5px;

		.full {
			font-family: Abril_Fatface;
			font-weight: 600;
			font-size: 2.5rem;
			padding-left: 15px;
			padding-right: 15px;
		}
	}

	

	.abbWrapper {
		opacity: 0;
		p{
			font-family: Abril_Fatface;
			font-size: 1.5rem;			
			font-weight: 400;
			transform: rotate(-20deg);
			margin-bottom: 5px;
		}
	}


	.abb2, 
	.abb3 {
		margin-top: -11px;
	}

	.rotate-180 {
		transform: rotate(90deg);
		transition: 0.4s ease-in-out;
	}
	.reverse-180 {
		transform: rotate(-90deg);
		transition: 0.4s ease-in-out;
	}

	.Toggler {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 50px;
		transition: 0.5s ease;

		:hover {
		color: var(--button);
		}

		.collapse-icon {
		position: absolute;
		right: 12px;
		bottom: 0;
		padding: 0.75em;
		color: rgb(255, 249, 249);
		cursor: pointer;
		user-select: none;
		}

		.fa-chevron-circle-up {
		font-size: 1.5rem;
		}
	}
}

h5,p{
    color: #FFFFFF;
    transition: .2s ease-in-out;
}

.total-amount {
    text-align: center;
}
</style>
