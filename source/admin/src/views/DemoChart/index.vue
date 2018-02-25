<template>
    <div>
       <h4>Demo Chart</h4>
       进行了页面缓存,noCache值为false <p/>
       该页面为动态增加自定义组件Demo <p/>
      <button @click="addChart('e-chart','barChar1Data')">Add Chart1</button>
      <button @click="addChart('e-chart','barChar2Data')">Add Chart2</button>
      <br>
      <echart-coms :charts="charts"/>
    </div>
</template>

<script>
import echartComs from './echartComs'

export default {
  name: 'demoChart',
  components: { echartComs },
  data () {
    return {
      charts: []
    }
  },
  methods: {
    addChart (componentName, data) {
      this.charts.push({name: componentName, data: data})
    }
  }
}
</script>
