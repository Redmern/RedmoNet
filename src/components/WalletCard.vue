<template>
  <div class="card">
    <div class="card-header">
      Featured
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
@mixin hover-focus {
    &:hover,
    &:focus {
        @content;
    }
}

.card {
    padding: 3px 10px 0 10px;
    text-align: center;
    background: -webkit-linear-gradient(75deg, #f0e5ce1a, #a9a9ac);
    background: linear-gradient(75deg, #f0e5ce3a, #a9a9ac);
    border: 0;
    border-radius: 0.35rem;
    box-shadow: 0.07rem 0.075rem 0.1rem 0.1rem rgba(0, 0, 0, 0.15) !important;
    transition: box-shadow .3s;

    @include hover-focus {
        box-shadow: 0.07rem 0.075rem 0.3rem 0.1rem rgba(0, 0, 0, 0.25) !important;
    }

    .card-header {
        border: 0;
        padding: 0;
        background: inherit;
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
    background: -webkit-linear-gradient(75deg, #ac449bcb, #af4c9f);
    background: linear-gradient(75deg, #ac449bcb, #af4c9f);
    border: none;

    @include hover-focus {
        box-shadow: 0.07rem 0.075rem 0.3rem 0.1rem rgba(0, 0, 0, 0.25) !important;
        background: -webkit-linear-gradient(75deg, #ac449bea, #af4c9f);
    background: linear-gradient(75deg, #ac449bea, #af4c9f);
        svg {
            opacity: 1;
        }
    }

    button {
        box-shadow: 0.07rem 0.075rem 0.1rem 0.1rem rgba(0, 0, 0, 0.15) !important;
        transition: box-shadow .3s;
        background: -webkit-linear-gradient(75deg, #f0e5ce, #a9a9ac);
        background: linear-gradient(75deg, #f0e5ce, #a9a9ac);


        svg {
            opacity: 0.7;
            font-size: 1rem;
            float: right;
        }

        
    }

    .food-btn {
        padding: 2px 6px;
        font-size: 15px;
        font-weight: 600;
        border: 1px solid rgb(145, 145, 145);
        box-shadow: 0 0 0.125rem 0.05rem rgba(0, 0, 0, 0.075) !important;
        background: -webkit-linear-gradient(75deg, #f7eedc, #b8b8c5);

        &:hover, &:focus {
            background: -webkit-linear-gradient(75deg, #f7eedc, #9595b6);
            // border: 1px solid rgb(0, 0, 0);
            box-shadow: 0.0125rem 0.05rem 0.15rem 0.05rem rgba(0, 0, 0, 0.35) !important;
        }
    }

    .btn-add {
        svg {
            display: block;
            margin-top: 2px;
            color: rgb(14, 110, 65);
        }
    }

    .btn-edit {
        svg {
            display: block;
            margin-top: 2px;
            color: rgb(23, 55, 201);
        }
    }
}
    

</style>
