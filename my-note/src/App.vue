<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div> -->
    <div id="app">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="220px">
                    <Side />
                </el-aside>
                <el-container>
                    <!-- <MianContent/> -->
                    <el-main><router-view /></el-main>
                    <el-footer>Vinette Pang</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import Side from './components/Side.vue'
import MianContent from './components/MianContent.vue'

export default {
    name: 'app',
    components: {
        HelloWorld,
        Side,
        MianContent
    },
    methods: {
        handleOpen() {},
        handleClose() {},
    }
}
</script>
<style>
* {
    padding: 0;
    margin: 0;
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container .el-aside {
    line-height: 260px;
}

.el-row {
    margin-bottom: 20px;

}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>