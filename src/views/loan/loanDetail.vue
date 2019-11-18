<template>
    <div class="load-detail-wrapper">
        <top-component title="申请贷款"></top-component>
        <div class="content">
            <header>确认借款信息</header>
            <section>
                <el-row>
                    <el-col :span="6">借款金额</el-col>
                    <el-col :span="18">￥{{ $store.state.loanDetail.money }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">借款期限</el-col>
                    <el-col :span="18">36个月</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">每月还款</el-col>
                    <el-col :span="18">￥176（含日利率 0.02% ¥353.6元）</el-col>
                </el-row>
            </section>
        </div>
        <footer>
            <el-checkbox v-model="model">我也确认</el-checkbox>
            <div>
                <el-button type="primary" @click="submit()">提交借款申请</el-button>
            </div>
        </footer>
    </div>
</template>

<script>
  export default {
    name: "loanDetail",
    data() {
      return {
        model: false
      }
    },
    created() {

    },
    methods: {
      submit() {
        if (!this.model) {
          this.$message({
            showClose: true,
            message: '请先确认借款信息',
            type: 'warning'
          });
        }
        this.$request.post('').then(data=> {
          this.$message({
            showClose: true,
            message: '这是一条消息提示',
            type: 'success'  // 成功设置为 success，失败设置为 error
          });
        });
      }
    }
  }
</script>

<style scoped lang="less">
    .load-detail-wrapper {
        height: 100%;
        .content {
            background: #fff;
            padding: 10px;
            padding-top: 2.75rem;
            box-sizing: border-box;
            position: relative;
            header {
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #eee;
                font-size: 16px;
                font-weight: bold;
            }
            section {
                margin-top: 10px;
                .el-row {
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    color: #606266;
                }
            }
        }
        footer {
            margin-top: 20px;
            padding: 0 15px;
            >div {
                text-align: center;
                margin-top: 20px;
                .el-button {
                    width: 100%;
                }
            }
        }
    }
</style>
