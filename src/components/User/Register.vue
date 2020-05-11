<template>
  <div id="register">
    <el-form ref="RegisterFormRef" :model="RegisterForm" label-width="60px" label-position="right" size="mini">
      <el-form-item label="用户名">
        <el-input v-model="RegisterForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="RegisterForm.password"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="RegisterForm.eamil"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="RegisterForm.mobile_phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">注册</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "Register",
      data(){
          return{
            RegisterForm:{
              username:'',
              password:'',
              eamil:'',
              mobile_phone:'',
            }
          }
      },
    }
</script>

<style scoped>
  #register{
    width:300px;
    height:300px;
    position:absolute;
    left:50%;
    top:30%;
    transform:translate(-50%,-50%)
  }
  /*.el-form-item{*/
  /*  margin-bottom:0px;*/
  /*}*/
</style>
