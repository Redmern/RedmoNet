<template>
  <div class="container overview">
    <div class="card main-card">
      <section class="food-cards-overview">
        <div class="row">
          <p>
            Hallo
          </p>
        </div>
      </section>
    </div>
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

export default class Home extends Vue {
  
  

}
</script>



<style lang="scss">
.container {
    max-width: 100%;
}

p{
  color: white;
}
</style> 