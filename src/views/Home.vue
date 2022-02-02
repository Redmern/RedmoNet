<template>
  <div class="grid-container overview">

	<div class="top content card">

	</div>

    <div class="main content card">
		
	</div>	
	
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

<style scoped lang="scss">

.grid-container {
    max-width: 100%;
    min-height: 100vh;
    background: linear-gradient(90deg, var(--background-bg), var(--background-bg2));
    border: none;

	display: grid;
	margin-inline: auto;

	grid-template-columns: 0% auto 0%;
	grid-template-rows: 0% 7% auto 0%;
	gap: var(--card-gap);
	grid-template-areas: 
	" header header header "
	" left-side top right-side "
	" left-side main right-side "
	" left-footer footer right-footer "
	;
}

.card{
	border-radius: 0.75rem;
}

.content{
	max-width: 100%;
    min-height: 100%;

	color: white;
	
	background-color: var(--menubar-bg);
}

.top{
	grid-area: top;
}

.main{
	grid-area: main;
}

</style> 