<template>

    <Menubar/>

    <div class="main" :style="{'margin-left': menubarWidth}">  
        <router-view v-slot="{ Component }">

            <!-- enter-active-class="animate__animated animate__fadeInRight" 
            leave-active-class="animate__animated animate__fadeOutRight"  -->

            <transition name="fade" mode="out-in"> 
                <component :is="Component" />
            </transition>

        </router-view> 
    </div>

</template>

<script lang="ts">

import {mapState} from 'vuex'
import Menubar from "@/components/Menubar/Menubar.vue";
import { Options, Vue } from "vue-class-component";

import { GetUserAccountsQuery } from "@/graphql/userAccountQuerries"
import { useQuery, useResult } from "@vue/apollo-composable";

@Options({
  components: {
    Menubar,
  },
  computed:{
        ...mapState(['menubarWidth'])
    },
})

export default class App extends Vue{
    
    resultGetAdminAccountQuery = useQuery(GetUserAccountsQuery)

	isGetUserAccountsQueryLoading = this.resultGetAdminAccountQuery.loading

	adminAccount = useResult(this.resultGetAdminAccountQuery.result, null, data => data.adminAccount)

	mounted(){
		console.log(this.adminAccount);
		
	}
}
</script>

<style lang="scss">

@import './src/style/main.scss';

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    
    * {
        font-family: 'MyWebFont', sans-serif;
        font-weight: 400;
    }
}

.card{
    // @include shadow (var(--item-shadow-hover), var(--item-shadow));
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

.fade-enter-to,
.fade-leave-to{
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.1s ease-in-out;
}

</style>
