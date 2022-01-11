<template>
  <div>
      <img :src="LogoSol" alt="Solana-logo" class="headerLogo"/>
  </div>
</template>



<script>

import { Options, Vue } from "vue-class-component";
import LogoSol from "@/assets/solana-sol-logo.svg";

@Options({
  components: {
    LogoSol
  },
})

export default class Sol extends Vue {
   
}

</script>

<style>

</style>