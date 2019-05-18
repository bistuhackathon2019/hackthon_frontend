<template>
    <div class="container">
        <el-row>
            <el-col :span="3" class="avatar-box">
                <img src="https://avatars2.githubusercontent.com/u/17066433?s=460&v=4" class="avatar"/>
            </el-col>
            <el-col :span="21">

            </el-col>
        </el-row>
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
        background: #F9F9F9;
        margin: 0 auto;
        border-radius: 5px;
    }
    .avatar-box{

    }
    .avatar{
        width:80%;
        height:auto;
        margin: 0 auto;
    }

</style>
