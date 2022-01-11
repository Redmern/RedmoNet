<template>
    <div class="sidebar" :style="{ width : menubarWidth }">
        <h5>
            <span :class="{'full': !collapsed}" v-if="!collapsed">
                RedmoNet
            </span>

            <span class="abbreviation" v-else>
                <div>R</div>
                <div>M</div>
                <div>N</div>
            </span>
        </h5>

    
        <div class="Toggler justify-content-center">
            <span 
                class="collapse-icon" 
                :class="{'rotate-180': collapsed, 'reverse-180' : !collapsed }" 
                @click="ToggleMenubar"
            >
                <i class="fas fa-chevron-up" />  
            </span>
        </div>
            
    </div>
</template>

<script lang="ts">

import {mapMutations, mapState} from 'vuex'

export default{
    computed:{
        ...mapState(['menubarWidth']),
        ...mapState(['collapsed'])
    },
    methods: { 
        ...mapMutations(['ToggleMenubar']),
        ToggleMenubar(state){
            this.$store.commit('ToggleMenubar', this.collapsed)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    transition: 0.5s ease;
    display: flex;
    flex-direction: column;
    border: 0;
    border-radius: 0.2rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: 0.02rem 0.02 0.1rem 0.01rem rgba(0, 0, 0, 0.39) !important;

    .h5{
        text-align: center;
    }

    // .full{
    //     transform: rotate(45deg);
    //     transition: 0.4s ease-in-out; 
    // }

    // .abbreviation{
    //     transform: rotate(-45deg);
    //     transition: 0.4s ease-out;
    // }

    .rotate-180{
        transform: rotate(90deg);
        transition: 0.4s ease-in-out;
    }
    .reverse-180{
        transform: rotate(-90deg);
        transition: 0.4s ease-in-out;
    }

    .Toggler{

        .collapse-icon {
            position: absolute;
            bottom: 0;
            right: 12px;
            padding: 0.75em;
            color: rgb(255, 249, 249)
            
        }
        .fa-chevron-circle-up{
            font-size: 1.5rem;
        }
    }
}





</style>