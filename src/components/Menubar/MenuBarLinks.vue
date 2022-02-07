<template>

  <router-link :to="to" class="link">
      
      <i class="icon" :class="icon"/>
      <transition name="fade"  >
        <p v-if="!collapsed">{{description}}</p>   
      </transition>
      
  </router-link>

</template>

<script>

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
    transition: all 0.4s ease;
}
.fade-leave-active{
    transition: all 0.1s ease;
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
        
        font-weight: 400;
        font-size: 1.5rem;
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
    color: var(--button);
}

a.router-link-active{
    // border-bottom: 1px solid var(--menubar-item-active);
    color: var(--button);
}

a.router-link-hover{
    // border: 1px solid var(--menubar-item-active);
    color: var(--button);
}

</style>