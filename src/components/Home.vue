<template>
    <div class="container">
        <el-card class="box-card">
            <el-row>
                <el-col :span="3">
                    <el-image class="emoji" :src="emoji[0]" :fit="fit"></el-image>
                </el-col>
                <el-col :span="3">
                    <el-image class="emoji" :src="emoji[1]" :fit="fit"></el-image>
                </el-col>
                <el-col :span="3">
                    <el-image class="emoji" :src="emoji[2]" :fit="fit"></el-image>
                </el-col>
                <el-col :span="3">
                    <el-image class="emoji" :src="emoji[3]" :fit="fit"></el-image>
                </el-col>
                <el-col :span="3">
                    <el-image class="emoji" :src="emoji[4]" :fit="fit"></el-image>
                </el-col>
                <el-col :span="3">
                    <el-image class="emoji" :src="emoji[5]" :fit="fit"></el-image>
                </el-col>
                <el-col :span="3">
                    <el-image class="emoji" :src="emoji[6]" :fit="fit"></el-image>
                </el-col>
                <el-col :span="3">
                    <el-image class="emoji" :src="emoji[8]" :fit="fit"></el-image>
                </el-col>
            </el-row>
            <el-collapse accordion style="width: 100%;margin-top:10px;">
                <el-collapse-item style="width: 100%;">
                    <div slot="title" style="margin:0 auto;">
                        更多表情
                    </div>
                    <div>
                        <el-row>
                            <el-col :span="3">
                                <el-image class="emoji" :src="emoji[7]" :fit="fit"></el-image>
                            </el-col>
                            <el-col :span="3">
                                <el-image class="emoji" :src="emoji[9]" :fit="fit"></el-image>
                            </el-col>
                            <el-col :span="3">
                                <el-image class="emoji" :src="emoji[11]" :fit="fit"></el-image>
                            </el-col>
                            <el-col :span="3">
                                <el-image class="emoji" :src="emoji[12]" :fit="fit"></el-image>
                            </el-col>
                            <el-col :span="3">
                                <el-image class="emoji" :src="emoji[13]" :fit="fit"></el-image>
                            </el-col>
                            <el-col :span="3">
                                <el-image class="emoji" :src="emoji[14]" :fit="fit"></el-image>
                            </el-col>
                            <el-col :span="3">
                                <el-image class="emoji" :src="emoji[15]" :fit="fit"></el-image>
                            </el-col>
                            <el-col :span="3">
                                <el-image class="emoji" :src="emoji[16]" :fit="fit"></el-image>
                            </el-col>
                            <el-col :span="3">
                                <el-image class="emoji" :src="emoji[17]" :fit="fit"></el-image>
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-card>
        <div class="container-box">
            <el-row>
                <el-col :span="3" class="avatar-box">
                    <img src="https://avatars2.githubusercontent.com/u/17066433?s=460&v=4" class="avatar"/>
                    <p class="time"> 1天前</p>
                </el-col>
                <el-col :span="21">
                    <div class="content-box">
                        <p class="content">
                            央广网北京5月17日消息（记者佟亚涛）据经济之声《天下财经》报道，
                            商务部昨天（16日）举行新闻发布会，新闻发言人高峰说，美方霸凌主义、
                        </p>
                    </div>

                </el-col>
            </el-row>

            <el-dialog title="发布帖子" :visible.sync="postBoxStatus" width="80%" :before-close="postBoxClose">
                <el-form :model="ruleForm" :rules="rules">
                    <el-form-item label="文章内容" prop="content">
                        <el-input type="textarea" v-model="ruleForm.content" autocomplete="off" :autosize="{ minRows: 8, maxRows: 10}"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="postBoxClose">取 消</el-button>
                <el-button type="primary" @click="postBoxStatus = false">确 定</el-button>
            </span>
            </el-dialog>
            <div class="post-button-box">
                <el-button class="post-button" type="primary" icon="el-icon-edit" circle @click="openPostBox"></el-button>
            </div>
        </div>
        <div class="page-button-box">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000" class="page-button">
            </el-pagination>
        </div>
    </div>


</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                postBoxStatus: false,
                ruleForm:{
                    content: ''
                },
                rules:{
                    content : [
                        { required: true, message: '请您输入内容', trigger: 'blur' },
                        { min: 8, max: 2000, message: '至少需要8个字，最多不超过2000个字', trigger: 'blur' }
                    ]
                },
                emoji: ['http://cdn01-app.smartgslb.com/1.png','http://cdn01-app.smartgslb.com/2.png','http://cdn01-app.smartgslb.com/3.png',
                'http://cdn01-app.smartgslb.com/4.png','http://cdn01-app.smartgslb.com/5.png' ,'http://cdn01-app.smartgslb.com/6.png' ,
                'http://cdn01-app.smartgslb.com/7.png','http://cdn01-app.smartgslb.com/8.png','http://cdn01-app.smartgslb.com/9.png',
                'http://cdn01-app.smartgslb.com/10.png', 'http://cdn01-app.smartgslb.com/11.png' ,'http://cdn01-app.smartgslb.com/12.png',
                'http://cdn01-app.smartgslb.com/13.png', 'http://cdn01-app.smartgslb.com/14.png', 'http://cdn01-app.smartgslb.com/15.png',
                'http://cdn01-app.smartgslb.com/16.png', 'http://cdn01-app.smartgslb.com/17.png' ,'http://cdn01-app.smartgslb.com/18.png']

            }
        },
        methods:{
            postBoxClose: function(){
                this.postBoxStatus = false;
                this.$message({
                    message: '您已经取消了发帖',
                    type: 'warning'
                });
            },
            openPostBox: function(){
                this.postBoxStatus = true;
            },
        }
    }
</script>

<style scoped>
    .container-box{
        width: 90%;
        background: #F9F9F9;
        margin: 0 auto;
        border-radius: 5px;
    }
    .box-card{
        width: 90%;
        margin: 0 auto 50px;
        text-align: center;
    }
    .avatar-box{
        text-align: center;
        border-right: 1px solid #E4E7ED;
        padding-top:20px;
        padding-bottom: 20px;
    }
    .avatar{
        width:80%;
        height:auto;
        margin: 0 auto;
    }
    .time{
        position: relative;
        top:-10px;
        font-size: 15px;
        color: #606266
    }
    .content-box{
        width:90%;
        margin: 0 auto;
    }
    .content{
        font-size:20px;
    }
    .post-button-box{
        position: fixed;
        bottom:20px;
        right:30px;
    }
    .post-button{
        width:50px;
        height:50px;
        font-size: 20px;
    }
    .page-button-box{
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .page-button{
        margin: 0 auto;
        text-align: center;
    }
    .emoji{
        width: 100px;
        height: 100px;
        border: 2px solid transparent;
    }
    .emoji:hover{
        border: 2px solid #DCDFE6;
    }
    .emoji-selected{
        border: 2px solid #409EFF;
    }
</style>
