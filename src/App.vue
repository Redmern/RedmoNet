<template>

    <transition name="fade" mode="out-in">
        <div class="grid-container" :class="{ 'collapsed': collapsed, 'full': !collapsed }">

            <div class="grid menubar">
                <Sidebar/>
            </div>

            <div class="grid page">
            </div>   

        </div>
    </transition>
</template>

<script lang="ts">

import {mapState} from 'vuex'
import Sidebar from "@/components/Sidebar.vue";
import { Options, Vue } from "vue-class-component";

import { GetUserAccountsQuery } from "@/graphql/userAccountQuerries"
import { useQuery, useResult } from "@vue/apollo-composable";

@Options({
  components: {
    Sidebar
  },
  computed:{
		...mapState(["collapsed"]),
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

*{
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.grid-container{
    background: -webkit-linear-gradient(90deg, var(--background-bg), var(--background-bg2));
    background: linear-gradient(90deg, var(--background-bg), var(--background-bg2));
    
    display: grid;

    width: 100%;
    height: 100%;
    margin-inline: auto;
    transition: all 0.5s ease;
}

.full{
    grid-template-columns: 60px 1fr;
    transition: all 0.5s ease;
}

.collapsed{
    grid-template-columns: 200px 1fr;
    transition: all 0.5s ease;
}


.grid{
    color: white;
    border: 1px white;
}

.menubar{
    background-color: var(--menubar-bg);
    transition: all 0.5s ease;
}

</style>
