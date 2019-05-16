<template>
    <div id="container">
        <div class="login-box" id="login-box" v-loading="loading">
            <div class="login-input-group">
                <el-form :model="ruleForm" :rules="rules">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" v-on:focus="openEys" placeholder="用户名|邮箱" class="login-input-box"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="ruleForm.password" v-on:focus="closeEys" v-on:blur="openEys" placeholder="密码" class="login-input-box"></el-input>
                    </el-form-item>
                    <el-button type="primary" class="login-button" @click="signOn" :loading="disableButton">登录 | 注册</el-button>
                </el-form>


            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                loading: false,
                disableButton: false,
                ruleForm:{
                    username: '',
                    password: ''
                },
                rules:{
                    username : [
                        { required: true, message: '请输入用户名或邮箱', trigger: 'blur' },
                        { min: 4, max: 22, message: '长度在 4 到 22 个字符', trigger: 'blur' }
                    ],
                    password : [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 8, max: 22, message: '长度在 8 到 22 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            closeEys: function(){
                document.getElementById('login-box').style.backgroundImage = "url(" + require('../assets/login-before.png') + ")";
                window.console.log("jajaj")
            },
            openEys: function(){
                document.getElementById('login-box').style.backgroundImage = "url(" + require('../assets/login-after.png') + ")";
            },
            signOn: function(){
                this.loading = true;
                this.disableButton = true;
                const that = this;
                setTimeout(function(){
                    that.loading = false;
                    that.disableButton = false;
                },3000)
            }
        }
    }
</script>

<style>
    #container {
        width: 100%;
        height: 100%;
    }
    .login-box {
        position: relative;
        top:20px;
        margin: 0 auto;
        width:350px;
        height:500px;
        background-image: url("../assets/login-after.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
    }
    .login-input-group{
        position: relative;
        top:353px;
    }
    .login-input-box .el-input__inner{
        height:60px !important;
        line-height: 60px !important;
        font-size: 25px;
        background-color: rgba(220,223,230,0.8);
        color: #303133;
        text-align: center;

    }
    .el-input__inner::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color:    #606266;
    }
    .el-input__inner::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:    #606266;
    }
    .el-input__inner::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:    #606266;
    }
    .el-input__inner::-ms-input-placeholder { /* Internet Explorer 10-11 */
        color:    #606266;
    }

    .login-button {
        width:100%;
        height: 60px;
        font-size: 25px;
    }
</style>
