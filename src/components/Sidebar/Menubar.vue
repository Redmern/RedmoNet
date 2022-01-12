<template>
    <div class="menubar" :style="{ width : menubarWidth }">
        <h5>
            <transition name="fade" mode="out-in">
                
                <span :class="{'full': !collapsed}" v-if="!collapsed">
                    RedmoNet
                </span>
                
                <span class="abbreviation" v-else>
                    <div class="abbreviation">R</div>
                    <div class="abbreviation">M</div>
                    <div class="abbreviation">N</div>
                </span>

            </transition>
            
        </h5>

        <div class="links" :class="{'links-full': !collapsed}">
            <MenuBarLinks description="Overview"  to="/" icon="fas fa-home"/>  
            <MenuBarLinks description="Add User" to="/about" icon="fas fa-user-plus"/>       
            <MenuBarLinks description="History" to="/about" icon="fas fa-history"/>     
        </div>

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
Kan 
<script lang="ts">

import {mapMutations, mapState} from 'vuex'
import MenuBarLinks from "./MenuBarLinks.vue"

export default{
    components: {
        MenuBarLinks,
    },
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

@import './src/style/main.scss';

.links-full{
    left: 15% !important;
}

.links{
    position: absolute;
    top: 40%;
    left:20%;
    transition: left 0.4s ease;
}


.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955); 
    // transition: linear 0.5s ease-in-out; 
}

.fade-enter,
.fade-leave,
.fade-leave-to{
    transition: opacity 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955); 
    opacity: 0;
}

.menubar {
    color: white;
    background-color: var(--sidebar-bg);
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
    border-radius: 0.1rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: 0.07rem 0.075rem 0.1rem 0.1rem rgba(0, 0, 0, 0.7) !important;

    @include hover-focus {
        box-shadow: 0.07rem 0.075rem 0.3rem 0.1rem #F7AEF8 !important;
    }

    h5{
        text-align: center;
    }

    .full{
        font-family: Rooster;
        font-size: 1.7em;
    }

    .abbreviation{
        font-family: Rooster;
        font-size: 1.2em;
        transform: rotate(-20deg);
    }

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