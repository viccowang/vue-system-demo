<template>
    <el-aside class="side" width="220px">
      <el-menu mode="vertical" :default-active="$route.path">
        <sidebar-menu-item :routes="asyncRouter"></sidebar-menu-item>
      </el-menu>
    </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarMenuItem from './SidebarMenuItem'

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['asyncRouter'])
  },
  components: {
    SidebarMenuItem
  }
}
</script>

<style lang="scss" scoped>
.side{
  background-color: darken($base-light-color, 1%);
  border-right: 1px solid darken($base-light-color, 3%);
}
</style>
