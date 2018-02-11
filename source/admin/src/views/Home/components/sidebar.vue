<template>
    <el-aside class="side" width="220px">
      <el-menu>
         <!-- 有子菜单 -->
         <el-submenu index="1">
           <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Menu1</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
            <span slot="title">Menu1-1</span>
         </el-menu-item>
         </el-submenu>
         <!-- 无子菜单 -->
         <el-menu-item index="2">
           <i class="el-icon-menu"></i>
           <span slot="title">Menu2</span>
         </el-menu-item>
         <el-menu-item index="3">
           <i class="el-icon-menu"></i>
           <span slot="title">Menu3</span>
         </el-menu-item>
         <el-menu-item index="4">
           <i class="el-icon-menu"></i>
           <span slot="title">Menu4</span>
         </el-menu-item>
      </el-menu>
    </el-aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
.side{
  background-color: darken($base-light-color, 1%);
  border-right: 1px solid darken($base-light-color, 3%);
}
</style>
