<template>
  	<div class="menubar" :style="{ width: menubarWidth }">
    	<h5>
			<transition name="fade" mode="out-in">
				
				<span :class="{ full: !collapsed }" v-if="!collapsed"> 
					RedmoNet
				</span>

				<span class="abbreviation" v-else>
					<div class="abbreviation">R</div>
					<div class="abbreviation">M</div>
					<div class="abbreviation">N</div>
				</span>

			</transition>
		</h5>

		<div class="links" :class="{ 'links-full': !collapsed }">
			<MenuBarLinks description="Overview" to="/" icon="fas fa-home" />
			<MenuBarLinks description="Add User" to="/AddShareholder" icon="fas fa-user-plus"/>
			<MenuBarLinks description="Add Wallet" to="/AddWallet" icon="fas fa-wallet" />
		</div>

		<div class="Toggler justify-content-center" :style="{ width: menubarWidth }">
			<span class="collapse-icon" :class="{ 'rotate-180': collapsed, 'reverse-180': !collapsed }" @click="ToggleMenubar">
				<i class="fas fa-chevron-up" />
			</span>
		</div>
		
  	</div>
</template>

<script lang="ts">

import { mapMutations, mapState } from "vuex";
import MenuBarLinks from "./MenuBarLinks.vue";

export default {
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

  },
};

</script>

<style scoped lang="scss">
@import "./src/style/main.scss";

.links-full {
  	left: 15% !important;
}

.links {
	position: absolute;
	top: 40%;
	left: 20%;
	transition: left .4s ease;
}

.fade-enter-active {
  	transition: all .4s cubic-bezier(.42,-0.1,.24,.39);
}
.fade-leave-active {
  	transition: all .1s cubic-bezier(.57, .08, 0, .25);
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
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	float: left;
	display: flex;
	flex-direction: column;
	padding: .5em;
	color: white;
	background-color: var(--menubar-bg);
	border: 0;
	border-radius: .1rem;
	border-bottom-left-radius: 0;
	border-top-left-radius: 0;
	transition: width .5s ease;

 	@include shadow(var(--item-shadow), var(--item-shadow-hover));

	h5 {
		margin-top: 10px;
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
		transition: .4s ease-in-out;
	}
	.reverse-180 {
		transform: rotate(-90deg);
		transition: .4s ease-in-out;
	}

	.Toggler {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 50px;
		transition: .5s ease;

		:hover {
			color: var(--menubar-item-active);
		}

		.collapse-icon {
			position: absolute;
			right: 12px;
			bottom: 0;
			padding: .75em;
			color: rgb(255, 249, 249);
			cursor: pointer;
			user-select: none;
		}

		.fa-chevron-circle-up {
			font-size: 1.5rem;
		}
	}
}
</style>