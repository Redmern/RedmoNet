<template>
  <div class="grid-container overview">
    <!-- <div class="card main-card">
    </div> -->
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
	margin-right: 1%;
    margin-left: 1%;
    min-height: 95vh;
    padding: 3em 3em 3em 3em;
    background: linear-gradient(90deg, var(--background-bg), var(--background-bg2));
    transition: margin-left 0.5s;
    transition: width 0.5s;
    border: none;

	display: grid;
}

p{
  color: white;
}
</style> 