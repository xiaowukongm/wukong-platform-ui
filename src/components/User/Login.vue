<template>
    <div class="login_container">
      <div class="login_box">
         <!--登录表单区域-->
         <el-form ref="loginFormRef" class="login_form" :model="loginForm" label-width="0px">
            <el-form-item prop="">
              <el-input v-model="loginForm.username" placeholder="登录名" prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item prop="">
              <el-input v-model="loginForm.password" placeholder="密码" prefix-icon="el-icon-lock" type="password"></el-input>
            </el-form-item>
            <!--按钮区域-->
            <el-form-item class="btns">
              <el-button type="primary" @click="">登录</el-button>
              <el-button type="info" @click="">注册</el-button>
            </el-form-item>
         </el-form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
              loginForm:{
                username:'',
                password:'',
              }
            }
        },
    }
</script>

<style scoped>
  .login_container{
    height:100%;
    background-color:#2b4b6b;
  }
  .login_box{
    width:450px;
    height:300px;
    background-color:#fff;
    boder-radius:2px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%)
  }
  .avatar_box img{
      width:100%;
      height:100%;
      border-radius:50%;
      background-color:#eee;

  }
  .login_form{
    position: absolute;
    top: 20%;
    width: 100%;
    padding: 0 50px;
    box-sizing: border-box;
  }
  .btns{
    /*text-align: center;*/
    /*弹性盒子*/
    display: flex;
    justify-content: center;
  }
</style>
