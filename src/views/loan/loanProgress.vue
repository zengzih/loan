<template>
    <div class="loan-progress">
        <top-component title="贷款进度"></top-component>
        <div class="wrapper">
            <div class="title">
                <span>订单编号：{{ detailCode }}</span>
            </div>
            <div class="content">
                <el-steps :active="3" align-center>
                    <el-step title="审核中" icon="el-icon-edit"></el-step>
                    <el-step title="审核通过" icon="el-icon-circle-check"></el-step>
                    <el-step title="到账成功" icon="icon iconfont icon-un-money-o"></el-step>
                </el-steps>
                <div class="detail">
                    <div class="title">借款详情</div>
                    <div class="content">
                        <el-row v-for="item in detail" :key="item.prop">
                            <el-col :span="6">{{ item.label }}</el-col>
                            <el-col :span="18">{{ formData[item.prop] || '-' }}</el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "loanProgress",
    data() {
      return {
        detail: [],
        formData: {},
        detailCode: '9527'

      }
    },
    created() {
      this.detail = [
        { label: '订单编号', prop: '' },
        { label: '借款金额', prop: '' },
        { label: '借款期限', prop: '' },
        { label: '到账银行', prop: '' },
        { label: '收款账号', prop: '' },
        { label: '每月还款', prop: '' },
      ];
      // 获取详情
      const { id } = this.$route.query;
      this.$request.get('', { id }).then(data=> {
        this.formData = data;
      })
    }
  }
</script>

<style scoped lang="less">
    .loan-progress {
        height: 100%;
        .wrapper {
            padding: 10px;
            padding-top: 2.75rem ;
            box-sizing: border-box;
            background: #fff;
            .title {
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #eee;
                color: #606266;
                font-size: 14px;
                span {
                    margin-right: 10px;
                   /* &:last-child {
                        color: red;
                    }*/
                }
            }
            .content {
                margin-top: 20px;
                /deep/.el-steps {
                    padding-bottom: 20px;
                    border-bottom: 1px solid #eee;
                    .iconfont {
                        font-size: 25px;
                        font-weight: 400;
                    }
                }
                .detail {
                    margin-top: 20px;
                    .el-row {
                        padding: 5px 0;
                        font-size: 14px;
                        color: #909399;
                        .el-col {
                            &:last-child {
                                color: #606266;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
