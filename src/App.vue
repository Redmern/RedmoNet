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
    }
}
</script>

<style lang="scss">

:root {
    --sidebar-bg-color:#532b538e;
    --sidebar-item-hover:#38a169;
    --sidebar-item-active:#276749;
}
</style>

<style lang="scss">

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
    // width: 90vw;
    // height: 90vh;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
    /* make scrollbar transparent */
}

body {
    // width: 100vw;
    // height: 100vh;
    background: -webkit-linear-gradient(90deg, #af49af, #7b197b);
    background: linear-gradient(90deg, #af49af, #7b197b);
}

.menuBarCollapsed{
    position: absolute;
    left: 180px;
}
    @media (min-width: 300px) {
        .col-xs-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }

    @media (min-width: 550px) {
        .col-sm-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }
    }

    @media (min-width: 850px) {
        .col-md-4 {
            flex: 0 0 33.3333%;
            max-width: 33.3333%;
        }
    }

    @media (min-width: 1150px) {
        .col-lg-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }
    }

</style>
