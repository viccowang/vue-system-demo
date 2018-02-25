<template>
    <div>
      <h4>Demo List</h4>
      <el-table :data="tableData" style="width:100%">
        <el-table-column prop="date" label="Date" width="190"></el-table-column>
        <el-table-column prop="name" label="Name" width="100"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'   //使用Class(类)的方式创建Vue实例需要引入该组件

import { tableData } from './tableData'

/**@augments
 * 可以使用Babel插件来实现使用Class(类)的方式书写Vue代码
 * 包括Decorators装饰器的使用.
 * 目前根据组件的文档说明,类中可对应使用
 * data, methods, render, hooksMethods, computedMethods
 * 其他属性配置到装饰器Component中.
 * 看个人喜好使用...
 */

@Component
export default class DemoList extends Vue {
  // table data
  tableData = tableData

}
</script>

<style>

</style>
