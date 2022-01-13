<template>

  <router-link :to="to" class="link">
      
      <i class="icon" :class="icon"/>
      <transition name="fade"  >
        <p v-if="!collapsed">{{description}}</p>   
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
    }
}
</script>

<style scoped lang="scss">


.fade-enter-active{
    transition: all 0.6s cubic-bezier(.42,-0.1,.24,.39);
}
.fade-leave-active{
    transition: all 0.1s cubic-bezier(.14,.45,.15,.03);
    // animation-duration: 0.2;
}

.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}

.fade-enter{
    opacity: 0;
}

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

    p{
        position: fixed;
        margin-top: auto;
        margin-bottom: auto;
        margin-left:50px ;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 1rem;
    }
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
    // background-color: var(--menubar-item-hover);
    color: var(--menubar-item-hover);
}

.link:active{
    background-color: var(--menubar-item-active);
}

a.router-link-active{
    // border-bottom: 1px solid var(--menubar-item-active);
    color: var(--menubar-item-active);
}

a.router-link-hover{
    // border: 1px solid var(--menubar-item-active);
    color: var(--menubar-item-hover);
}

</style>