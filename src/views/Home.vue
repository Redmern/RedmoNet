<template>

	<div class="page">
		<OverviewCard/>    
	</div>
    
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import OverviewCard from "@/components/OverviewCard.vue"; 


@Options({
  components: {
    OverviewCard,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.container {
    max-width: 100%;
}
</style> 