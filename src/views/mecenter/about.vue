<template>
    <div class="wrapper">
        <top-component title="帮助中心"></top-component>
        <div class="content">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item v-for="(item, index) in collapseData" :key="index" :title="item.title" :name="index + 1" >
                    <div class="group" v-for="data in item.data">
                        <div class="title">{{ data.title }}</div>
                        <div class="content">{{ data.content }}</div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
  export default {
    name: "about",
    data() {
      return {
        activeNames: [1],
        collapseData: []
      };
    },
    created() {
      axios.get('../../static/about/aboutData.json').then(res=> {
        this.collapseData = res.data;
      });
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>

<style scoped lang="less">
    .wrapper {
        >.content {
            padding-top: 2.75rem;
            box-sizing: border-box;
            /deep/.el-collapse-item__header {
                padding: 0 10px;
                box-sizing: border-box;
            }
            /deep/.el-collapse-item__content {
                padding: 0 10px;
                box-sizing: border-box;
            }
            .group {
                margin-bottom: 10px;
                border-bottom: 1px solid #DCDFE6;
                .title {
                    font-weight: bold;
                }
            }
        }
    }


</style>
