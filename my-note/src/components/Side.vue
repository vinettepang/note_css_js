<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :default-openeds="openeds">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>CSS - 收集</span>
            </template>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
            <el-menu-item index="1-1">学习收集</el-menu-item>
            <el-menu-item index="1-2">日常收集</el-menu-item>
            <el-menu-item index="1-3">旧合集</el-menu-item>
            <!-- <el-menu-item-group>
                <template slot="title">学习收集</template>
                <el-menu-item index="1-1">学习收集</el-menu-item>
                <el-menu-item index="1-2">日常收集</el-menu-item>
            </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>JS - 收集</span>
            </template>
            <el-menu-item index="2-1">学习收集</el-menu-item>
            <el-menu-item index="2-2">日常收集</el-menu-item>
            <el-menu-item index="2-3">旧合集</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">HTML 收集</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-document"></i>
            <span slot="title">优秀网站 收集</span>
        </el-menu-item>
        <el-menu-item index="5" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">其他</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
export default {
    name: 'Side',
    data(){
      return{
        openeds: ['1'],
      }
    },
    props: {},
    methods: {
        handleOpen() {},
        handleClose() {},
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo{
   height: 100%;
   text-align: left;
}
</style>