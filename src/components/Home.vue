<template>
    <div class="container">
        <el-card class="box-card">
                <el-row>
                    <el-col :xl="3" :lg="3" :md="3" :sm="12" :xs="14" v-for="(item,index) in emoji" v-bind:key="index">
                    <span @click="changeMood(index)">
                        <el-image :class="item.selected" :src="item.src" :fit="fit"></el-image>
                    </span>
                    </el-col>
                </el-row>

        </el-card>
        <div class="container-box" v-loading="loading">
            <el-row v-for="(item, index) in listData" v-bind:key="index" class="cards">
                    <el-col :xl="3" :lg="3" :md="3" :sm="12" :xs="14" class="avatar-box">
                        <img :src="item.mood" class="avatar"/>
                        <p class="time"> {{item.sendTime}}</p>
                    </el-col>

                    <el-col :span="21">
                        <div class="content-box">
                            <p class="content">
                                {{item.content}}
                            </p>
                        </div>

                    </el-col>
                    <el-button style="position: absolute; bottom:20px;right:20px;" @click="goTo(item.postId)" type="primary">Comment</el-button>

            </el-row>

            <el-dialog title="Send a topic" :visible.sync="postBoxStatus" width="80%" :before-close="postBoxCancle">
                <el-form :model="ruleForm" :rules="rules">
                    <el-form-item label="The Content" prop="content">
                        <el-input type="textarea" v-model="ruleForm.content" autocomplete="off" :autosize="{ minRows: 8, maxRows: 10}"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="postBoxCancle">Cancel</el-button>
                <el-button type="primary" @click="postArticle">Submit</el-button>
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
                    :total="total" class="page-button"
                    @current-change="getList">
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
                selected:[],
                page:0,
                total:0,
                loading: true,
                listData:[],
                ruleForm:{
                    content: ''
                },
                rules:{
                    content : [
                        { required: true, message: 'Please your input some content in filed.', trigger: 'blur' },
                        { min: 8, max: 2000, message: 'length is 8 to 1000', trigger: 'blur' }
                    ]
                },
                fit: 'fit',
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
        methods:{
            postBoxCancle: function(){
                this.postBoxStatus = false;
                this.$message({
                    message: 'Cancel Post.',
                    type: 'warning'
                });
            },
            openPostBox: function(){
                this.postBoxStatus = true;
            },
            changeMood: function(mood){
                this.reSetEmoji();
                this.emoji[mood].selected = "emoji-selected";
                this.$cookies.set('mood',mood,24*60*60*1000);
                const that = this;
                this.axios.get("http://39.105.132.146:8080/user/update?id=" + this.$cookies.get("userid") + "&phone=" + this.$cookies.get("username") +
                    "&mood=" + (mood + 1) + "&sessionKey=" + this.$cookies.get("sessionKey")
                ).then(function(){
                    that.$notify.success({
                        title: 'The Mood is change!',
                        message: "^_^"
                    });
                }).catch(function(error){
                    window.console.log(error)
                })
            },
            reSetEmoji: function(){
              this.emoji = [{'src':'http://cdn01-app.smartgslb.com/1.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/2.png', 'selected': 'emoji'},
                  {'src':'http://cdn01-app.smartgslb.com/3.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/4.png', 'selected': 'emoji'},
                  {'src':'http://cdn01-app.smartgslb.com/5.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/6.png', 'selected': 'emoji'},
                  {'src':'http://cdn01-app.smartgslb.com/7.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/8.png', 'selected': 'emoji'},
                  {'src':'http://cdn01-app.smartgslb.com/9.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/10.png', 'selected': 'emoji'},
                  {'src':'http://cdn01-app.smartgslb.com/11.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/12.png', 'selected': 'emoji'},
                  {'src':'http://cdn01-app.smartgslb.com/13.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/14.png', 'selected': 'emoji'},
                  {'src':'http://cdn01-app.smartgslb.com/15.png', 'selected': 'emoji'},{'src':'http://cdn01-app.smartgslb.com/16.png', 'selected': 'emoji'},
                  {'src':'http://cdn01-app.smartgslb.com/17.png', 'selected': 'emoji'}];
            },
            getUser: function(){
                const username = this.$cookies.get('username');
                const sessionKey = this.$cookies.get('sessionKey');
                const that = this;
                if(username === undefined || username == "" || sessionKey === undefined || sessionKey == ""){
                    that.login_status = true;
                    that.user_status = false;

                }else{
                    that.username = username;

                    that.getUserInfo(that.$cookies.get('userid'));
                }
            },
            getUserInfo: function(userid){
                window.console.log(userid);
                const that = this;
                this.axios.get('http://39.105.132.146:8080/user/find/' + userid).then(function(res){
                    if(res.data.mood == null){
                        window.console.log(res.data);
                        that.emoji[0].selected = "emoji-selected";
                        that.$cookies.set('mood',0,24*60*60*1000);
                    }else{
                        let moodindex = res.data.mood - 1;
                        that.emoji[moodindex].selected = "emoji-selected";
                        that.$cookies.set('mood',moodindex,24*60*60*1000);
                    }

                }).catch(function(error){
                    window.console.log(error)
                })
            },
            postArticle: function(){
                window.console.log(this.$cookies.get('userid') + "###" + this.$cookies.get('mood'));
                const that = this;
                this.axios.get('http://39.105.132.146:8080/post/add', {
                    params: {
                        userId: this.$cookies.get('userid'),
                        mood: this.$cookies.get('mood'),
                        content: this.ruleForm.content,
                    }

                }).then(function (res) {
                    window.console.log(res);
                    that.postBoxStatus = false;
                    that.$notify.success({
                        message: 'Refreshing',
                        title: 'Send Success'
                    });
                    that.getList(that.page)

                })
            },
            getList: function(page){
                const that = this;
                this.page = page - 1;
                this.axios.get('http://39.105.132.146:8080/post/find', {
                    params: {
                        page: page - 1,
                        size: 10
                    }
                }).then(function(res){
                    window.console.log(res);
                    that.listData = res.data.content;
                    that.total = res.data.totalElements;
                    let list = that.listData;
                    const ther = that;
                    for(let i=0;i<list.length;i++){
                        window.console.log(ther.listData[i].mood);
                        ther.listData[i].mood = "http://cdn01-app.smartgslb.com/" + (Number(ther.listData[i].mood) + 1) + ".png"
                    }
                    window.console.log(that.listData);
                    that.loading = false;

                })

            },
            goTo: function(postId){
                window.console.log(postId);
                this.$cookies.set('nowartid',postId,60*60*1000);

                this.$router.push(
                    { path:'/article', params: { ids: postId }}
                )
            }
        },
        created() {
            this.getUser();
            this.getList(0);
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
        height:129px;

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
        width: 100px;
        height: 100px;
        border: 2px solid #DCDFE6;
    }
    .emoji-selected{
        width: 100px;
        height: 100px;
        border: 2px solid #409EFF;
    }
    .cards{
        border-bottom: 1px solid #E4E7ED;
    }
</style>
