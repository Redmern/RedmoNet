<template>
    <div class="main">
        <h5>
			<a>
				<transition name="fade" mode="out-in">

					<span :class="{ full: !collapsed }" v-if="collapsed"> RedmoNet </span>

					<span class="abbreviation" v-else>
						<div class="abbreviation">R</div>
						<div class="abbreviation">M</div>
						<div class="abbreviation">N</div>
					</span>

				</transition>
			</a>
		</h5>






        <div class="Toggler justify-content-center">

            <span class="collapse-icon"	:class="{ 'rotate-180': collapsed, 'reverse-180': !collapsed }"	@click="ToggleMenubar">
                <i class="fas fa-chevron-up" />
            </span>

        </div>

    </div>
</template>



<script>

import { Options, Vue } from "vue-class-component";
import { mapMutations, mapState } from 'vuex'


@Options({
    computed: {
		...mapState(["collapsed"]),
	},

	methods: {
		...mapMutations(["ToggleMenubar"]),
		ToggleMenubar(state) {
            console.log("hi there!");
		    this.$store.commit("ToggleMenubar", this.collapsed);
		},
	}
})


export default class Sidebar extends Vue{

}
</script>

<style>

.Toggler {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
    transition: 0.5s ease;
}

</style>