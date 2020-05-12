<template>
  <div class="register_container">
    <div class="register_box">
      <el-form class="register_form" ref="RegisterFormRef" :model="RegisterForm" label-width="60px" label-position="right">
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
        <el-form-item class="btns">
          <el-button type="primary">注册</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
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

<style>
  .register_container{
    height:100%;
    background-color:#2b4b6b;
  }
  .register_box{
    width:450px;
    height:350px;
    background-color:#fff;
    border-radius:2px;
    position:absolute;
    left:50%;
    top:40%;
    transform:translate(-50%,-50%)
  }
  .register_form{
    position: absolute;
    margin-top: 40px;
    width: 100%;
    padding-left:20px;
    padding-right:40px;
    box-sizing: border-box;
  }
  .btns{
    display: flex;
    justify-content: center;
  }
</style>
