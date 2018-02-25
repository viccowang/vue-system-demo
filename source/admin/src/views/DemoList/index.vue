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
import { Component } from 'vue-property-decorator' // 使用Class(类)的方式创建Vue实例需要引入该组件

import { tableData } from './tableData'

@Component
export default class DemoList extends Vue {
  // initial table data()
  tableData = tableData
}
</script>
