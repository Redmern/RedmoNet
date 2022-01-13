<template>
  <div class="card">
    <div class="card-header">
      <h5>Featured</h5>
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})

export default class WalletCard extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import './src/style/main.scss';

h5,p{
    color: #FFFFFF;
    transition: .2s ease-in-out;
}

.card {
    padding: 3px 10px 0 10px;
    text-align: center;
    background: -webkit-linear-gradient(75deg, var(--walletcard-bg), var(--walletcard-bg2));
    background: linear-gradient(75deg, var(--walletcard-bg), var(--walletcard-bg2));
    border: 0;
    border-radius: 0.35rem;
    transition: box-shadow .2s;

    @include shadow (var(--item-shadow), var(--item-shadow-hover));

    .card-header {
        border: 0;
        padding: 0;
        background: none;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .card-body {
        padding: 1.25rem 0;

        > svg {
            font-size: 2rem;
            margin-top: 50px;
            margin-bottom: 35px;
        }
    }
}

.btn {
    margin-top: 10px;
    box-shadow: 0.07rem 0.075rem 0.1rem 0.1rem rgba(0, 0, 0, 0.15) !important;
    transition: box-shadow .3s;
    margin-bottom: 5px;
    width: 85%;
    background: -webkit-linear-gradient(75deg, var(--walletcard-btn), var(--walletcard-btn2));
    background: linear-gradient(75deg, var(--walletcard-btn), var(--walletcard-btn2));
    border: none;

    @include hover-focus {
        box-shadow: 0.07rem 0.075rem 0.3rem 0.1rem rgba(0, 0, 0, 0.25) !important;
        background: -webkit-linear-gradient(75deg, var(--walletcard-btn-hover), var(--walletcard-btn-hover2));
        background: linear-gradient(75deg, var(--walletcard-btn-hover), var(--walletcard-btn-hover2));
        svg {
            opacity: 1;
        }
    }

    svg {
        opacity: 0.7;
        font-size: 1rem;
        float: right;
    }
}
    

</style>
