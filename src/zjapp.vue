<template>
    <div id="container" class="content">
        <!--<div id="header">this is header</div>-->
        <transition mode="out-in">
            <router-view></router-view>
        </transition>
        <!--<footer-component></footer-component>-->
    </div>
</template>
<script  type="text/ecmascript-6">
    export default {
      data() {
        return {
          transitionName: 'slide-left'
        }
      }
    }
</script>

<style lang="less" scoped>
    #container {
        height: 100%;
    }

    .v-enter{
        opacity: 0;
    }
    .v-enter-active{
        transition: 0.2s;
    }
    .v-enter-to{
        opacity: 1;
    }
    .v-leave{
        opacity: 1;
    }
    .v-leave-to{
        opacity:0;
    }
    .v-leave-active{
        transition: 0.2s;
    }


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
