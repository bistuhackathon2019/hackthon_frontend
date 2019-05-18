<template>
  <div id="app">
    <el-container class="container">
      <el-header class="header">

        <el-menu default-active="1" class="el-menu-diy" mode="horizontal">
          <el-menu-item index="0"><img src="../public/logo.png" style="height:50px;display: inline;" /></el-menu-item>
          <!--<el-menu-item index="1" class="el-menu-item-float">登录 | 注册</el-menu-item>-->
          <el-submenu index="2" class="el-menu-item-float">
            <template slot="title"><img src="https://avatars2.githubusercontent.com/u/17066433?s=460&v=4" class="avatar"/> 帕尼</template>
            <el-menu-item index="2-1">个人信息</el-menu-item>
            <el-menu-item index="2-2">设置</el-menu-item>
            <el-menu-item index="2-3">退出登录</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" class="el-menu-item-float">消息中心</el-menu-item>
        </el-menu>

      </el-header>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    margin:0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin:0;
    padding:0;
  }
  .header {
    padding:0 !important;
    margin:0;
  }
  .container {
    padding:0 !important;
    margin:0;
  }
  .el-menu-diy {

  }
  .el-menu-item-float {
    float: right !important;
  }
  .avatar {
    width:35px;
    height:35px;
    border-radius: 50%;
  }
  .el-container {
    height: 100vh !important;
  }
  .el-main {
    height: 100% !important;
  }
</style>
