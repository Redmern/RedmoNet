<template>
    <div class="container overview">
        <div class="card main-card">
            <section class="food-cards-overview">
                <div class="row">
                
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 wallet-card">
                        <WalletCard/>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">

import WalletCard from "@/components/WalletCard.vue"; 
import {mapState} from 'vuex'

export default  {
    components: {
    WalletCard,
  },
  computed:{
        ...mapState(['menubarWidth']),
        ...mapState(['collapsed']),
        decreaseWidth() {
        return 'calc(100% - '+ this.menubarWidth +')';
        }
    },
}

</script>

<style scoped lang="scss">

@import './src/style/main.scss';

.container {
    max-width: 100%;
}

.main-card {
    margin-top: 1%;
    margin-right: 1%;
    margin-left: 1%;
    min-height: 95vh;
    padding: 3em 3em 3em 3em;
    // box-shadow: 0 0 3em rgba(0, 0, 0, 0.25);
    // background-color: var(--overviewcard-bg);
    background: -webkit-linear-gradient(90deg, var(--background-bg), var(--background-bg2));
    background: linear-gradient(90deg, var(--background-bg), var(--background-bg2));
    // border-radius: 0.35rem;
    transition: margin-left .5s;
    transition: width .5s;
    border: none;
}

.wallet-card{
    margin-bottom: 25px;
}

</style>