<template>
    <div id="app">
        <div id="header" >this is header</div>
        <transition :name='transitionName'>
            <router-view></router-view>
        </transition>
        <my-footer></my-footer>
    </div>
</template>

<script  type="text/ecmascript-6">
import myFooter from './components/footer/footer.vue'
export default {
  components: {
    myFooter
  },
  data() {
    return {
      transitionName: 'slide-left'
    }
  }
}
</script>

<style>
    .slide-left-enter-active{
        animation: slideInLeft .5s reverse;
    }
    .slide-left-leave-active{
        animation: slideOutLeft .5s reverse;
    }
    .slide-right-enter-active{
        animation: slideInRight .5s reverse;
    }
    .slide-right-leave-active{
        animation: slideOutRight .5s reverse;
    }
</style>
