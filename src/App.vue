<template>

    <Menubar/>

    <div class="main" :style="{'margin-left': menubarWidth}">
    
        <router-view />

    </div>

</template>

<script lang="ts">

import {mapState} from 'vuex'
import Menubar from "@/components/Sidebar/Menubar.vue";

export default {
    components: {
    Menubar
    },
    computed:{
        ...mapState(['menubarWidth'])
    },

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

</style>
