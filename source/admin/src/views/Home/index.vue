<template>
  <el-container class="home">
    <Headers />
    <el-container>
      <Sidebar />
      <Main />
    </el-container>
  </el-container>
</template>

<script>
import Headers from './components/header'
import Sidebar from './components/sidebar'
import Main from './components/main'

export default {
  name: 'Home',
  components: {
    Headers,
    Sidebar,
    Main
  }
}
</script>

<style lang="scss" scoped>
.home{
  height:100vh;
  display:flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
