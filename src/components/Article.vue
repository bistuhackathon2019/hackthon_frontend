<template>
    <div class="container">
        <div class="post-container">
            <div class="post-avatar-box">
                <img :src="emoji[article.mood-1].src" class="post-avatar"/>
            </div>
            <div class="post-time">
                <p>{{article.sendTime}}</p>
            </div>
            <div class="content">
                <p class="content-font">
                    {{article.content}}
                </p>
            </div>
        </div>
        <div class="comment-box">
            <div class="block">
                <el-timeline class="comment-item">
                    <el-timeline-item timestamp="#1 2018/4/12" placement="top" color="#0bbd87">
                        <el-card>
                            <el-row>
                                <el-col :span="3" class="comment-avatar-box">
                                    <img src="https://avatars2.githubusercontent.com/u/17066433?s=460&v=4" class="comment-avatar"/>
                                </el-col>
                                <el-col :span="21">
                                    <p class="comment-font">我觉得这个评论非常有意思，因此我很喜欢啊！</p>
                                </el-col>
                            </el-row>
                            <div class="comment-button">
                                <el-link :underline="false">回复</el-link>
                            </div>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="#2 2018/4/3" placement="top" color="#0bbd87">
                        <el-card>
                            <el-row>
                                <el-col :span="3" class="comment-avatar-box">
                                    <img src="https://avatars2.githubusercontent.com/u/17066433?s=460&v=4" class="comment-avatar"/>
                                </el-col>
                                <el-col :span="21">
                                    <p class="comment-font">我觉得这个评论非常有意思，因此我很喜欢啊！</p>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/2" placement="top" color="#0bbd87">
                        <el-card>
                            <el-row>
                                <el-col :span="3" class="comment-avatar-box">
                                    <img src="https://avatars2.githubusercontent.com/u/17066433?s=460&v=4" class="comment-avatar"/>
                                </el-col>
                                <el-col :span="21">
                                    <p class="comment-font">我觉得这个评论非常有意思，因此我很喜欢啊！</p>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
                <el-timeline class="comment-item">
                    <el-timeline-item timestamp="#1 2018/4/12" placement="top" color="#000">
                        <el-card>
                            <el-row>
                                <el-col :span="3" class="comment-avatar-box">
                                    <img src="https://avatars2.githubusercontent.com/u/17066433?s=460&v=4" class="comment-avatar"/>
                                </el-col>
                                <el-col :span="21">
                                    <p class="comment-font">我觉得这个评论非常有意思，因此我很喜欢啊！</p>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="#2 2018/4/3" placement="top" color="#000">
                        <el-card>
                            <el-row>
                                <el-col :span="3" class="comment-avatar-box">
                                    <img src="https://avatars2.githubusercontent.com/u/17066433?s=460&v=4" class="comment-avatar"/>
                                </el-col>
                                <el-col :span="21">
                                    <p class="comment-font">我觉得这个评论非常有意思，因此我很喜欢啊！</p>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/2" placement="top" color="#000">
                        <el-card>
                            <el-row>
                                <el-col :span="3" class="comment-avatar-box">
                                    <img src="https://avatars2.githubusercontent.com/u/17066433?s=460&v=4" class="comment-avatar"/>
                                </el-col>
                                <el-col :span="21">
                                    <p class="comment-font">我觉得这个评论非常有意思，因此我很喜欢啊！</p>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                article: null,
                comment: [],
                emoji: [{'src':'http://cdn01-app.smartgslb.com/1.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/2.png', 'selected': 'emoji'},
                    {'src':'http://cdn01-app.smartgslb.com/3.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/4.png', 'selected': 'emoji'},
                    {'src':'http://cdn01-app.smartgslb.com/5.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/6.png', 'selected': 'emoji'},
                    {'src':'http://cdn01-app.smartgslb.com/7.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/8.png', 'selected': 'emoji'},
                    {'src':'http://cdn01-app.smartgslb.com/9.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/10.png', 'selected': 'emoji'},
                    {'src':'http://cdn01-app.smartgslb.com/11.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/12.png', 'selected': 'emoji'},
                    {'src':'http://cdn01-app.smartgslb.com/13.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/14.png', 'selected': 'emoji'},
                    {'src':'http://cdn01-app.smartgslb.com/15.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/16.png', 'selected': 'emoji'},
                    {'src':'http://cdn01-app.smartgslb.com/17.png', 'selected': 'emoji'}]

            }
        },
        methods: {
            openReplyBox: function(){
                this.$prompt('请输入邮箱', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            getArticle: function(id){
                const that = this;
                this.axios.get('http://39.105.132.146:8080/post/find/' + id).then(function(res){
                    that.article = res.data;
                    window.console.log(res)
                })
            }
        },
        created: function(){
            window.console.log(this.$cookies.get('nowartid'));
            this.getArticle(this.$cookies.get('nowartid'));
        }
    }
</script>

<style scoped>
    .container{
        width: 90%;
        margin: 0 auto;
    }
    .post-container{
        margin: 0 auto !important;
        background: #F9F9F9;
        border-radius: 5px;

    }
    .post-avatar-box{
        width: 100%;
        position: relative;
        margin: 0 auto;
        text-align: center;
        padding-top:40px;
    }
    .post-avatar{
        width:100px;
        border-radius: 50%;
    }
    .content{
        width: 90%;
        margin: 0 auto;
        padding-bottom:10px;
        color: #303133;
    }
    .content-font{
        font-size: 30px;
    }
    .post-time{
        position: relative;
        top: -10px;
        text-align: center;
        color: #606266;
    }
    .comment-box{
        position: relative;
        top:10px;
        background: #F9F9F9;
        border-right: 5px;
        padding-top:40px;
        padding-bottom:40px;
    }
    .block{
        width:97%;

    }
    .comment-avatar{
        width: 50%;
        border-radius: 50%;
    }
    .comment-avatar-box{
        margin: 0 auto;
        text-align: center;
    }
    .comment-font{
        font-size: 20px;
        color: #303133;
    }
    .comment-item{
        margin-bottom: 40px;
    }
    .comment-button{
        float: right;
        margin-top:10px;
        margin-bottom:10px;
    }
</style>
