<template>
  <el-menu :default-active="index" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>

<style>
</style>
