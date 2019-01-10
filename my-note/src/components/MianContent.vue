<template>
    <el-main>
        <el-row>
            <el-col :span="20">
                <el-card shadow="hover">
                    鼠标悬浮时显示
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
    </el-main>
</template>
<script>
export default {
    name: 'MianContent',
    props: {},
    methods: {
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>