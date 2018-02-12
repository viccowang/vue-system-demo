<template>
  <el-container class="layout">
    <Headers />
    <el-container>
      <Sidebar class="sidebar" />
      <el-container class="main-content">
        <TagTabs class="tag-tabs" />
        <Main class="main" />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Headers from './components/header'
import Sidebar from './components/Sidebar'
import TagTabs from './components/tagTabs'
import Main from './components/main'

export default {
  name: 'Layout',
  components: {
    Headers,
    Sidebar,
    TagTabs,
    Main
  }
}
</script>

<style lang="scss" scoped>
.layout{
  height:100vh;
  display:flex;
  flex-direction: column;
  overflow: hidden;

  .sidebar{
    background: lighten($base-light-color, 100%);
  }

  .main-content{
    flex-direction: column;

    .tag-tabs{ height: 35px;}
    .main { flex:1 }

  }
}
</style>
