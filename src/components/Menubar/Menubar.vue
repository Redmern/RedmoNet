<template>
	<div class="menubar" :style="{ width: menubarWidth }">
		<h5>
			<a>
				<transition name="fade" mode="out-in">

					<span :class="{ full: !collapsed }" v-if="!collapsed"> RedmoNet </span>

					<span class="abbreviation" v-else>
						<div class="abbreviation">R</div>
						<div class="abbreviation">M</div>
						<div class="abbreviation">N</div>
					</span>

				</transition>
			</a>
		</h5>

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

@Options({
	components: {
		MenuBarLinks,
	},

	computed: {
		...mapState(["menubarWidth"]),
		...mapState(["collapsed"]),
	},

	methods: {
		...mapMutations(["ToggleMenubar"]),
		ToggleMenubar(state) {
		this.$store.commit("ToggleMenubar", this.collapsed);
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

.fade-enter-active {
  transition: all 0.4s cubic-bezier(0.42, -0.1, 0.24, 0.39);
}
.fade-leave-active {
  transition: all 0.1s cubic-bezier(0.57, 0.08, 0, 0.25);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

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

	h5 {
		margin-top: 10px;
		margin-bottom: 50px;
		text-align: center;
	}

	.full {
		font-family: Rooster;
		font-size: 1.7em;
		border-bottom: 1px white;
	}

	.abbreviation {
		font-family: Rooster;
		font-size: 1.2em;
		transform: rotate(-20deg);
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
		color: var(--menubar-item-active);
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
