<template>
    <div id="container">
        <div class="login-box" id="login-box" v-loading="loading">
            <div class="login-input-group">
                <el-form :model="ruleForm" :rules="rules">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" v-on:focus="openEys" placeholder="手机号" class="login-input-box"></el-input>
                    </el-form-item>
                    <!--
                    <el-form-item prop="password">
                        <el-input type="password" v-model="ruleForm.password" v-on:focus="closeEys" v-on:blur="openEys" placeholder="密码" class="login-input-box" show-password></el-input>
                    </el-form-item>-->
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
                    username: null,
                    password: null
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
            postLogin: function(){
                //首先进入加载模式
                this.loading = true;
                this.disableButton = true;
                const that = this;

                //发送登录请求
                this.axios.post('url', {
                    'username': this.ruleForm.username ,
                    //'password': this.ruleForm.password
                })
                    .then(function(res){
                        window.console.log(res);
                        // 首先取消登录按钮的锁定
                        that.loading = false;
                        that.disableButton = false;
                        // 然后弹出登录成功的消息提示
                        that.$notify({
                            title: '登录成功',
                            message: '即将在3秒内为您跳转到上次页面',
                            type: 'success'
                        });

                    })
                    .catch(function(error){
                        window.console.log(error);
                        that.loading = false;
                        that.disableButton = false;
                        that.$notify.error({
                            title: '登录失败',
                            message: '服务器存在错误，请稍后再试'
                        });


                    })
            },
            signOn: function(){
                /*
                if(this.ruleForm.username == null|| this.ruleForm.password == null ||
                    this.ruleForm.username === ""|| this.ruleForm.password === ""){
                    this.$notify.warning({
                        title: '用户名或密码为空',
                        message: '请输入您的用户名或者密码'
                    });
                    return false;
                }else{
                    this.postLogin();
                }*/
                if(this.ruleForm.username == null || this.ruleForm.username === ""){
                    this.$notify.warning({
                        title: '手机号为空',
                        message: '请您填写手机号！'
                    });
                    return false;
                }else{
                    this.postLogin();
                }

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
