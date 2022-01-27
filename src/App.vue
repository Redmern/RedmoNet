<template>

    <Menubar/>

    <div class="main" :style="{'margin-left': menubarWidth}">   
        <router-view v-slot="{ Component }">

            <!-- enter-active-class="animate__animated animate__fadeInRight" 
            leave-active-class="animate__animated animate__fadeOutRight"  -->
<!-- 
            <transition name="fade" mode="out-in"> -->
                <component :is="Component" />
            <!-- </transition> -->

        </router-view> 
    </div>

</template>

<script lang="ts">

import {mapState} from 'vuex'
import Menubar from "@/components/Menubar/Menubar.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Menubar,
  },
  computed:{
        ...mapState(['menubarWidth'])
    },
})

export default class App extends Vue{
    

}
</script>

<style lang="scss">

@import './src/style/main.scss';

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    * {
        font-family: 'MyWebFont', sans-serif;
        font-weight: 400;
    }
}

.main{
    transition: 0.5s ease;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

body {
    background: -webkit-linear-gradient(90deg, var(--background-bg), var(--background-bg2));
    background: linear-gradient(90deg, var(--background-bg), var(--background-bg2));
}

.menuBarCollapsed{
    position: absolute;
    left: 180px;
}

.page{
    background: var(--background-bg);
}

// .fade-enter-to,
// .fade-leave-to{
//     opacity: 0;
// }

// .fade-enter-active,
// .fade-leave-active{
//     transition: opacity 0.1s ease-in-out;
// }

</style>
