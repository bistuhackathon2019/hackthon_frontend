<template>
    <div class="container">
        <div class="post-container">
            <div class="post-avatar-box">
                <img src="https://avatars2.githubusercontent.com/u/17066433?s=460&v=4" class="post-avatar"/>
            </div>
            <div class="post-time">
                <p>2019年5月18日 10:22</p>
            </div>
            <div class="content">
                <p class="content-font">
                    央广网北京5月17日消息（记者佟亚涛）据经济之声《天下财经》报道，
                    商务部昨天（16日）举行新闻发布会，新闻发言人高峰说，美方霸凌主义、
                    极限施压的做法导致中美经贸磋商严重受挫，中方将不得不采取相应反制措施。
                    加征关税对我国经济的影响完全可控。
                    不断加征关税无益于经贸问题解决
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
        name: "Home"
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
    }
    .content-font{
        font-size: 30px;
    }
    .post-time{
        position: relative;
        top: -10px;
        text-align: center;
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
    }
    .comment-item{
        margin-bottom: 40px;
    }
</style>
