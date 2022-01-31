<template>

	<div class="grid-container">

	</div>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"; 

@Options({
	components: {
	},
})

export default class Home extends Vue {
  
  

}
</script>



<style lang="scss">

.grid-container {
    max-width: 100%;
	display: grid;
	width: 100%;
	height: 100%;
}

p{
 	 color: white;
}

</style> 