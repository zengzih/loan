<template>
    <div class="wrapper">
        <topComponent title="资料信息"></topComponent>
        <div class="content">
            <div class="group">
                <div class="title">填写真实有效的信息，审核才会通过哦~</div>
                <div class="section">
                    <el-row>
                        <el-col :span="6">手机号</el-col>
                        <el-col :span="14">
                            <input type="text" v-model="formData.phone">
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="8">验证码</el-col>
                        <el-col :span="8" class="yzm-input">
                            <input type="text" v-model="formData.code">
                        </el-col>
                        <el-col :span="8" class="yzm">
                            <el-button type="primary" size="mini" :disabled="yzmDisabled"  @click="getYzm">{{ yzmText }}</el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <footer>
            <el-button type="primary" @click="submit">提交</el-button>
        </footer>
    </div>
</template>

<script>
  /*
  * el-upload中的:data="{  }" 是上传附带的参数
  *
  * */
  export default {
    name: "userDetail",
    data() {
      return {
        formData: {
          phone: '',
          code: ''
        },
        yzmText: '发送验证码',
        yzmDisabled: false
      }
    },
    created() {
      // const { id } = this.$store.userInfo; 暂时先注释，不然会报错，用的时候在放开
      const id = '';

      // 获取用户信息，赋值给formData
      this.$request.get('', { id }).then(data=> {

      });
    },
    methods: {
      submit() {
        // 提交信息
        this.$request.post('', this.formData).then(data=> {
          this.$router.back();
        });
      },
      getYzm() {
        let num = 60;
        this.yzmDisabled = true;
        clearInterval(timer);
        const timer = setInterval(()=>  {
          if (!num) {
            this.yzmDisabled = false;
            this.yzmText = '发送验证码';
            clearInterval(timer);
          }
          this.yzmText = num + '秒后重新发送';
          num--;
        }, 1000);
      }
    }
  }
</script>

<style scoped lang="less">
    .wrapper {
        height: 100%;
        .content {
            padding-top: 2.75rem;
            padding-bottom: 3.5rem;
            box-sizing: border-box;
            .title {
                height: 40px;
                line-height: 40px;
                text-align: center;
                font-size: 12px;
            }
            .section {
                background: #fff;
                padding: 10px;
                box-sizing: border-box;
                .el-row {
                    height: 40px;
                    line-height: 40px;
                    font-size: 16px;
                    border-bottom: 1px solid #eee;
                    color: #4c4c4c;
                    &:last-child {
                        border-bottom: none;
                    }
                    input {
                        text-align: right;
                        color: #333;
                        width: 100%;
                    }
                    .yzm-input {
                        padding-right: 10px;
                        box-sizing: border-box;
                    }
                }
                .panel {
                    margin: 10px 0;
                    padding: 10px;
                    box-sizing: border-box;
                    border: 1px solid #eee;
                    border-radius: 2px;
                }
            }
        }
        footer {
            position: fixed;
            bottom: 0;
            height: 3.5rem;
            background: #e8eaec;
            width: 100%;
            line-height: 3.5rem;
            text-align: center;
            .el-button {
                width: 90%;
            }
        }
    }
</style>
