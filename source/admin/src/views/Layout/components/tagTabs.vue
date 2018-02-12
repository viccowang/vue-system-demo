<template>
  <div class="tag-tabs">
    tabs
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TagTabs',
  computed: {
    ...mapGetters(['visitedViews'])
  }
}
</script>

<style lang="scss" scoped>
.tag-tabs{
  background-color: $base-light-color;
}
</style>
