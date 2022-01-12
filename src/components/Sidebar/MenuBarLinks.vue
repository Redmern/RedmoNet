<template>

  <router-link :to="to" class="link" :class="{active: isActive}">
      
      <i class="icon" :class="icon"/>
      <transition name="fade" >
        {{description}}
      </transition>
      
  </router-link>

</template>

<script>

import {computed} from 'vue'
import {useRoute} from 'vue-router'
import {mapState} from 'vuex'

export default {
    props: {
        to: { type: String, required: true },
        icon: { type: String, required: true },
        description: { type: String, required: true },
    },
    computed:{
        ...mapState(['collapsed'])
    },
     setup(props){
         const route = useRoute()
         const isActive = computed(() => route.path === props.to )

         return isActive
     }
}
</script>

<style scoped lang="scss">


.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.1s linear ;
}

.fade-enter,
.fade-leave-to{
    opacity: 0;
}


.link{
    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;

    margin: 2em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.7em;

    color: white;
    text-decoration: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1rem;
}

.icon{
    font-size: 1.3rem;
}

.link .icon{
    flex-shrink: 0;
    width: 25px;
    margin-right: 20px;
    font-size: 2rem;
}

.link:hover{
    background-color: var(--siderbar-item-hover);
}

.link:active{
    background-color: var(--siderbar-item-active);
}


</style>