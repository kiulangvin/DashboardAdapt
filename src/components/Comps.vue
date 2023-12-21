<script setup>
import { ref } from "vue"
const name = ref('boys')
</script>
<template>
  <div>hello {{ name }}, this is helloworld components</div>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</template>

<style scoped></style>
