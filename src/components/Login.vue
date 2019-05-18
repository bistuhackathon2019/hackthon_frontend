<template>
    <div id="container">
        <div class="login-box" id="login-box" v-loading="loading">
            <div class="login-input-group">
                <el-form :model="ruleForm" :rules="rules">
                    <el-form-item prop="username">
                        <el-input type="number" v-model="ruleForm.username" v-on:focus="openEys" v-on:change="checkUser" placeholder="Phone Num" class="login-input-box" ></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input type="password" v-model="ruleForm.password" v-on:focus="closeEys" v-on:blur="openEys" placeholder="Password" class="login-input-box" show-password></el-input>
                    </el-form-item>
                    <el-button type="primary" class="login-button" @click="signOn" :loading="disableButton">{{buttonInfo}}</el-button>
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
                        { required: true, message: 'Please input Phone Num and password', trigger: 'blur' },
                        { min: 11, max: 22, message: 'length 11 to 22.', trigger: 'blur' }
                    ],
                    password : [
                        { required: true, message: 'Please input password', trigger: 'blur' },
                        { min: 8, max: 22, message: 'length 8 to 22.', trigger: 'blur' }
                    ]
                },
                buttonInfo: 'Sign in | Sign up'
            }
        },
        methods:{
            closeEys: function(){
                document.getElementById('login-box').style.backgroundImage = "url(" + require('../assets/login-before.png') + ")";
            },
            openEys: function(){
                document.getElementById('login-box').style.backgroundImage = "url(" + require('../assets/login-after.png') + ")";
            },
            checkUser: function(){
                const that = this;
                if(this.ruleForm.username != null || this.ruleForm.username != ""){
                    this.axios.get('http://39.105.132.146:8080/user/check/' + this.ruleForm.username)
                        .then(function(res){
                            if(res.data.isExist === 'false'){
                                that.buttonInfo = 'Sign up';
                            }else{
                                that.buttonInfo = 'Sign in';
                                that.$message(' ^_^ Master,Welcome back to home!');
                            }
                        })
                }

            },
            postLogin: function(){
                //首先进入加载模式
                this.loading = true;
                this.disableButton = true;
                const that = this;
                //发送登录请求
                this.axios.get('http://39.105.132.146:8080/login?phone=' + this.ruleForm.username)
                    .then(function(res){
                        window.console.log(res);

                        if(res.data.loginState === "true"){
                            that.$notify({
                                title: 'Sign in Success',
                                message: 'Will back to Home Page.',
                                type: 'success'
                            });
                            // 这里存在问题
                            that.$cookies.set('username',that.ruleForm.username,24*60*60*1000);
                            that.$cookies.set('userid',res.data.user.id,24*60*60*1000);
                            that.$cookies.set('sessionKey',res.data.user.sessionKey,24*60*60*1000);
                            that.$router.push({ path:'/home'})
                            window.console.log(that.$cookies.get('userid'))

                        }else{
                            that.loading = false;
                            that.disableButton = true;
                            that.$notify.error({
                                title: 'Sign in Failed',
                                message: 'The error is ' + res.data.msg
                            });
                        }
                        // 然后弹出登录成功的消息提示


                    })
                    .catch(function(error){
                        window.console.log(error);
                        that.loading = false;
                        that.disableButton = false;
                        that.$notify.error({
                            title: 'Sign in Failed',
                            message: 'The server have some error,Please wait a min.'
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
                        title: 'The Phone Num is empty',
                        message: 'Please input your phone num.'
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
